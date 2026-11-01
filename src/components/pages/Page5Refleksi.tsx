import React, { useState } from 'react';
import { fireSuperConfetti } from '../../utils/confetti';
import { playKidVoiceCorrect } from '../../utils/kidAudio';
import {
  Sparkles,
  Star,
  CheckCircle2,
  Heart,
  Volume2,
  Award,
  Printer,
  Send,
} from 'lucide-react';

interface Page5RefleksiProps {
  totalScore: number;
  onActivityComplete: (activityKey: string, points: number) => void;
  onOpenTeacherMode?: () => void;
}

export const Page5Refleksi: React.FC<Page5RefleksiProps> = ({
  totalScore,
  onActivityComplete,
}) => {
  // Reflection Form State
  const [studentName, setStudentName] = useState('');
  const [studentClass, setStudentClass] = useState('3 Inovatif');
  const [selectedFeeling, setSelectedFeeling] = useState<string>('Gembira & Bersemangat');
  const [understandingLevel, setUnderstandingLevel] = useState<number>(3);
  const [reflectionAnswer, setReflectionAnswer] = useState(
    'Saya berazam membaca sekurang-kurangnya satu muka surat Al-Quran setiap hari dan bercakap benar.'
  );
  const [homeAction, setHomeAction] = useState(
    'Meletakkan mushaf Al-Quran di tempat yang tinggi dan suci serta berwuduk sebelum membacanya.'
  );

  const [hasGeneratedCertificate, setHasGeneratedCertificate] = useState(false);
  const [showCertificateModal, setShowCertificateModal] = useState(false);
  const [isPlayingDua, setIsPlayingDua] = useState(false);

  const feelings = [
    { label: 'Gembira & Bersemangat', emoji: '😄' },
    { label: 'Tenang & Damai', emoji: '🌿' },
    { label: 'Bersyukur & Insaf', emoji: '🤲' },
    { label: 'Cinta Al-Quran', emoji: '💖' },
  ];

  const handleGenerateCertificate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return;

    setHasGeneratedCertificate(true);
    setShowCertificateModal(true);
    fireSuperConfetti();
    playKidVoiceCorrect();
    onActivityComplete('halaman-5-refleksi', 20);
  };

  const handlePlayDua = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingDua) {
        window.speechSynthesis.cancel();
        setIsPlayingDua(false);
        return;
      }

      const text =
        "Bismillahir Rahmanir Rahim. Allahummar-hamna bil Quran, waj-alhu lana imaamaw-wa nuuraw-wa hudaw-wa rahmah. Ya Allah, rahmatilah kami dengan Al-Quran, dan jadikanlah ia bagi kami sebagai ikutan, cahaya, petunjuk dan rahmat. Aamiin ya Rabbal 'Aalamiin.";

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID';
      utterance.rate = 0.9;
      utterance.onend = () => setIsPlayingDua(false);
      utterance.onerror = () => setIsPlayingDua(false);
      setIsPlayingDua(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-10 animate-fadeIn text-[#3E2723]">
      {/* Header - COKLAT GELAP & KRIM */}
      <div className="bold-box-lg bg-[#FAF7F2] text-[#3E2723] rounded-3xl p-6 sm:p-8 relative border-3 border-black shadow-[6px_6px_0px_0px_#000]">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            ⚡ HALAMAN 5 • PENGUKUHAN &amp; IKRAR
          </span>
          <span className="bg-[#3E2723] text-[#FFFDF0] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            SIJIL DIGITAL KEMBARA
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#3E2723] mb-3 uppercase leading-tight">
          REFLEKSI DIRI, BINTANG AMALANKU &amp; PENUTUP
        </h1>
        <p className="text-[#5D4037] text-xs sm:text-sm max-w-3xl leading-relaxed font-bold bg-[#FFFDF0] p-3.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
          Syabas wira cilik Tahun 3! Anda telah menyelesaikan seluruh silibus pembelajaran Akidah ini. Mari kukuhkan ikrar peribadi, isi lembaran refleksi, dan tebus Sijil Digital Kembara Ilmu!
        </p>
      </div>

      {/* RUMUSAN BINTANG AMALANKU (3 IKRAR HARIAN) (KOTAK KRIM & COKLAT GELAP) */}
      <div className="bold-box-lg bg-[#FFFDF0] text-[#3E2723] rounded-3xl p-6 sm:p-8 border-3 border-black shadow-[6px_6px_0px_0px_#000]">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase">
            ⚡ IKRAR MULIA WIRA
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#3E2723] uppercase tracking-tight">
            BINTANG AMALANKU: 3 IKRAR BERIMAN KEPADA KITAB
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-[#5D4037] mb-6 font-bold">
          Setiap murid mukmin berazam untuk menzahirkan keimanannya melalui 3 amalan harian berikut:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              star: '⭐ BINTANG 1',
              title: 'Cinta Al-Quran',
              pledge: 'Membaca Al-Quran sekurang-kurangnya 1 muka surat atau beberapa ayat setiap hari selepas solat.',
              icon: Sparkles,
            },
            {
              star: '⭐ BINTANG 2',
              title: 'Adab Dengan Mushaf',
              pledge: 'Menghormati kesucian kalam Allah dengan berwuduk, memegang dengan cermat, dan meletakkannya di tempat yang tinggi.',
              icon: Heart,
            },
            {
              star: '⭐ BINTANG 3',
              title: 'Akhlak Terpuji',
              pledge: 'Mengamalkan ajaran kitab dalam kehidupan: sentiasa bercakap benar, jujur, amanah, dan taat kepada ibu bapa serta guru.',
              icon: CheckCircle2,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bold-box bg-[#FAF7F2] text-[#3E2723] p-5 rounded-2xl flex flex-col justify-between border-2.5 border-black shadow-[3px_3px_0px_#000]"
            >
              <div>
                <span className="text-xs font-black text-[#FFFDF0] bg-[#9C7A5B] border border-black shadow-[1.5px_1.5px_0px_0px_#000] px-3 py-1 rounded-md inline-block mb-3 uppercase">
                  {item.star}
                </span>
                <h4 className="font-black text-base text-[#3E2723] mb-2 uppercase">{item.title}</h4>
                <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed font-bold">
                  "{item.pledge}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BORANG REFLEKSI INTERAKTIF MURID (KOTAK KRIM & COKLAT GELAP) */}
      <div className="bold-box bg-[#FFFDF0] text-[#3E2723] rounded-3xl p-6 sm:p-8 border-3 border-black shadow-[6px_6px_0px_0px_#000]">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
          <div className="flex items-center gap-3">
            <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase">
              LEMBARAN REFLEKSI
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#3E2723] uppercase tracking-tight">
              JURNAL REFLEKSI PERIBADI MURID TAHUN 3
            </h2>
          </div>
          <span className="text-xs font-black bg-[#9C7A5B] text-[#FFFDF0] border-2 border-black px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_#000] uppercase">
            JANA SIJIL DIGITAL ANDA
          </span>
        </div>

        <form onSubmit={handleGenerateCertificate} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-black text-[#3E2723] uppercase tracking-wider mb-2">
                Nama Penuh Murid:
              </label>
              <input
                type="text"
                required
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="Contoh: Muhammad Adam bin Farhan"
                className="w-full px-4 py-3 rounded-xl border-2 border-black text-sm focus:outline-none focus:ring-4 focus:ring-[#9C7A5B]/30 font-bold text-[#3E2723] bg-[#FAF7F2] placeholder-[#5D4037]/50 shadow-[2px_2px_0px_#000]"
              />
            </div>

            <div>
              <label className="block text-xs font-black text-[#3E2723] uppercase tracking-wider mb-2">
                Kelas / Tahun:
              </label>
              <input
                type="text"
                required
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                placeholder="Contoh: 3 Amanah"
                className="w-full px-4 py-3 rounded-xl border-2 border-black text-sm focus:outline-none focus:ring-4 focus:ring-[#9C7A5B]/30 font-bold text-[#3E2723] bg-[#FAF7F2] placeholder-[#5D4037]/50 shadow-[2px_2px_0px_#000]"
              />
            </div>
          </div>

          {/* Feeling Selection */}
          <div>
            <label className="block text-xs font-black text-[#3E2723] uppercase tracking-wider mb-2">
              Bagaimanakah perasaan kamu selepas belajar tajuk ini?
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {feelings.map((f) => (
                <button
                  type="button"
                  key={f.label}
                  onClick={() => setSelectedFeeling(f.label)}
                  className={`bold-btn p-3.5 rounded-2xl text-left text-xs font-black transition flex items-center gap-2 cursor-pointer border-2 border-black ${
                    selectedFeeling === f.label
                      ? 'bg-[#9C7A5B] text-[#FFFDF0] ring-2 ring-black scale-102 shadow-[3px_3px_0px_0px_#000]'
                      : 'bg-[#FAF7F2] hover:bg-[#F5EFE6] text-[#3E2723] shadow-[2px_2px_0px_0px_#000]'
                  }`}
                >
                  <span className="text-xl">{f.emoji}</span>
                  <span className="truncate uppercase">{f.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Understanding Rating */}
          <div>
            <label className="block text-xs font-black text-[#3E2723] uppercase tracking-wider mb-2">
              Tahap Kefahaman Kamu Tentang Beriman Kepada Kitab:
            </label>
            <div className="flex items-center gap-3">
              {[1, 2, 3].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => setUnderstandingLevel(star)}
                  className={`bold-btn px-4 py-2.5 rounded-xl text-xs font-black flex items-center gap-2 cursor-pointer uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000] ${
                    understandingLevel >= star
                      ? 'bg-[#9C7A5B] text-[#FFFDF0]'
                      : 'bg-[#FAF7F2] text-[#5D4037]/60'
                  }`}
                >
                  <Star className="w-4 h-4 fill-current stroke-[2.5]" />
                  <span>
                    {star === 1 && 'Sederhana'}
                    {star === 2 && 'Baik'}
                    {star === 3 && 'Sangat Cemerlang'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Reflection Prompts */}
          <div>
            <label className="block text-xs font-black text-[#3E2723] uppercase tracking-wider mb-2">
              1. Apakah 1 perkara paling bernilai yang kamu pelajari tentang kitab Allah hari ini?
            </label>
            <textarea
              rows={2}
              value={reflectionAnswer}
              onChange={(e) => setReflectionAnswer(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-black text-xs sm:text-sm focus:outline-none focus:ring-4 focus:ring-[#9C7A5B]/30 font-bold text-[#3E2723] bg-[#FAF7F2] shadow-[2px_2px_0px_#000]"
            />
          </div>

          <div>
            <label className="block text-xs font-black text-[#3E2723] uppercase tracking-wider mb-2">
              2. Bagaimanakah kamu akan menunjukkan rasa sayang dan adab kepada Al-Quran di rumah?
            </label>
            <input
              type="text"
              value={homeAction}
              onChange={(e) => setHomeAction(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border-2 border-black text-xs sm:text-sm focus:outline-none focus:ring-4 focus:ring-[#9C7A5B]/30 font-bold text-[#3E2723] bg-[#FAF7F2] shadow-[2px_2px_0px_#000]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="bold-btn bg-[#9C7A5B] hover:bg-[#836245] text-[#FFFDF0] font-black px-8 py-4 rounded-2xl text-base uppercase tracking-wider cursor-pointer flex items-center gap-2.5 shadow-[4px_4px_0px_0px_#000] border-2.5 border-black"
            >
              <Send className="w-5 h-5 stroke-[2.5]" />
              <span>Hantar Refleksi &amp; Jana Sijil Digital</span>
            </button>
          </div>
        </form>
      </div>

      {/* DOA PENUTUP MAJLIS & TUNTUT ILMU (KOTAK KRIM & COKLAT GELAP) */}
      <div className="bold-box bg-[#FFFDF0] text-[#3E2723] rounded-3xl p-6 sm:p-8 border-3 border-black shadow-[6px_6px_0px_0px_#000]">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black px-3.5 py-1.5 rounded-lg uppercase tracking-wider border border-black shadow-[1.5px_1.5px_0px_0px_#000]">
              DOA PENUTUP
            </span>
            <h3 className="text-lg sm:text-xl font-black text-[#3E2723] uppercase">
              Doa Memohon Rahmat Al-Quran (Doa Khatam Al-Quran)
            </h3>
          </div>

          <button
            onClick={handlePlayDua}
            className="bold-btn flex items-center gap-1.5 bg-[#9C7A5B] hover:bg-[#836245] text-[#FFFDF0] text-xs font-black px-4 py-2.5 rounded-xl cursor-pointer uppercase shadow-[2px_2px_0px_0px_#000] border-2 border-black"
          >
            <Volume2 className={`w-4 h-4 stroke-[2.5] ${isPlayingDua ? 'animate-pulse text-[#FFFDF0]' : ''}`} />
            <span>{isPlayingDua ? 'Hentikan' : 'Dengar Bacaan Doa'}</span>
          </button>
        </div>

        <div className="bold-box bg-[#FAF7F2] text-[#3E2723] p-6 rounded-2xl text-center my-4 border-2.5 border-black shadow-[3px_3px_0px_#000]">
          <p className="font-arabic text-2xl sm:text-3xl leading-loose text-[#3E2723] dir-rtl font-bold">
            اللَّهُمَّ ارْحَمْنَا بِالقُرْآنِ ، وَاجْعَلْهُ لَنَا إِمَامًا وَنُورًا وَهُدًى وَرَحْمَةً
          </p>
          <p className="text-xs sm:text-sm text-[#5D4037] font-sans font-bold italic mt-3">
            "Ya Allah, rahmatilah kami dengan Al-Quran. Jadikanlah ia bagi kami sebagai pemimpin, cahaya, petunjuk, dan rahmat. Aamiin ya Rabbal 'Aalamin."
          </p>
        </div>
      </div>

      {/* CERTIFICATE MODAL / VIEW (KOTAK KRIM & COKLAT GELAP) */}
      {showCertificateModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bold-box-lg bg-[#FFFDF0] text-[#3E2723] rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative overflow-hidden animate-scaleIn max-h-[95vh] overflow-y-auto border-3 border-black shadow-[8px_8px_0px_0px_#000]">
            {/* Certificate Header Decor */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-[#9C7A5B] border-2.5 border-black shadow-[3px_3px_0px_0px_#000] text-[#FFFDF0] flex items-center justify-center mx-auto mb-3">
                <Award className="w-9 h-9 stroke-[2.5]" />
              </div>
              <span className="text-xs font-black tracking-widest text-[#FFFDF0] uppercase bg-[#9C7A5B] border-2 border-black px-3.5 py-1 rounded-md shadow-[2px_2px_0px_0px_#000]">
                SIJIL PENGHARGAAN DIGITAL
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#3E2723] mt-3 uppercase tracking-tight">
                KEMBARA WAHYU ILAHI: BERIMAN KEPADA KITAB
              </h2>
              <p className="text-xs text-[#5D4037] font-bold uppercase mt-1">
                Pendidikan Islam Tahun 3 • Standard Kandungan 3.2
              </p>
            </div>

            {/* Certificate Body */}
            <div className="bold-box bg-[#FAF7F2] rounded-2xl p-6 text-center space-y-4 mb-6 border-2.5 border-black shadow-[4px_4px_0px_#000] text-[#3E2723]">
              <p className="text-xs text-[#5D4037] uppercase tracking-wider font-black">
                DENGAN INI DIPERAKUI BAHAWA:
              </p>
              <div className="text-2xl sm:text-3xl font-black text-[#3E2723] border-b-3 border-[#3E2723] pb-2 inline-block px-6 uppercase tracking-wide">
                {studentName || 'WIRA TAHUN 3'}
              </div>
              <p className="text-xs text-[#5D4037] font-bold">
                Kelas: <strong className="text-[#3E2723] uppercase">{studentClass}</strong>
              </p>

              <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed font-bold max-w-lg mx-auto">
                Telah berjaya menyempurnakan kesemua modul, nota konsep, dan aktiviti interaktif mengenai pengertian kitab, dalil naqli Surah An-Nisa' ayat 136, serta 4 kepentingan beriman kepada kitab Allah dalam kehidupan harian!
              </p>

              {/* Stars badge */}
              <div className="pt-2 flex items-center justify-center gap-2 text-[#3E2723] font-black text-sm uppercase">
                <span>⭐ SKOR PENCAPAIAN:</span>
                <span className="bg-[#9C7A5B] text-[#FFFDF0] px-3 py-1 rounded-md border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000]">
                  {totalScore} MATA BINTANG
                </span>
              </div>

              <div className="text-xs text-[#5D4037] font-bold italic pt-1">
                Ikrar Pilihan: "{homeAction}"
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <span className="text-xs text-[#5D4037] font-black uppercase">
                Tarikh: {new Date().toLocaleDateString('ms-MY', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => window.print()}
                  className="bold-btn bg-[#9C7A5B] hover:bg-[#836245] text-[#FFFDF0] font-black px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 uppercase tracking-wider cursor-pointer shadow-[2px_2px_0px_0px_#000] border-2 border-black"
                >
                  <Printer className="w-4 h-4 stroke-[2.5]" />
                  <span>Cetak Sijil</span>
                </button>
                <button
                  onClick={() => setShowCertificateModal(false)}
                  className="bold-btn bg-[#FFFDF0] hover:bg-[#FAF7F2] text-[#3E2723] font-black px-4 py-2.5 rounded-xl text-xs uppercase cursor-pointer shadow-[2px_2px_0px_0px_#000] border-2 border-black"
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
