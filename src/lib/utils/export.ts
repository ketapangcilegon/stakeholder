import * as XLSX from 'xlsx';
import { 
  DIMENSI_LIST, 
  VARIABEL_LIST, 
  INDIKATOR_LIST, 
  STAKEHOLDER_GROUPS 
} from '@/config/constants';
import { QUESTION_BANK } from '@/data/questionBank';

export function exportFullExcel(
  respondents: any[],
  answers: any[],
  filename = 'Data_Kuesioner_Tesis_Cilegon_Riil.xlsx'
) {
  const wb = XLSX.utils.book_new();

  // 1. Profil Responden Riil
  const respondentRows = respondents.length > 0 ? respondents.map((r, idx) => {
    const group = STAKEHOLDER_GROUPS.find(g => g.id === r.id_stakeholder_group);
    return {
      'No': idx + 1,
      'ID Responden': r.id,
      'Nama Lengkap': r.nama,
      'Kelompok Stakeholder': group ? group.nama : r.id_stakeholder_group,
      'Instansi / Lembaga / Pangkalan': r.instansi,
      'Jabatan': r.jabatan || '-',
      'No HP': r.no_hp || '-',
      'Email / Akun': r.email || r.user_id_google || '-',
      'Metode Pengisian': r.is_manual_entry ? 'Entri Manual (Kuesioner Cetak)' : 'Kuesioner Digital Web',
      'Status Pengisian': r.status_pengisian === 'selesai' ? 'Lengkap (100%)' : 'Draft / Sebagian',
      'Jumlah Soal Terjawab': r.total_dijawab || 0,
      'Tanggal Input': r.created_at ? new Date(r.created_at).toLocaleDateString('id-ID') : '-'
    };
  }) : [{ 'Status': 'Belum ada responden riil yang masuk' }];
  const wsRespondents = XLSX.utils.json_to_sheet(respondentRows);
  XLSX.utils.book_append_sheet(wb, wsRespondents, '1. Profil Responden Riil');

  // 2. Matriks Skor Mentah (1-5)
  const rawMatrixRows = respondents.length > 0 ? respondents.map((r, idx) => {
    const group = STAKEHOLDER_GROUPS.find(g => g.id === r.id_stakeholder_group);
    const rowObj: Record<string, any> = {
      'No': idx + 1,
      'ID Responden': r.id,
      'Nama': r.nama,
      'Kelompok': group ? group.nama : r.id_stakeholder_group
    };

    INDIKATOR_LIST.forEach(ind => {
      const userAns = answers.find(a => a.id_responden === r.id && a.id_indikator === ind.id);
      rowObj[ind.kode] = userAns ? userAns.skor : '-';
    });

    return rowObj;
  }) : [{ 'Status': 'Belum ada data mentah responden riil' }];
  const wsRaw = XLSX.utils.json_to_sheet(rawMatrixRows);
  XLSX.utils.book_append_sheet(wb, wsRaw, '2. Matriks Skor Mentah');

  // 3. Matriks Tabulasi per Dimensi & Variabel
  const tableRows: any[] = [];
  DIMENSI_LIST.forEach(dim => {
    const dimVars = VARIABEL_LIST.filter(v => v.id_dimensi === dim.id);
    const dimInds = INDIKATOR_LIST.filter(i => {
      const vObj = VARIABEL_LIST.find(v => v.id === i.id_variabel);
      return vObj && vObj.id_dimensi === dim.id;
    });
    const dimIndIds = dimInds.map(i => i.id);
    const allDimAns = answers.filter(a => dimIndIds.includes(a.id_indikator));
    const dimSum = allDimAns.reduce((acc, curr) => acc + (curr.skor || 0), 0);
    const dimAvg = allDimAns.length > 0 ? parseFloat((dimSum / allDimAns.length).toFixed(2)) : 0;

    tableRows.push({
      'Kode': dim.id,
      'Dimensi / Variabel': `${dim.nama.toUpperCase()} (${dimVars.length} Variabel)`,
      'Pemda': '',
      'Pelaku Usaha': '',
      'Masy. Pesisir': '',
      'Akademisi / LSM': '',
      'Industri': '',
      'Rata-Rata': dimAvg,
      'Status / Kategori': dimAvg >= 4.2 ? 'Sangat Baik' : dimAvg >= 3.4 ? 'Baik' : dimAvg >= 2.6 ? 'Sedang' : dimAvg > 0 ? 'Kurang' : 'Belum Ada Data'
    });

    dimVars.forEach(v => {
      const varIndicators = INDIKATOR_LIST.filter(i => i.id_variabel === v.id);
      const indIds = varIndicators.map(i => i.id);
      const allVAns = answers.filter(a => indIds.includes(a.id_indikator));
      const allSum = allVAns.reduce((acc, curr) => acc + (curr.skor || 0), 0);
      const vAvg = allVAns.length > 0 ? parseFloat((allSum / allVAns.length).toFixed(2)) : 0;

      const groupAverages = STAKEHOLDER_GROUPS.map(g => {
        const groupRespIds = respondents.filter(r => r.id_stakeholder_group === g.id).map(r => r.id);
        const gAns = answers.filter(a => groupRespIds.includes(a.id_responden) && indIds.includes(a.id_indikator));
        const gSum = gAns.reduce((acc, curr) => acc + (curr.skor || 0), 0);
        return gAns.length > 0 ? parseFloat((gSum / gAns.length).toFixed(2)) : '-';
      });

      tableRows.push({
        'Kode': v.id,
        'Dimensi / Variabel': v.nama,
        'Pemda': groupAverages[0],
        'Pelaku Usaha': groupAverages[1],
        'Masy. Pesisir': groupAverages[2],
        'Akademisi / LSM': groupAverages[3],
        'Industri': groupAverages[4],
        'Rata-Rata': vAvg,
        'Status / Kategori': vAvg >= 4.2 ? 'Sangat Baik' : vAvg >= 3.4 ? 'Baik' : vAvg >= 2.6 ? 'Sedang' : vAvg > 0 ? 'Kurang' : 'Belum Ada Data'
      });
    });
  });
  const wsMatrix = XLSX.utils.json_to_sheet(tableRows);
  XLSX.utils.book_append_sheet(wb, wsMatrix, '3. Matriks Tabulasi Riil');

  // 4. Rekap Skor Variabel
  const statSummaryRows = VARIABEL_LIST.map((v) => {
    const dim = DIMENSI_LIST.find(d => d.id === v.id_dimensi);
    const varIndicators = INDIKATOR_LIST.filter(i => i.id_variabel === v.id);
    const indIds = varIndicators.map(i => i.id);

    const rowObj: Record<string, any> = {
      'Kode': v.id,
      'Dimensi': dim ? dim.nama : v.id_dimensi,
      'Nama Variabel': v.nama,
      'Jumlah Indikator': varIndicators.length
    };

    const allVAns = answers.filter(a => indIds.includes(a.id_indikator));
    const allSum = allVAns.reduce((acc, curr) => acc + (curr.skor || 0), 0);
    rowObj['Rata-Rata Total'] = allVAns.length > 0 ? parseFloat((allSum / allVAns.length).toFixed(2)) : 0;

    STAKEHOLDER_GROUPS.forEach(g => {
      const groupRespIds = respondents.filter(r => r.id_stakeholder_group === g.id).map(r => r.id);
      const gAns = answers.filter(a => groupRespIds.includes(a.id_responden) && indIds.includes(a.id_indikator));
      const gSum = gAns.reduce((acc, curr) => acc + (curr.skor || 0), 0);
      rowObj[`Rata-Rata: ${g.id.toUpperCase()}`] = gAns.length > 0 ? parseFloat((gSum / gAns.length).toFixed(2)) : 0;
    });

    return rowObj;
  });
  const wsStats = XLSX.utils.json_to_sheet(statSummaryRows);
  XLSX.utils.book_append_sheet(wb, wsStats, '4. Rekap Skor Variabel');

  // 5. Kamus Bank Pertanyaan (210)
  const questionCatalogRows = QUESTION_BANK.map((q, idx) => {
    const ind = INDIKATOR_LIST.find(i => i.id === q.id_indikator);
    const v = ind ? VARIABEL_LIST.find(varItem => varItem.id === ind.id_variabel) : null;
    const dim = v ? DIMENSI_LIST.find(d => d.id === v.id_dimensi) : null;
    const grp = STAKEHOLDER_GROUPS.find(g => g.id === q.id_stakeholder_group);

    return {
      'No': idx + 1,
      'ID Soal': q.id,
      'Dimensi': dim ? dim.nama : '-',
      'Variabel': v ? `${v.id} - ${v.nama}` : '-',
      'Kode Indikator': ind ? ind.kode : '-',
      'Deskripsi Indikator': ind ? ind.deskripsi : '-',
      'Persona Stakeholder': grp ? grp.nama : q.id_stakeholder_group,
      'Redaksi Pertanyaan': q.teks,
      'Skor 1': q.skala_label[1],
      'Skor 2': q.skala_label[2],
      'Skor 3': q.skala_label[3],
      'Skor 4': q.skala_label[4],
      'Skor 5': q.skala_label[5]
    };
  });
  const wsCatalog = XLSX.utils.json_to_sheet(questionCatalogRows);
  XLSX.utils.book_append_sheet(wb, wsCatalog, '5. Kamus 210 Bank Pertanyaan');

  XLSX.writeFile(wb, filename);
}

