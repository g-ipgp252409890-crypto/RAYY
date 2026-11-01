import React, { useState, useEffect } from 'react';
import { playKidVoiceCorrect, playChimeCorrect } from '../../utils/kidAudio';
import {
  Compass,
  Heart,
  Smile,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
  Gamepad2,
  BookOpen,
  Maximize2,
  RefreshCw,
} from 'lucide-react';

interface Page4KepentinganProps {
  onNavigateToNext: () => void;
  onActivityComplete: (activityKey: string, points: number) => void;
}

export const Page4Kepentingan: React.FC<Page4KepentinganProps> = ({
  onNavigateToNext,
  onActivityComplete,
}) => {
  // Slide Switcher State: 'slide-kepentingan' | 'slide-kuiz'
  const [activeSlide, setActiveSlide] = useState<'slide-kepentingan' | 'slide-kuiz'>('slide-kepentingan');
  const [hasCompletedQuiz, setHasCompletedQuiz] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    // Award page reading / exploration points
    onActivityComplete('halaman-4-kepentingan', 20);
  }, [onActivityComplete]);

  const handleCompleteQuiz = () => {
    setHasCompletedQuiz(true);
    playKidVoiceCorrect();
    onActivityComplete('halaman-4-canva-quiz', 20);
  };

  const CANVA_QUIZ_URL = 'https://kehadiranpraktikumunity.my.canva.site/pengembaraan-kitab-allah';

  const importancePoints = [
    {
      num: 1,
      title: 'Pedoman & Petunjuk Hidup yang Benar',
      desc: 'Kitab Allah membimbing kita mengetahui perkara yang halal dan haram, serta membezakan antara kebaikan dan keburukan agar hidup tidak sesat.',
      example: 'Contoh: Kita tahu berdusta itu dosa dan bercakap benar itu amalan yang dicintai Allah.',
      icon: Compass,
    },
    {
      num: 2,
      title: 'Membentuk Akhlak Mulia & Adab Sopan',
      desc: 'Ajaran kitab suci mendidik kita sentiasa berbudi pekerti halus, bertutur dengan santun, serta menghormati ibu bapa, guru, dan rakan-rakan.',
      example: 'Contoh: Mengucapkan salam, tidak mengejek orang lain, dan menolong kawan yang susah.',
      icon: Heart,
    },
    {
      num: 3,
      title: 'Memperoleh Ketenangan Jiwa & Hati Tenteram',
      desc: 'Hati yang sentiasa membaca dan mengamalkan kalam Allah akan berasa tenang, tenteram, serta terlindung daripada rasa cemas dan resah gelisah.',
      example: 'Contoh: Berasa tenang apabila mengaji Al-Quran selepas selesai solat lima waktu.',
      icon: Smile,
    },
    {
      num: 4,
      title: 'Mendapat Pahala & Keredhaan Allah SWT',
      desc: 'Setiap huruf kitab suci yang dibaca dan diamalkan mengalirkan pahala yang berlipat kali ganda serta menjadi syafaat (penolong) di hari akhirat.',
      example: 'Contoh: Setiap huruf Al-Quran yang dibaca diberi ganjaran 10 kebaikan.',
      icon: Sparkles,
    },
  ];

  return (
    <div className="space-y-8 animate-fadeIn text-[#3E2723]">
      {/* Page Header - COKLAT GELAP & KRIM */}
      <div className="bold-box-lg bg-[#FAF7F2] text-[#3E2723] rounded-3xl p-6 sm:p-8 relative border-3 border-black shadow-[6px_6px_0px_0px_#000]">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            ⚡ HALAMAN 4 • APLIKASI AMALAN &amp; KUIZ
          </span>
          <span className="bg-[#3E2723] text-[#FFFDF0] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            PANDUAN HIDUP HAKIKI
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#3E2723] mb-3 uppercase leading-tight">
          KEPENTINGAN BERIMAN &amp; KUIZ UJI MINDA
        </h1>
        <p className="text-[#5D4037] text-xs sm:text-sm max-w-3xl leading-relaxed font-bold bg-[#FFFDF0] p-3.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
          Hayati 4 kesan agung beriman kepada kitab Allah dalam kehidupan harian, kemudian sertai Kuiz Uji Minda interaktif "Pengembaraan Kitab Allah" di slide sebelah!
        </p>

        {/* 2-Slide Navigation Switcher */}
        <div className="mt-6 pt-5 border-t-2 border-black/20 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setActiveSlide('slide-kepentingan')}
            className={`bold-btn px-5 py-3 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer border-2.5 border-black transition-all ${
              activeSlide === 'slide-kepentingan'
                ? 'bg-[#9C7A5B] text-[#FFFDF0] shadow-[3px_3px_0px_#000] scale-102'
                : 'bg-[#FFFDF0] text-[#3E2723] hover:bg-[#FAF7F2] shadow-[2px_2px_0px_#000]'
            }`}
          >
            <BookOpen className="w-4 h-4 stroke-[2.5]" />
            <span>SLIDE 1: 4 TONGGAK KEPENTINGAN</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveSlide('slide-kuiz')}
            className={`bold-btn px-5 py-3 rounded-xl font-black text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer border-2.5 border-black transition-all ${
              activeSlide === 'slide-kuiz'
                ? 'bg-[#9C7A5B] text-[#FFFDF0] shadow-[3px_3px_0px_#000] scale-102'
                : 'bg-[#FFFDF0] text-[#3E2723] hover:bg-[#FAF7F2] shadow-[2px_2px_0px_#000]'
            }`}
          >
            <Gamepad2 className="w-4 h-4 stroke-[2.5]" />
            <span>SLIDE 2: KUIZ UJI MINDA (CANVA)</span>
            <span className="bg-[#3E2723] text-[#FFFDF0] text-[10px] px-2 py-0.5 rounded ml-1 font-black">
              INTERAKTIF
            </span>
          </button>
        </div>
      </div>

      {/* ==================== SLIDE 1: 4 TONGGAK KEPENTINGAN ==================== */}
      {activeSlide === 'slide-kepentingan' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bold-box bg-[#FFFDF0] text-[#3E2723] rounded-3xl p-6 sm:p-8 border-3 border-black shadow-[6px_6px_0px_0px_#000]">
            <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
              <div className="flex items-center gap-3">
                <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase">
                  SLIDE 1 • NOTA KONSEP
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#3E2723] uppercase tracking-tight">
                  4 TONGGAK KEPENTINGAN BERIMAN DALAM KEHIDUPAN
                </h2>
              </div>
              <span className="text-xs font-black bg-[#9C7A5B] text-[#FFFDF0] border-2 border-black px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_#000] uppercase">
                MEMBINA GENERASI MUKMIN HEBAT
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {importancePoints.map((item) => {
                const IconComp = item.icon;

                return (
                  <div
                    key={item.num}
                    className="bold-box bg-[#FAF7F2] text-[#3E2723] rounded-3xl p-6 transition flex flex-col justify-between border-2.5 border-black shadow-[3px_3px_0px_0px_#000]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-[#9C7A5B] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center text-[#FFFDF0]">
                          <IconComp className="w-7 h-7 stroke-[2.5]" />
                        </div>
                        <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black px-3 py-1 rounded-md border border-black shadow-[1.5px_1.5px_0px_0px_#000] uppercase">
                          TONGGAK 0{item.num}
                        </span>
                      </div>

                      <h3 className="font-black text-[#3E2723] text-base sm:text-lg mb-2 uppercase">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed font-bold mb-4">
                        {item.desc}
                      </p>
                    </div>

                    <div className="p-3.5 bg-[#FFFDF0] rounded-2xl border-2 border-black shadow-[2px_2px_0px_0px_#000] text-xs text-[#3E2723] font-bold flex items-start gap-2.5">
                      <ShieldCheck className="w-5 h-5 text-[#9C7A5B] shrink-0 mt-0.5 stroke-[3]" />
                      <span>{item.example}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Kad Ajakan Masuk Kuiz di Sebelah */}
            <div className="p-6 rounded-2xl bg-[#FAF7F2] border-2.5 border-black shadow-[3px_3px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#9C7A5B] text-[#FFFDF0] flex items-center justify-center border-2 border-black shadow-[2px_2px_0px_#000] shrink-0">
                  <Gamepad2 className="w-7 h-7 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="font-black text-base uppercase text-[#3E2723]">
                    Selesai Membaca? Jom Uji Minda Anda Di Slide Sebelah!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5D4037] font-bold">
                    Sertai Kuiz Uji Minda Pengembaraan Kitab Allah yang menarik dan kumpul mata ganjaran anda!
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setActiveSlide('slide-kuiz');
                  window.scrollTo({ top: 300, behavior: 'smooth' });
                }}
                className="bold-btn bg-[#9C7A5B] hover:bg-[#836245] text-[#FFFDF0] font-black px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider cursor-pointer border-2 border-black shadow-[3px_3px_0px_#000] flex items-center gap-2 shrink-0"
              >
                <span>Buka Kuiz Uji Minda</span>
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== SLIDE 2: KUIZ UJI MINDA (CANVA SITE) ==================== */}
      {activeSlide === 'slide-kuiz' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bold-box bg-[#FFFDF0] text-[#3E2723] rounded-3xl p-6 sm:p-8 border-3 border-black shadow-[6px_6px_0px_0px_#000]">
            {/* Tajuk Slide Kuiz */}
            <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
              <div className="flex items-center gap-3">
                <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase">
                  SLIDE 2 • PERMAINAN AKTIVITI
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#3E2723] uppercase tracking-tight flex items-center gap-2">
                  <span>🎮 KUIZ UJI MINDA: PENGEMBARAAN KITAB ALLAH</span>
                </h2>
              </div>

              {/* Butang Pintas Kawalan Kuiz */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIframeKey((prev) => prev + 1)}
                  className="bold-btn bg-[#FAF7F2] hover:bg-[#F5EFE6] text-[#3E2723] font-black px-3.5 py-2 rounded-xl text-xs uppercase cursor-pointer border-2 border-black shadow-[1.5px_1.5px_0px_#000] flex items-center gap-1.5"
                  title="Muat semula kuiz"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Muat Semula</span>
                </button>

                <a
                  href={CANVA_QUIZ_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bold-btn bg-[#9C7A5B] hover:bg-[#836245] text-[#FFFDF0] font-black px-4 py-2 rounded-xl text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] flex items-center gap-1.5 transition-all"
                  title="Buka kuiz di tab baharu atau skrin penuh"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Buka Skrin Penuh</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#5D4037] font-bold mb-6">
              Selesaikan soalan-soalan interaktif pengembaraan kitab Allah pada paparan di bawah. Anda juga boleh menekan butang <strong>"Buka Skrin Penuh"</strong> jika ingin bermain pada paparan laman Canva sepenuhnya!
            </p>

            {/* Bingkai Iframe Canva Quiz Tersemat */}
            <div className="relative w-full rounded-2xl overflow-hidden border-3 border-black shadow-[4px_4px_0px_#000] bg-white min-h-[620px] sm:min-h-[720px] lg:min-h-[780px]">
              <iframe
                key={iframeKey}
                src={CANVA_QUIZ_URL}
                title="Kuiz Uji Minda Pengembaraan Kitab Allah"
                className="w-full h-[620px] sm:h-[720px] lg:h-[780px] border-none"
                allow="autoplay; fullscreen"
                loading="lazy"
              />
            </div>

            {/* Kotak Pengesahan Tamat Kuiz & Ganjaran Suara */}
            <div className="mt-6 p-5 rounded-2xl bg-[#FAF7F2] border-2.5 border-black shadow-[3px_3px_0px_#000] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#9C7A5B] text-[#FFFDF0] flex items-center justify-center border-2 border-black shadow-[1.5px_1.5px_0px_#000] shrink-0">
                  <CheckCircle2 className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <h4 className="font-black text-sm uppercase text-[#3E2723]">
                    {hasCompletedQuiz
                      ? 'Tahniah! Anda Telah Menyelesaikan Kuiz Uji Minda! (+20 Mata)'
                      : 'Sudah Selesai Menjawab Kuiz di Atas?'}
                  </h4>
                  <p className="text-xs text-[#5D4037] font-bold">
                    Tekan butang di sebelah untuk mengesahkan kejayaan dan mendengar suara ganjaran "Ye! Anda berjaya!"
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCompleteQuiz}
                className="bold-btn bg-[#9C7A5B] hover:bg-[#836245] text-[#FFFDF0] font-black px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider cursor-pointer border-2 border-black shadow-[3px_3px_0px_#000] flex items-center gap-2 shrink-0 transition-transform active:scale-95"
              >
                <span>{hasCompletedQuiz ? 'Kuiz Selesai ✓' : 'Selesai Kuiz (+20 PTS) ⭐'}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t-2.5 border-black">
        <button
          type="button"
          onClick={() => {
            if (activeSlide === 'slide-kuiz') {
              setActiveSlide('slide-kepentingan');
            } else {
              setActiveSlide('slide-kuiz');
            }
          }}
          className="bold-btn inline-flex items-center gap-2 bg-[#FFFDF0] hover:bg-[#FAF7F2] text-[#3E2723] font-black px-5 py-3 rounded-2xl text-xs uppercase tracking-wider cursor-pointer shadow-[2px_2px_0px_0px_#000] border-2 border-black"
        >
          <span>{activeSlide === 'slide-kuiz' ? '← Kembali Ke Slide 1 (Nota)' : 'Ke Slide 2 (Kuiz Canva) →'}</span>
        </button>

        <button
          onClick={onNavigateToNext}
          className="bold-btn inline-flex items-center gap-2.5 bg-[#9C7A5B] hover:bg-[#836245] text-[#FFFDF0] font-black px-7 py-4 rounded-2xl text-sm uppercase tracking-wider cursor-pointer shadow-[4px_4px_0px_0px_#000] border-3 border-black"
        >
          <span>SETERUSNYA: HALAMAN 5 (REFLEKSI &amp; SIJIL)</span>
          <ArrowRight className="w-5 h-5 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
