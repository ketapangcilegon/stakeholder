import { 
  Document, 
  Packer, 
  Paragraph, 
  Table, 
  TableCell, 
  TableRow, 
  TextRun, 
  HeadingLevel, 
  AlignmentType, 
  BorderStyle, 
  WidthType, 
  ShadingType 
} from 'docx';
import { Dimensi, Variabel, Indikator, PertanyaanItem, StakeholderGroup } from '@/config/constants';

interface DocxExportParams {
  dimensions: Dimensi[];
  variables: Variabel[];
  indicators: Indikator[];
  questions: PertanyaanItem[];
  stakeholderGroups: StakeholderGroup[];
}

export async function generateInstrumentDocx({
  dimensions,
  variables,
  indicators,
  questions,
  stakeholderGroups
}: DocxExportParams): Promise<Blob> {
  const currentDate = new Date().toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const doc = new Document({
    title: 'Instrumen Penelitian Kuesioner Keberlanjutan Perikanan Tangkap Cilegon',
    description: 'Bank Soal, Variabel, Indikator & Skala Likert Penelitian Tesis untuk Keperluan Audit Dosen Pembimbing',
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1440, // 1 inch
              bottom: 1440,
              left: 1440,
              right: 1440
            }
          }
        },
        children: [
          // JUDUL DOKUMEN
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 120 },
            children: [
              new TextRun({
                text: 'INSTRUMEN PENELITIAN KUESIONER TESIS',
                bold: true,
                size: 28, // 14pt
                font: 'Arial',
                color: '0F172A'
              })
            ]
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 240 },
            children: [
              new TextRun({
                text: 'ANALISIS PERSEPSI PEMANGKU KEPENTINGAN TERHADAP KEBERLANJUTAN PENGELOLAAN PERIKANAN TANGKAP DI KAWASAN PESISIR KOTA CILEGON',
                bold: true,
                size: 22, // 11pt
                font: 'Arial',
                color: '1E3A8A'
              })
            ]
          }),

          // METADATA
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { after: 360 },
            children: [
              new TextRun({
                text: `Sistem SI-KEPALA Cilegon • Dokumen Audit Instrumen & Bank Soal • Tanggal Ekspor: ${currentDate}`,
                italics: true,
                size: 18,
                font: 'Arial',
                color: '64748B'
              })
            ]
          }),

          // LEMBAR PENGESAHAN & AUDIT DOSEN PEMBIMBING
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 240, after: 120 },
            children: [
              new TextRun({
                text: 'I. LEMBAR TINJAUAN & PENGESAHAN AUDIT DOSEN PEMBIMBING',
                bold: true,
                size: 22,
                font: 'Arial',
                color: '0F172A'
              })
            ]
          }),

          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    shading: { fill: 'F1F5F9', type: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: 'Nama Mahasiswa / Peneliti', bold: true, size: 18, font: 'Arial' })] })]
                  }),
                  new TableCell({
                    width: { size: 70, type: WidthType.PERCENTAGE },
                    children: [new Paragraph({ children: [new TextRun({ text: 'Peneliti Magister Manajemen Perikanan', size: 18, font: 'Arial' })] })]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: 'F1F5F9', type: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: 'Judul Tesis', bold: true, size: 18, font: 'Arial' })] })]
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'Analisis Persepsi Pemangku Kepentingan terhadap Keberlanjutan Pengelolaan Perikanan Tangkap di Kawasan Pesisir Kota Cilegon', size: 18, font: 'Arial' })] })]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: 'F1F5F9', type: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: 'Cakupan Instrumen', bold: true, size: 18, font: 'Arial' })] })]
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: `${dimensions.length} Dimensi Keberlanjutan, ${variables.length} Variabel, ${indicators.length} Indikator, dan ${questions.length} Butir Pertanyaan Terstruktur (5 Kelompok Stakeholder).`, size: 18, font: 'Arial' })] })]
                  })
                ]
              }),
              new TableRow({
                children: [
                  new TableCell({
                    shading: { fill: 'F1F5F9', type: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: 'Catatan & Koreksi Dosen Pembimbing', bold: true, size: 18, font: 'Arial' })] })]
                  }),
                  new TableCell({
                    children: [
                      new Paragraph({ children: [new TextRun({ text: '[  ] Instrumen Disetujui Tanpa Revisi', size: 18, font: 'Arial' })] }),
                      new Paragraph({ children: [new TextRun({ text: '[  ] Instrumen Disetujui dengan Revisi Redaksional', size: 18, font: 'Arial' })] }),
                      new Paragraph({ children: [new TextRun({ text: '[  ] Perlu Penyesuaian Indikator / Variabel', size: 18, font: 'Arial' })] }),
                      new Paragraph({ spacing: { before: 120 }, children: [new TextRun({ text: 'Catatan Khusus: ............................................................................................................................................', size: 18, font: 'Arial', color: '94A3B8' })] }),
                      new Paragraph({ spacing: { before: 180 }, children: [new TextRun({ text: 'Tanda Tangan Dosen Pembimbing: _______________________      Tanggal: _______________', size: 18, font: 'Arial' })] })
                    ]
                  })
                ]
              })
            ]
          }),

          new Paragraph({ spacing: { before: 240, after: 120 }, children: [] }),

          // STRUKTUR OPERASIONAL DIMENSI & VARIABEL
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 240, after: 120 },
            children: [
              new TextRun({
                text: 'II. STRUKTUR MATRIKS OPERASIONAL DIMENSI & VARIABEL',
                bold: true,
                size: 22,
                font: 'Arial',
                color: '0F172A'
              })
            ]
          }),

          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 15, type: WidthType.PERCENTAGE },
                    shading: { fill: '0284C7', type: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: 'KODE', bold: true, size: 18, font: 'Arial', color: 'FFFFFF' })] })]
                  }),
                  new TableCell({
                    width: { size: 30, type: WidthType.PERCENTAGE },
                    shading: { fill: '0284C7', type: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: 'DIMENSI', bold: true, size: 18, font: 'Arial', color: 'FFFFFF' })] })]
                  }),
                  new TableCell({
                    width: { size: 55, type: WidthType.PERCENTAGE },
                    shading: { fill: '0284C7', type: ShadingType.CLEAR },
                    children: [new Paragraph({ children: [new TextRun({ text: 'VARIABEL PENELITIAN', bold: true, size: 18, font: 'Arial', color: 'FFFFFF' })] })]
                  })
                ]
              }),
              ...dimensions.map(dim => {
                const dimVars = variables.filter(v => v.id_dimensi === dim.id);
                return new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph({ children: [new TextRun({ text: dim.id.toUpperCase(), bold: true, size: 18, font: 'Arial' })] })]
                    }),
                    new TableCell({
                      children: [new Paragraph({ children: [new TextRun({ text: dim.nama, bold: true, size: 18, font: 'Arial' })] })]
                    }),
                    new TableCell({
                      children: dimVars.map(v => new Paragraph({
                        children: [
                          new TextRun({ text: `• ${v.id}: ${v.nama}`, size: 18, font: 'Arial' })
                        ]
                      }))
                    })
                  ]
                });
              })
            ]
          }),

          new Paragraph({ spacing: { before: 240, after: 120 }, children: [] }),

          // BANK PERTANYAAN PER STAKEHOLDER GROUP
          new Paragraph({
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 240, after: 120 },
            children: [
              new TextRun({
                text: 'III. BANK PERTANYAAN KUESIONER & PANDUAN SKALA LIKERT',
                bold: true,
                size: 22,
                font: 'Arial',
                color: '0F172A'
              })
            ]
          }),

          new Paragraph({
            spacing: { after: 180 },
            children: [
              new TextRun({
                text: 'Berikut adalah butir pertanyaan terstruktur yang diadaptasi sesuai gaya bahasa (tone) masing-masing kelompok pemangku kepentingan (Skala Likert 1.00 – 5.00):',
                italics: true,
                size: 18,
                font: 'Arial',
                color: '475569'
              })
            ]
          }),

          ...stakeholderGroups.flatMap((group, gIdx) => {
            const groupQuestions = questions.filter(q => q.id_stakeholder_group === group.id);

            return [
              new Paragraph({
                heading: HeadingLevel.HEADING_2,
                spacing: { before: 240, after: 120 },
                children: [
                  new TextRun({
                    text: `3.${gIdx + 1}. KELOMPOK: ${group.nama.toUpperCase()} (Target: ${group.target} Responden)`,
                    bold: true,
                    size: 20,
                    font: 'Arial',
                    color: '1E3A8A'
                  })
                ]
              }),
              new Paragraph({
                spacing: { after: 120 },
                children: [
                  new TextRun({
                    text: `Karakteristik Persona: ${group.deskripsi} (Gaya Bahasa: ${group.tone})`,
                    italics: true,
                    size: 16,
                    font: 'Arial',
                    color: '64748B'
                  })
                ]
              }),
              new Table({
                width: { size: 100, type: WidthType.PERCENTAGE },
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({
                        width: { size: 8, type: WidthType.PERCENTAGE },
                        shading: { fill: '0F172A', type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: 'NO', bold: true, size: 16, font: 'Arial', color: 'FFFFFF' })] })]
                      }),
                      new TableCell({
                        width: { size: 12, type: WidthType.PERCENTAGE },
                        shading: { fill: '0F172A', type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: 'KODE', bold: true, size: 16, font: 'Arial', color: 'FFFFFF' })] })]
                      }),
                      new TableCell({
                        width: { size: 45, type: WidthType.PERCENTAGE },
                        shading: { fill: '0F172A', type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: 'REDAKSI PERTANYAAN', bold: true, size: 16, font: 'Arial', color: 'FFFFFF' })] })]
                      }),
                      new TableCell({
                        width: { size: 35, type: WidthType.PERCENTAGE },
                        shading: { fill: '0F172A', type: ShadingType.CLEAR },
                        children: [new Paragraph({ children: [new TextRun({ text: 'RUBRIK SKALA LIKERT (1–5)', bold: true, size: 16, font: 'Arial', color: 'FFFFFF' })] })]
                      })
                    ]
                  }),
                  ...groupQuestions.map((q, qIdx) => {
                    const ind = indicators.find(i => i.id === q.id_indikator);
                    const kode = ind ? ind.kode : q.id_indikator;

                    return new TableRow({
                      children: [
                        new TableCell({
                          children: [new Paragraph({ children: [new TextRun({ text: `${qIdx + 1}`, size: 16, font: 'Arial' })] })]
                        }),
                        new TableCell({
                          children: [new Paragraph({ children: [new TextRun({ text: kode, bold: true, size: 16, font: 'Arial', color: '0284C7' })] })]
                        }),
                        new TableCell({
                          children: [
                            new Paragraph({
                              children: [
                                new TextRun({ text: `"${q.teks}"`, bold: true, size: 16, font: 'Arial' })
                              ]
                            }),
                            new Paragraph({
                              children: [
                                new TextRun({ text: ind ? `Indikator: ${ind.deskripsi}` : '', italics: true, size: 14, font: 'Arial', color: '64748B' })
                              ]
                            })
                          ]
                        }),
                        new TableCell({
                          children: [
                            new Paragraph({ children: [new TextRun({ text: `1: ${q.skala_label[1]}`, size: 14, font: 'Arial' })] }),
                            new Paragraph({ children: [new TextRun({ text: `2: ${q.skala_label[2]}`, size: 14, font: 'Arial' })] }),
                            new Paragraph({ children: [new TextRun({ text: `3: ${q.skala_label[3]}`, size: 14, font: 'Arial' })] }),
                            new Paragraph({ children: [new TextRun({ text: `4: ${q.skala_label[4]}`, size: 14, font: 'Arial' })] }),
                            new Paragraph({ children: [new TextRun({ text: `5: ${q.skala_label[5]}`, size: 14, font: 'Arial' })] })
                          ]
                        })
                      ]
                    });
                  })
                ]
              }),
              new Paragraph({ spacing: { before: 180, after: 120 }, children: [] })
            ];
          })
        ]
      }
    ]
  });

  return await Packer.toBlob(doc);
}
