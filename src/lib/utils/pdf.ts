import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { 
  STAKEHOLDER_GROUPS, 
  DIMENSI_LIST, 
  VARIABEL_LIST, 
  INDIKATOR_LIST 
} from '@/config/constants';
import { QUESTION_BANK } from '@/data/questionBank';
import { InstrumentService } from '@/lib/instrumentService';

export function generateQuestionnairePdf(stakeholderGroupId: string) {
  const group = STAKEHOLDER_GROUPS.find(g => g.id === stakeholderGroupId);
  if (!group) return;

  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();

  // 1. Kop Surat / Header Penelitian
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(13);
  doc.text('KUESIONER PENELITIAN TESIS MAGISTER MANAJEMEN PERIKANAN', pageWidth / 2, 16, { align: 'center' });
  
  doc.setFontSize(9.5);
  doc.setFont('helvetica', 'normal');
  doc.text('Pengelolaan Perikanan Tangkap Berkelanjutan di Kota Cilegon: Strategi Kebijakan Partisipatif Berbasis Persepsi dan Peran Stakeholder', pageWidth / 2, 22, { align: 'center' });
  
  doc.setLineWidth(0.5);
  doc.line(14, 25, pageWidth - 14, 25);
  doc.setLineWidth(0.2);
  doc.line(14, 26, pageWidth - 14, 26);

  // 2. Info Target Stakeholder
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10);
  doc.text(`KELOMPOK SASARAN: ${group.nama.toUpperCase()}`, 14, 33);
  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.text(`Karakteristik Responden: ${group.deskripsi}`, 14, 38);

  // 3. Form Isian Identitas Responden
  autoTable(doc, {
    startY: 42,
    theme: 'plain',
    styles: { fontSize: 8.5, cellPadding: 1.5 },
    columnStyles: {
      0: { cellWidth: 40, fontStyle: 'bold' },
      1: { cellWidth: 5 },
      2: { cellWidth: 130 }
    },
    body: [
      ['Nama Responden', ':', '.................................................................................................................'],
      ['Instansi / Pangkalan / Kel.', ':', '.................................................................................................................'],
      ['Jabatan / Peran di Lapangan', ':', '.................................................................................................................'],
      ['Nomor Kontak / WhatsApp', ':', '.................................................................................................................'],
      ['Tanggal Wawancara / Isi', ':', '.................................................................................................................']
    ]
  });

  // 4. Petunjuk Pengisian
  let currentY = (doc as any).lastAutoTable.finalY + 4;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.text('PETUNJUK PENGISIAN:', 14, currentY);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.text('Berikan tanda silang (X) atau centang (V) pada salah satu kolom skor (1 s/d 5) sesuai keterangan "Skala" di bawah setiap pertanyaan:', 14, currentY + 4);

  // 5. Tabel Daftar Pertanyaan per Dimensi (Bank Soal Eksisting)
  // Skala Likert ditampilkan per butir (skala_label masing-masing pertanyaan)
  currentY = currentY + 8;
  
  const instrumentData = typeof window !== 'undefined' ? InstrumentService.getInstrumentData() : null;
  const dimensions = instrumentData?.dimensions || DIMENSI_LIST;
  const variables = instrumentData?.variables || VARIABEL_LIST;
  const indicators = instrumentData?.indicators || INDIKATOR_LIST;
  const allQuestions = instrumentData?.questions || QUESTION_BANK;

  const questions = allQuestions.filter(q => q.id_stakeholder_group === stakeholderGroupId);

  const tableBody: any[] = [];
  let qNumber = 1;

  dimensions.forEach(dim => {
    const dimVars = variables.filter(v => v.id_dimensi === dim.id);

    tableBody.push([
      {
        content: `${dim.nama.toUpperCase()} - ${dim.deskripsi}`,
        colSpan: 7,
        styles: { fontStyle: 'bold', fillColor: [230, 240, 250], textColor: [10, 30, 60] }
      }
    ]);

    dimVars.forEach(v => {
      const vIndicators = indicators.filter(i => i.id_variabel === v.id);
      vIndicators.forEach(ind => {
        const q = questions.find(item => item.id_indikator === ind.id);
        if (q) {
          const skala = [1, 2, 3, 4, 5]
            .map(n => `${n} = ${q.skala_label?.[n as 1 | 2 | 3 | 4 | 5] ?? '-'}`)
            .join(';   ');
          tableBody.push([
            qNumber.toString(),
            `${q.teks}\n\nSkala: ${skala}`,
            '[  ]',
            '[  ]',
            '[  ]',
            '[  ]',
            '[  ]'
          ]);
          qNumber++;
        }
      });
    });
  });

  autoTable(doc, {
    startY: currentY,
    theme: 'grid',
    head: [
      [
        { content: 'No', styles: { halign: 'center', cellWidth: 8 } },
        { content: 'Pernyataan / Pertanyaan Penelitian', styles: { halign: 'left' } },
        { content: '1', styles: { halign: 'center', cellWidth: 9 } },
        { content: '2', styles: { halign: 'center', cellWidth: 9 } },
        { content: '3', styles: { halign: 'center', cellWidth: 9 } },
        { content: '4', styles: { halign: 'center', cellWidth: 9 } },
        { content: '5', styles: { halign: 'center', cellWidth: 9 } }
      ]
    ],
    headStyles: {
      fillColor: [15, 39, 68],
      textColor: [255, 255, 255],
      fontSize: 8.5,
      fontStyle: 'bold'
    },
    styles: {
      fontSize: 8,
      cellPadding: 2.2,
      valign: 'middle'
    },
    columnStyles: {
      0: { halign: 'center', fontStyle: 'bold' },
      1: { halign: 'left' },
      2: { halign: 'center' },
      3: { halign: 'center' },
      4: { halign: 'center' },
      5: { halign: 'center' },
      6: { halign: 'center' }
    },
    body: tableBody,
    pageBreak: 'auto'
  });

  // Footer penomoran halaman otomatis
  const pageCount = (doc as any).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(7.5);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(130, 140, 150);
    doc.text(
      `Dokumen Kuesioner Lapangan Tesis • ${group.nama} • Halaman ${i} dari ${pageCount}`,
      pageWidth / 2,
      doc.internal.pageSize.getHeight() - 7,
      { align: 'center' }
    );
  }

  const cleanName = group.nama.replace(/[^a-zA-Z0-9]/g, '_');
  doc.save(`Kuesioner_Cetak_${cleanName}.pdf`);
}
