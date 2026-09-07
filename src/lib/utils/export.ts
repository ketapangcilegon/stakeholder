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
  filename = 'Data_Kuesioner_Tesis_Cilegon.xlsx'
) {
  const wb = XLSX.utils.book_new();

  // 1. Profil Responden
  const respondentRows = respondents.map((r, idx) => {
    const group = STAKEHOLDER_GROUPS.find(g => g.id === r.id_stakeholder_group);
    return {
      'No': idx + 1,
      'ID Responden': r.id,
      'Nama Lengkap': r.nama,
      'Kelompok Stakeholder': group ? group.nama : r.id_stakeholder_group,
      'Instansi / Lembaga / Pangkalan': r.instansi,
      'Jabatan': r.jabatan || '-',
      'No HP': r.no_hp || '-',
      'Metode Pengisian': r.is_manual_entry ? 'Entri Manual (Kuesioner Cetak)' : 'Kuesioner Digital Web',
      'Status Pengisian': r.status_pengisian === 'selesai' ? 'Lengkap (100%)' : 'Draft / Sebagian',
      'Jumlah Soal Terjawab': r.total_dijawab || 0,
      'Tanggal Input': r.created_at ? new Date(r.created_at).toLocaleDateString('id-ID') : '-'
    };
  });
  const wsRespondents = XLSX.utils.json_to_sheet(respondentRows);
  XLSX.utils.book_append_sheet(wb, wsRespondents, '1. Profil Responden');

  // 2. Matriks Skor Mentah (1-5)
  const rawMatrixRows = respondents.map((r, idx) => {
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
  });
  const wsRaw = XLSX.utils.json_to_sheet(rawMatrixRows);
  XLSX.utils.book_append_sheet(wb, wsRaw, '2. Matriks Skor Mentah');

  // 3. Rekap Skor Variabel
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
  XLSX.utils.book_append_sheet(wb, wsStats, '3. Rekap Skor Variabel');

  // 4. Kamus Bank Pertanyaan (210)
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
  XLSX.utils.book_append_sheet(wb, wsCatalog, '4. Kamus 210 Bank Pertanyaan');

  XLSX.writeFile(wb, filename);
}

export function exportCsvData(
  respondents: any[],
  answers: any[],
  filename = 'Data_Mentah_SPSS_Cilegon.csv'
) {
  const rawMatrixRows = respondents.map((r) => {
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
  });

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
