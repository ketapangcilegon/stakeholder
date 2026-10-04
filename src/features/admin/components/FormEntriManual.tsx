'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  STAKEHOLDER_GROUPS, 
  DIMENSI_LIST, 
  VARIABEL_LIST, 
  INDIKATOR_LIST,
  DAFTAR_PANGKALAN,
  PangkalanNelayan
} from '@/config/constants';
import { SurveyService } from '@/lib/surveyService';
import { Save, CheckCircle2, RefreshCcw, MapPin } from 'lucide-react';

export default function FormEntriManual() {
  const router = useRouter();
  const [selectedGroupId, setSelectedGroupId] = useState<string>('pelaku_usaha');
  const [nama, setNama] = useState('');
  const [instansi, setInstansi] = useState('');
  const [jabatan, setJabatan] = useState('');
  const [noHp, setNoHp] = useState('');

  // Dynamic fields per persona
  const [usia, setUsia] = useState('');
  const [pangkalanNelayan, setPangkalanNelayan] = useState('');
  const [kelurahan, setKelurahan] = useState('');
  const [kecamatan, setKecamatan] = useState('');
  const [kubNelayan, setKubNelayan] = useState('');
  const [alamat, setAlamat] = useState('');

  const [scores, setScores] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const selectedGroup = STAKEHOLDER_GROUPS.find(g => g.id === selectedGroupId) || STAKEHOLDER_GROUPS[1];
  const questions = SurveyService.getQuestions(selectedGroup.id);
  const totalQuestions = questions.length;
  const answeredCount = Object.keys(scores).length;

  const handleScoreChange = (qId: string, val: number) => {
    setScores(prev => ({ ...prev, [qId]: val }));
  };

  const handlePangkalanChange = (namaPangkalan: string) => {
    setPangkalanNelayan(namaPangkalan);
    const found = DAFTAR_PANGKALAN.find(p => p.nama === namaPangkalan);
    if (found) {
      setKelurahan(found.kelurahan);
      setKecamatan(found.kecamatan);
    } else {
      setKelurahan('');
      setKecamatan('');
    }
  };

  const handleResetForm = () => {
    setNama('');
    setInstansi('');
    setJabatan('');
    setNoHp('');
    setUsia('');
    setPangkalanNelayan('');
    setKelurahan('');
    setKecamatan('');
    setKubNelayan('');
    setAlamat('');
    setScores({});
    setSuccessMessage(null);
  };

  const handleSubmitManual = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nama.trim()) {
      alert('Nama responden wajib diisi!');
      return;
    }

    if (selectedGroup.id === 'pelaku_usaha') {
      if (!usia.trim() || isNaN(Number(usia)) || Number(usia) <= 0) {
        alert('Silakan isi Usia responden nelayan!');
        return;
      }
      if (!pangkalanNelayan.trim()) {
        alert('Silakan pilih salah satu dari 9 Pangkalan Nelayan!');
        return;
      }
    } else if (selectedGroup.id === 'pemda') {
      if (!instansi.trim()) {
        alert('OPD / Instansi Pemda wajib diisi!');
        return;
      }
      if (!jabatan.trim()) {
        alert('Jabatan / Eselon wajib diisi!');
        return;
      }
    } else if (selectedGroup.id === 'masyarakat_pesisir') {
      if (!instansi.trim()) {
        alert('Instansi / Komunitas / Usaha wajib diisi!');
        return;
      }
      if (!alamat.trim()) {
        alert('Alamat domisili pesisir wajib diisi!');
        return;
      }
    } else if (selectedGroup.id === 'akademisi_lsm') {
      if (!instansi.trim()) {
        alert('Instansi / Lembaga akademisi/organisasi wajib diisi!');
        return;
      }
      if (!jabatan.trim()) {
        alert('Jabatan / Peran wajib diisi!');
        return;
      }
    } else if (selectedGroup.id === 'industri') {
      if (!jabatan.trim()) {
        alert('Jabatan di perusahaan wajib diisi!');
        return;
      }
      if (!instansi.trim()) {
        alert('Nama perusahaan / industri wajib diisi!');
        return;
      }
      if (!alamat.trim()) {
        alert('Alamat pabrik / kawasan industri wajib diisi!');
        return;
      }
    }

    setIsSubmitting(true);
    const finalInstansi = selectedGroup.id === 'pelaku_usaha'
      ? (kubNelayan.trim() ? `KUB ${kubNelayan.trim()} (Pangkalan ${pangkalanNelayan})` : `Pangkalan ${pangkalanNelayan}`)
      : instansi.trim();

    const result = await SurveyService.submitManualEntry(
      {
        nama: nama.trim(),
        instansi: finalInstansi,
        jabatan: jabatan.trim() || undefined,
        no_hp: noHp.trim() || undefined,
        id_stakeholder_group: selectedGroup.id,
        usia: (selectedGroup.id === 'pelaku_usaha' && usia.trim()) ? parseInt(usia, 10) : undefined,
        pangkalan_nelayan: selectedGroup.id === 'pelaku_usaha' ? pangkalanNelayan : undefined,
        kelurahan: selectedGroup.id === 'pelaku_usaha' ? kelurahan : undefined,
        kecamatan: selectedGroup.id === 'pelaku_usaha' ? kecamatan : undefined,
        kub_nelayan: selectedGroup.id === 'pelaku_usaha' ? (kubNelayan.trim() || undefined) : undefined,
        alamat: (selectedGroup.id === 'masyarakat_pesisir' || selectedGroup.id === 'industri') ? (alamat.trim() || undefined) : undefined,
      },
      scores
    );
    setIsSubmitting(false);

    if (result.success) {
      setSuccessMessage(`Berhasil menyimpan data kuesioner fisik atas nama: ${nama} (${selectedGroup.nama})`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert('Gagal menyimpan: ' + (result.error || 'Terjadi kesalahan sistem'));
    }
  };

  return (
    <form onSubmit={handleSubmitManual} className="space-y-8">
      {successMessage && (
        <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs sm:text-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 animate-fadeIn">
          <div className="flex items-center gap-2.5">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0" />
            <span className="font-bold">{successMessage}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleResetForm}
              className="px-3.5 py-1.5 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700 transition-all"
            >
              Input Lembar Baru
            </button>
            <button
              type="button"
              onClick={() => router.push('/dashboard')}
              className="px-3.5 py-1.5 border border-emerald-300 bg-white text-emerald-900 rounded-lg text-xs font-semibold hover:bg-emerald-50 transition-all"
            >
              Lihat Dashboard
            </button>
          </div>
        </div>
      )}

      {/* Profil Responden - Single Column Dynamic Form */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-bold text-lg text-slate-900">
              1. Identitas Responden dari Lembar Kuesioner
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Isian disesuaikan otomatis dengan kelompok stakeholder yang dipilih (format 1 kolom).
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-400">
            Wajib sesuai berkas fisik
          </span>
        </div>

        <div className="max-w-xl mx-auto space-y-4">
          {/* Pilihan Kelompok */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Kelompok Stakeholder Sasaran <span className="text-rose-500">*</span>
            </label>
            <select
              value={selectedGroupId}
              onChange={(e) => {
                setSelectedGroupId(e.target.value);
                setScores({});
              }}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm font-bold text-slate-800 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-ocean-500"
            >
              {STAKEHOLDER_GROUPS.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.nama} (Target: {g.target} Orang)
                </option>
              ))}
            </select>
          </div>

          {/* 1. PELAKU USAHA PERIKANAN TANGKAP */}
          {selectedGroup.id === 'pelaku_usaha' && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nama Lengkap Responden Nelayan <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama nelayan di lembar kuesioner"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Usia Responden (Tahun) <span className="text-rose-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  min="15"
                  max="100"
                  value={usia}
                  onChange={(e) => setUsia(e.target.value)}
                  placeholder="Contoh: 45"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Pangkalan Nelayan (9 Pangkalan se-Kota Cilegon) <span className="text-rose-500">*</span>
                </label>
                <select
                  required
                  value={pangkalanNelayan}
                  onChange={(e) => handlePangkalanChange(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-bold text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-ocean-500"
                >
                  <option value="">-- Pilih Salah Satu Pangkalan Nelayan --</option>
                  {DAFTAR_PANGKALAN.map((p, idx) => (
                    <option key={p.id} value={p.nama}>
                      {idx + 1}. Pangkalan {p.nama} (Kel. {p.kelurahan}, Kec. {p.kecamatan})
                    </option>
                  ))}
                </select>

                {pangkalanNelayan && (
                  <div className="mt-2.5 p-3 bg-emerald-50/90 border border-emerald-200 rounded-xl text-xs space-y-1 animate-fadeIn">
                    <div className="flex items-center gap-1.5 text-emerald-900 font-bold">
                      <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>Data Administrasi Wilayah Pangkalan:</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-slate-700 font-medium pl-5">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Kelurahan:</span>
                        <span className="text-slate-900 font-bold">{kelurahan}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-bold">Kecamatan:</span>
                        <span className="text-slate-900 font-bold">{kecamatan}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  KUB Nelayan (Kelompok Usaha Bersama) <span className="text-slate-400 font-normal">(Isian Bebas)</span>
                </label>
                <input
                  type="text"
                  value={kubNelayan}
                  onChange={(e) => setKubNelayan(e.target.value)}
                  placeholder="Contoh: KUB Sinar Bahari (kosongkan bila mandiri)"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Jabatan / Peran di Lapangan <span className="text-slate-400 font-normal">(Opsional)</span>
                </label>
                <input
                  type="text"
                  value={jabatan}
                  onChange={(e) => setJabatan(e.target.value)}
                  placeholder="Contoh: Juragan Kapal / Pemilik Perahu / ABK / Bakul Ikan"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nomor WhatsApp / HP <span className="text-slate-400 font-normal">(Opsional)</span>
                </label>
                <input
                  type="tel"
                  value={noHp}
                  onChange={(e) => setNoHp(e.target.value)}
                  placeholder="0812-xxxx-xxxx"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>
            </>
          )}

          {/* 2. PEMERINTAH DAERAH */}
          {selectedGroup.id === 'pemda' && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nama Lengkap & Gelar <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama pejabat / aparatur pemda"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  OPD / Instansi Pemerintah Daerah <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={instansi}
                  onChange={(e) => setInstansi(e.target.value)}
                  placeholder="Contoh: DKPP Cilegon / Bapperida / Dinas Lingkungan Hidup"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Jabatan / Eselon / Peran <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={jabatan}
                  onChange={(e) => setJabatan(e.target.value)}
                  placeholder="Contoh: Kabid Perikanan Tangkap / Pengawas / Perencana"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nomor WhatsApp / HP <span className="text-slate-400 font-normal">(Opsional)</span>
                </label>
                <input
                  type="tel"
                  value={noHp}
                  onChange={(e) => setNoHp(e.target.value)}
                  placeholder="0812-xxxx-xxxx"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>
            </>
          )}

          {/* 3. MASYARAKAT PESISIR */}
          {selectedGroup.id === 'masyarakat_pesisir' && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nama Lengkap <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama warga / tokoh pesisir"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Instansi / Nama Usaha / Komunitas <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={instansi}
                  onChange={(e) => setInstansi(e.target.value)}
                  placeholder="Contoh: Tokoh Masyarakat / Rukun Nelayan / Usaha Olahan Ikan"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Alamat Domisili Pesisir <span className="text-rose-500">*</span> <span className="text-slate-400 font-normal">(Isian Bebas)</span>
                </label>
                <input
                  type="text"
                  required
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  placeholder="Contoh: Kp. Medaksa RT 02/05 Kel. Tamansari"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nomor WhatsApp / HP <span className="text-slate-400 font-normal">(Opsional)</span>
                </label>
                <input
                  type="tel"
                  value={noHp}
                  onChange={(e) => setNoHp(e.target.value)}
                  placeholder="0812-xxxx-xxxx"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>
            </>
          )}

          {/* 4. AKADEMISI & ORGANISASI NELAYAN */}
          {selectedGroup.id === 'akademisi_lsm' && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nama Lengkap & Gelar <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama akademisi / pimpinan organisasi"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Instansi / Lembaga <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={instansi}
                  onChange={(e) => setInstansi(e.target.value)}
                  placeholder="Contoh: Fakultas Perikanan UNTIRTA / DPC HNSI Cilegon"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Jabatan / Peran <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={jabatan}
                  onChange={(e) => setJabatan(e.target.value)}
                  placeholder="Contoh: Dosen Peneliti / Ketua DPC / Dewan Pakar"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nomor WhatsApp / HP <span className="text-slate-400 font-normal">(Opsional)</span>
                </label>
                <input
                  type="tel"
                  value={noHp}
                  onChange={(e) => setNoHp(e.target.value)}
                  placeholder="0812-xxxx-xxxx"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>
            </>
          )}

          {/* 5. INDUSTRI SEKITAR PESISIR */}
          {selectedGroup.id === 'industri' && (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nama Lengkap Perwakilan Industri <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  placeholder="Nama perwakilan industri"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Jabatan di Perusahaan <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={jabatan}
                  onChange={(e) => setJabatan(e.target.value)}
                  placeholder="Contoh: Manager CSR / Head of Environmental HSE"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nama Perusahaan / Industri <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={instansi}
                  onChange={(e) => setInstansi(e.target.value)}
                  placeholder="Contoh: PT Krakatau Steel / PLTU Suralaya"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Alamat Pabrik / Kawasan Industri <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                  placeholder="Contoh: Kawasan Industri Krakatau / Ciwandan"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nomor WhatsApp / HP <span className="text-slate-400 font-normal">(Opsional)</span>
                </label>
                <input
                  type="tel"
                  value={noHp}
                  onChange={(e) => setNoHp(e.target.value)}
                  placeholder="0812-xxxx-xxxx"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-ocean-500 bg-slate-50/50"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Input Likert Matrix */}
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
          <div>
            <h3 className="font-bold text-lg text-slate-900">
              2. Input Skor Jawaban Likert (42 Indikator)
            </h3>
            <p className="text-xs text-slate-500">
              Pilih angka 1 s/d 5 sesuai tanda centang pada lembar kertas responden.
            </p>
          </div>

          <div className="text-xs font-bold px-3 py-1.5 rounded-xl bg-ocean-50 text-ocean-800 border border-ocean-200 self-start sm:self-auto">
            Terisi: <strong className="text-ocean-950 text-sm">{answeredCount}</strong> / {totalQuestions} Soal
          </div>
        </div>

        <div className="space-y-6">
          {DIMENSI_LIST.map((dim) => {
            const dimVars = VARIABEL_LIST.filter(v => v.id_dimensi === dim.id);
            const varIds = dimVars.map(v => v.id);
            const dimIndicators = INDIKATOR_LIST.filter(i => varIds.includes(i.id_variabel));

            return (
              <div key={dim.id} className="border border-slate-200 rounded-2xl overflow-hidden">
                <div 
                  className="px-4 py-2.5 text-white font-bold text-xs flex items-center justify-between"
                  style={{ backgroundColor: dim.warna }}
                >
                  <span>{dim.nama.toUpperCase()}</span>
                  <span className="text-[11px] bg-white/20 px-2 py-0.5 rounded-full">{dimIndicators.length} Butir</span>
                </div>

                <div className="divide-y divide-slate-100 bg-white">
                  {dimIndicators.map((ind) => {
                    const q = questions.find(item => item.id_indikator === ind.id);
                    if (!q) return null;
                    const qGlobalIndex = questions.findIndex(item => item.id === q.id);
                    const currentVal = scores[q.id];

                    return (
                      <div key={q.id} className="p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/80 transition-colors">
                        <div className="flex-1 pr-2">
                          <span className="text-[10px] font-bold text-ocean-700 bg-ocean-50 px-2 py-0.5 rounded border border-ocean-200 mr-1.5">
                            #{qGlobalIndex + 1} • {ind.kode}
                          </span>
                          <span className="text-xs font-medium text-slate-800 leading-snug">
                            {q.teks}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 flex-shrink-0 self-end sm:self-center">
                          {[1, 2, 3, 4, 5].map((num) => {
                            const isChecked = currentVal === num;
                            return (
                              <button
                                type="button"
                                key={num}
                                onClick={() => handleScoreChange(q.id, num)}
                                className={`w-9 h-9 rounded-lg font-black text-xs transition-all flex items-center justify-center ${
                                  isChecked
                                    ? 'bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-200 scale-105'
                                    : 'bg-slate-100 text-slate-600 hover:bg-ocean-100 hover:text-ocean-900 border border-slate-200'
                                }`}
                              >
                                {num}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={handleResetForm}
            className="px-5 py-3 border border-slate-300 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-all flex items-center gap-1.5"
          >
            <RefreshCcw className="w-3.5 h-3.5" />
            <span>Bersihkan Form</span>
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>{isSubmitting ? 'Menyimpan...' : 'Simpan Entri Kuesioner'}</span>
          </button>
        </div>
      </div>
    </form>
  );
}
