import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { 
  STAKEHOLDER_GROUPS, 
  DIMENSI_LIST, 
  VARIABEL_LIST, 
  INDIKATOR_LIST 
} from '../data/questionnaireData';
import { QUESTION_BANK } from '../data/questionBank';

export const PdfPrintService = {
  generateQuestionnairePdf(stakeholderGroupId: string) {
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
    
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('Analisis Keberlanjutan Pengelolaan Perikanan Tangkap di Kawasan Pesisir Kota Cilegon', pageWidth / 2, 22, { align: 'center' });
    
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
    doc.text('Berikan tanda silang (X) atau centang (V) pada salah satu kolom skala skor (1 s/d 5) yang paling mencerminkan kondisi riil di lapangan:', 14, currentY + 4);

    // Keterangan Skala
    const scaleLegends = [
      ['1 = Sangat Tidak Setuju / Sangat Buruk / Sangat Rendah', '4 = Setuju / Baik / Tinggi'],
      ['2 = Tidak Setuju / Kurang Baik / Rendah', '5 = Sangat Setuju / Sangat Baik / Sangat Tinggi'],
      ['3 = Cukup / Netral / Moderat', '']
    ];
    autoTable(doc, {
      startY: currentY + 6,
      theme: 'grid',
      styles: { fontSize: 7.5, cellPadding: 1 },
      body: scaleLegends
    });

    // 5. Tabel Daftar Pertanyaan per Dimensi
    currentY = (doc as any).lastAutoTable.finalY + 4;

    const questions = QUESTION_BANK.filter(q => q.id_stakeholder_group === stakeholderGroupId);

    // Grouping by Dimension
    const tableBody: any[] = [];
    let qNumber = 1;

    DIMENSI_LIST.forEach(dim => {
      // Find variables in this dim
      const dimVars = VARIABEL_LIST.filter(v => v.id_dimensi === dim.id);
      const varIds = dimVars.map(v => v.id);

      // Section header row
      tableBody.push([
        {
          content: `${dim.nama.toUpperCase()} - ${dim.deskripsi}`,
          colSpan: 7,
          styles: { fontStyle: 'bold', fillColor: [230, 240, 250], textColor: [10, 30, 60] }
        }
      ]);

      dimVars.forEach(v => {
        const vIndicators = INDIKATOR_LIST.filter(i => i.id_variabel === v.id);
        vIndicators.forEach(ind => {
          const q = questions.find(item => item.id_indikator === ind.id);
          if (q) {
            tableBody.push([
              qNumber.toString(),
              `${q.teks}\n[Indikator: ${ind.kode} - ${ind.deskripsi}]`,
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
          { content: 'Pernyataan / Pertanyaan Indikator Penelitian', styles: { halign: 'left' } },
          { content: '1', styles: { halign: 'center', cellWidth: 9 } },
          { content: '2', styles: { halign: 'center', cellWidth: 9 } },
          { content: '3', styles: { halign: 'center', cellWidth: 9 } },
          { content: '4', styles: { halign: 'center', cellWidth: 9 } },
          { content: '5', styles: { halign: 'center', cellWidth: 9 } }
        ]
      ],
      headStyles: {
        fillColor: [15, 39, 68], // Maritime deep navy
        textColor: [255, 255, 255],
        fontSize: 8.5,
        fontStyle: 'bold'
      },
      styles: {
        fontSize: 7.8,
        cellPadding: 2,
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

    // Save/Download PDF
    const cleanName = group.nama.replace(/[^a-zA-Z0-9]/g, '_');
    doc.save(`Kuesioner_Cetak_${cleanName}.pdf`);
  }
};