// Dedicated export function for Matriks Tabulasi Panel
export function exportMatriksTabulasiExcel(
  dimensionScores: any[],
  variableScores: any[],
  respondents: any[],
  answers: any[],
  filename = 'Matriks_Tabulasi_Skor_Perikanan_Cilegon.xlsx'
) {
  const wb = XLSX.utils.book_new();

  // Sheet 1: Matriks Tabulasi Skor per Dimensi & Variabel
  const tableRows: any[] = [];

  DIMENSI_LIST.forEach(dim => {
    const dimVars = VARIABEL_LIST.filter(v => v.id_dimensi === dim.id);
    const ds = dimensionScores.find(d => d.id === dim.id);

    tableRows.push({
      'Kode': dim.id,
      'Dimensi / Variabel': `${dim.nama.toUpperCase()} (${dimVars.length} Variabel)`,
      'Pemda': '',
      'Pelaku Usaha': '',
      'Masyarakat Pesisir': '',
      'Akademisi / LSM': '',
      'Industri': '',
      'Rata-Rata': ds ? parseFloat(ds.rataRata.toFixed(2)) : 0,
      'Status / Kategori': ds ? ds.kategori : '-'
    });

    dimVars.forEach(v => {
      const vScore = variableScores.find(item => item.id === v.id);
      const indIds = INDIKATOR_LIST.filter(i => i.id_variabel === v.id).map(i => i.id);

      const groupAverages = STAKEHOLDER_GROUPS.map(g => {
        const groupRespIds = respondents
          .filter(r => r.id_stakeholder_group === g.id)
          .map(r => r.id);
        const gAns = answers.filter(a => groupRespIds.includes(a.id_responden) && indIds.includes(a.id_indikator));
        const sum = gAns.reduce((acc, curr) => acc + (curr.skor || 0), 0);
        return gAns.length > 0 ? parseFloat((sum / gAns.length).toFixed(2)) : '-';
      });

      tableRows.push({
        'Kode': v.id,
        'Dimensi / Variabel': v.nama,
        'Pemda': groupAverages[0],
        'Pelaku Usaha': groupAverages[1],
        'Masyarakat Pesisir': groupAverages[2],
        'Akademisi / LSM': groupAverages[3],
        'Industri': groupAverages[4],
        'Rata-Rata': vScore ? parseFloat(vScore.rataRata.toFixed(2)) : 0,
        'Status / Kategori': vScore ? vScore.kategori : '-'
      });
    });
  });

  const wsMatrix = XLSX.utils.json_to_sheet(tableRows);
  XLSX.utils.book_append_sheet(wb, wsMatrix, '1. Matriks Tabulasi Skor');

  // Sheet 2: Ringkasan 5 Dimensi
  const dimRows = dimensionScores.map(d => ({
    'Kode Dimensi': d.id,
    'Nama Dimensi': d.nama,
    'Skor Rata-Rata (1-5)': parseFloat(d.rataRata.toFixed(2)),
    'Status Kategori': d.kategori
  }));
  const wsDim = XLSX.utils.json_to_sheet(dimRows);
  XLSX.utils.book_append_sheet(wb, wsDim, '2. Ringkasan 5 Dimensi');

  // Sheet 3: Profil Responden Riil
  const respRows = respondents.length > 0 ? respondents.map((r, idx) => {
    const grp = STAKEHOLDER_GROUPS.find(g => g.id === r.id_stakeholder_group);
    return {
      'No': idx + 1,
      'ID Responden': r.id,
      'Nama Lengkap': r.nama,
      'Kelompok Stakeholder': grp ? grp.nama : r.id_stakeholder_group,
      'Instansi / Pangkalan': r.instansi,
      'Jabatan': r.jabatan || '-',
      'Status Pengisian': r.status_pengisian === 'selesai' ? 'Lengkap (100%)' : 'Draft'
    };
  }) : [{ 'Status': 'Belum ada responden riil yang masuk' }];
  const wsResp = XLSX.utils.json_to_sheet(respRows);
  XLSX.utils.book_append_sheet(wb, wsResp, '3. Responden Riil Terlibat');

  XLSX.writeFile(wb, filename);
}

export function exportCsvData(
  respondents: any[],
  answers: any[],
  filename = 'Data_Mentah_SPSS_Cilegon_Riil.csv'
) {
  const rawMatrixRows = respondents.length > 0 ? respondents.map((r) => {
    const rowObj: Record<string, any> = {
      'RESP_ID': r.id,
      'STAKEHOLDER_CODE': r.id_stakeholder_group,
      'NAMA': (r.nama || '').replace(/,/g, ' '),
      'INSTANSI': (r.instansi || '').replace(/,/g, ' ')
    };

    INDIKATOR_LIST.forEach(ind => {
      const userAns = answers.find(a => a.id_responden === r.id && a.id_indikator === ind.id);
      rowObj[ind.kode.replace('-', '_')] = userAns ? userAns.skor : '';
    });

    return rowObj;
  }) : [{ 'STATUS': 'Belum ada responden riil' }];

  const ws = XLSX.utils.json_to_sheet(rawMatrixRows);
  const csvContent = XLSX.utils.sheet_to_csv(ws);
  
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
