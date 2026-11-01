import React, { useState } from 'react';
import { CURRICULUM_INFO } from '../../data/curriculumData';
import { BookOpen, Sparkles, Scroll, ArrowRight, Volume2, CheckCircle2, Star, Compass, Heart, Play, ExternalLink } from 'lucide-react';

interface Page1HomeProps {
  onNavigateToNext: () => void;
  onNavigateToPage: (pageId: string) => void;
}

export const Page1Home: React.FC<Page1HomeProps> = ({ onNavigateToNext, onNavigateToPage }) => {
  const [isPlayingGreeting, setIsPlayingGreeting] = useState(false);
  const [showInlineVideo, setShowInlineVideo] = useState(false);

  const speakGreeting = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingGreeting) {
        window.speechSynthesis.cancel();
        setIsPlayingGreeting(false);
        return;
      }
      const text =
        "Selamat datang murid-murid cilik tahun 3! Jom kita kuasai ilmu wahyu Allah SWT, fahami rahsia 4 kitab utama, lafazkan dalil Al-Quran dan buktikan keimananmu melalui tindakan harian yang berani dan istiqomah! Mari kita mula murid-murid";
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID'; // Malay / Indonesian voice compatibility
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingGreeting(false);
      utterance.onerror = () => setIsPlayingGreeting(false);
      setIsPlayingGreeting(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn text-[#3E2723]">
      {/* Hero Section Banner - COKLAT GELAP & KRIM */}
      <div className="rounded-3xl p-6 sm:p-10 relative overflow-hidden bg-[#FAF7F2] border-3 border-black shadow-[6px_6px_0px_0px_#000]">
        {/* Dotted Grid Background */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'radial-gradient(#9C7A5B 2px, transparent 2px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative z-10 max-w-4xl">
          {/* 3 Butang Kategori di Atas (Kotak Coklat Berfon Krim) */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-2 rounded-xl border-2.5 border-black shadow-[3px_3px_0px_0px_#000] flex items-center gap-1.5">
              <span>⚡</span> PENDIDIKAN ISLAM TAHUN 3
            </span>
            <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-2 rounded-xl border-2.5 border-black shadow-[3px_3px_0px_0px_#000]">
              BIDANG AKIDAH • UNIT 2
            </span>
            <span className="bg-[#3E2723] text-[#FFFDF0] text-xs sm:text-sm font-black uppercase tracking-wider px-4 py-2 rounded-xl border-2.5 border-black shadow-[3px_3px_0px_0px_#000] flex items-center gap-1.5">
              <span>✨</span> STANDARD KANDUNGAN 3.2
            </span>
          </div>

          {/* Tajuk Utama di dalam SATU Kotak Coklat Gelap Berfon Krim */}
          <div className="mb-6">
            <div className="bg-[#9C7A5B] text-[#FFFDF0] p-5 sm:p-7 rounded-2xl sm:rounded-3xl border-3 border-black shadow-[6px_6px_0px_0px_#000] inline-block w-full max-w-3xl">
              <div className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-[#FAF7F2] leading-snug mb-1">
                KEMBARA WAHYU ILAHI:
              </div>
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#FFFDF0] leading-none">
                BERIMAN KEPADA KITAB
              </div>
            </div>
          </div>

          {/* Kotak Alu-aluan Murid Cilik (Krim Bersih dengan Sempadan Hitam Kemas) */}
          <div className="bg-[#FFFDF0] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center my-6 border-3 border-black shadow-[5px_5px_0px_0px_#000] max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-black text-[#3E2723] mb-3 uppercase tracking-tight">
              ✨ SELAMAT DATANG MURID-MURID CILIK TAHUN 3! ✨
            </h2>
            <p className="text-[#5D4037] text-sm sm:text-base leading-relaxed font-bold mb-6">
              Jom kita kuasai ilmu wahyu Allah SWT, fahami rahsia 4 kitab utama, lafazkan dalil Al-Quran dan buktikan keimananmu melalui tindakan harian yang berani dan istiqomah! Mari kita mula murid-murid.
            </p>

            {/* Kotak Butang Lagu YouTube (#A88665 Coklat Asal Yang Disediakan Pengguna) */}
            <div 
              style={{
                backgroundColor: '#A88665',
                border: '3px solid #000000',
                borderRadius: '16px',
                padding: '20px',
                textAlign: 'center',
                boxShadow: '4px 4px 0px #000000',
                maxWidth: '650px',
                margin: '15px auto 0 auto',
              }}
              className="transition-transform duration-200 hover:scale-[1.01]"
            >
              <a 
                href="https://youtu.be/rTmChzd98bM?feature=shared" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#FFFDF9',
                  fontSize: '22px',
                  fontWeight: 'bold',
                  display: 'block',
                  fontFamily: 'sans-serif',
                  letterSpacing: '1px',
                }}
              >
                🎵 MARI KITA DENGARKAN LAGU 🎵
              </a>
              <p 
                style={{
                  color: '#FFFDF9',
                  fontSize: '13px',
                  marginTop: '6px',
                  fontFamily: 'sans-serif',
                  fontWeight: 600,
                }}
              >
                (Klik di atas untuk tonton video lagu Akidah Tahun 3)
              </p>

              {/* Butang Pintas Interaktif */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
                <button
                  type="button"
                  onClick={() => setShowInlineVideo(!showInlineVideo)}
                  className="text-xs font-black px-4 py-2 rounded-xl transition cursor-pointer flex items-center gap-1.5 shadow-[2px_2px_0px_#000] border-2 border-black bg-[#FFFDF0] hover:bg-[#FAF7F2] text-[#3E2723]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>{showInlineVideo ? 'Tutup Pemain Video' : 'Tonton Video Terus Di Sini'}</span>
                </button>
                <a
                  href="https://youtu.be/rTmChzd98bM?feature=shared"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-black px-4 py-2 rounded-xl transition flex items-center gap-1.5 bg-[#FFFDF0] hover:bg-[#FAF7F2] text-[#3E2723] shadow-[2px_2px_0px_#000] border-2 border-black"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Buka di YouTube</span>
                </a>
              </div>

              {/* Video Player Tersemat */}
              {showInlineVideo && (
                <div className="mt-4 pt-4 border-t-2 border-black/30 animate-fadeIn">
                  <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2.5 border-black shadow-[3px_3px_0px_#000] bg-black">
                    <iframe
                      src="https://www.youtube-nocookie.com/embed/rTmChzd98bM?autoplay=1"
                      title="Lagu Akidah Tahun 3: Beriman Kepada Kitab"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Gambar Pengenalan: Koleksi Kitab-Kitab Allah SWT */}
          <div className="mb-7 rounded-2xl sm:rounded-3xl overflow-hidden border-3 border-black shadow-[6px_6px_0px_0px_#000] bg-[#FFFDF0]">
            <div className="relative group">
              <img
                src="/assets/aistudio/image_7175b5db.png"
                alt="Koleksi Kitab-Kitab Allah SWT Yang Diturunkan Kepada Para Rasul"
                className="w-full aspect-[16/9] max-h-[420px] object-cover object-center transition-transform duration-300 hover:scale-[1.01]"
              />
              <div className="p-4 sm:p-5 bg-[#FFFDF0] border-t-2.5 border-black flex flex-wrap items-center justify-between gap-3 text-[#3E2723]">
                <div className="flex items-center gap-2.5">
                  <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black uppercase px-3 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] tracking-wider flex items-center gap-1.5">
                    <span>📖</span> PENGENALAN VISUAL
                  </span>
                  <span className="text-[#3E2723] font-black text-sm sm:text-base">
                    Kitab-Kitab Allah SWT: Wahyu &amp; Panduan Hidup
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-[#FFFDF0] bg-[#3E2723] px-3 py-1 rounded-md border border-black shadow-[1.5px_1.5px_0px_0px_#000] uppercase">
                    Taurat • Zabur • Injil • Al-Quran
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Butang Tindakan */}
          <div className="flex flex-wrap items-center gap-3.5">
            <button
              onClick={onNavigateToNext}
              className="bold-btn bg-[#9C7A5B] hover:bg-[#836245] text-[#FFFDF0] font-black px-7 py-4 rounded-2xl text-base uppercase tracking-wider flex items-center gap-2.5 cursor-pointer shadow-[4px_4px_0px_0px_#000] border-2.5 border-black transition-all transform active:translate-x-0.5 active:translate-y-0.5"
            >
              <span>Mula Kembara Sekarang</span>
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </button>

            <button
              onClick={speakGreeting}
              className="bold-btn bg-[#FFFDF0] hover:bg-[#FAF7F2] text-[#3E2723] font-black px-5 py-4 rounded-2xl text-sm uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-[3px_3px_0px_0px_#000] border-2.5 border-black transition-all"
              title="Dengarkan kata alu-aluan suara ustaz/ustazah"
            >
              <Volume2 className={`w-5 h-5 text-[#9C7A5B] stroke-[2.5] ${isPlayingGreeting ? 'animate-pulse' : ''}`} />
              <span>{isPlayingGreeting ? 'Hentikan Suara' : 'Dengar Suara Alu-aluan'}</span>
            </button>
          </div>
        </div>

        {/* DSKP Bar at Bottom of Banner */}
        <div className="mt-8 pt-4 border-t-2.5 border-black/20 text-xs text-[#5D4037] font-black flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="bg-[#9C7A5B] text-[#FFFDF0] px-2.5 py-1 rounded-md border border-black uppercase text-[11px]">SK 3.2:</span>
            <span className="font-bold text-[#3E2723]">Merumus konsep beriman dengan kitab dan mengaplikasikannya dalam kehidupan secara beradab &amp; istiqomah.</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#3E2723] font-black uppercase text-[11px]">
            <Star className="w-4 h-4 fill-[#9C7A5B] text-[#9C7A5B]" />
            <span>KSSR SEMAKAN PENDIDIKAN ISLAM TAHUN 3</span>
          </div>
        </div>
      </div>

      {/* Set Induksi / Hook Menarik (Curiosity Card - KOTAK KRIM & COKLAT) */}
      <div className="bold-box bg-[#FFFDF0] text-[#3E2723] rounded-3xl p-6 sm:p-7 border-3 border-black shadow-[5px_5px_0px_#000]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-[#9C7A5B] border-2.5 border-black shadow-[3px_3px_0px_0px_#000] text-[#FFFDF0] flex items-center justify-center shrink-0">
            <Compass className="w-8 h-8 stroke-[2.5]" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="bg-[#9C7A5B] text-[#FFFDF0] text-[10px] font-black uppercase px-2 py-0.5 rounded border border-black">
                SET INDUKSI
              </span>
              <h3 className="text-base sm:text-lg font-black text-[#3E2723] uppercase">
                TAHUKAH KAMU? ANALOGI "MANUAL &amp; PANDUAN HIDUP"
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed font-bold">
              Bayangkan jika anda membeli kereta kawalan jauh yang canggih tetapi tiada manual pengguna, anda pasti tersilap tekan punat dan rosak! Begitulah kehidupan manusia — Allah SWT menurunkan <strong>Kitab Suci sebagai manual rasmi kehidupan</strong> agar kita hidup selamat, dipandu cahaya, dan tidak tersesat ke jalan kebinasaan!
            </p>
          </div>
        </div>
      </div>

      {/* 3 Objektif Pembelajaran (Content Blocks - KOTAK KRIM & COKLAT GELAP) */}
      <div>
        <div className="text-center max-w-xl mx-auto mb-7">
          <span className="text-xs font-black text-[#FFFDF0] bg-[#9C7A5B] border-2 border-black shadow-[2px_2px_0px_0px_#000] px-3.5 py-1 rounded-lg uppercase tracking-wider inline-block">
            🎯 SASARAN PEMBELAJARAN
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#3E2723] mt-2 uppercase tracking-tight">
            3 OBJEKTIF WAJIB DIKUASAI
          </h2>
          <p className="text-[#5D4037] text-xs sm:text-sm mt-1 font-bold">
            Di akhir modul ini, setiap wira Tahun 3 mesti membuktikan 3 kejayaan ini:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CURRICULUM_INFO.learningObjectives.map((obj, idx) => {
            const icons = [BookOpen, Scroll, Heart];
            const IconComp = icons[idx] || Sparkles;

            return (
              <div
                key={obj.id}
                className="bold-box bg-[#FFFDF0] text-[#3E2723] rounded-3xl p-6 transition-all hover:-translate-y-1 flex flex-col justify-between border-3 border-black shadow-[4px_4px_0px_#000]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#9C7A5B] text-[#FFFDF0] border-2 border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center">
                      <IconComp className="w-6 h-6 stroke-[2.5]" />
                    </div>
                    <span className="text-xs font-black px-3 py-1 rounded-md border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase bg-[#9C7A5B] text-[#FFFDF0]">
                      MISI 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="font-black text-[#3E2723] text-base mb-2 uppercase">
                    {idx === 0 && '1. Pengertian Kitab'}
                    {idx === 1 && '2. Dalil Naqli Al-Quran'}
                    {idx === 2 && '3. Aplikasi Kehidupan'}
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed font-bold">
                    {obj.text}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t-2 border-black/20 flex items-center gap-2 text-xs text-[#3E2723] font-black uppercase">
                  <CheckCircle2 className="w-4 h-4 text-[#9C7A5B] stroke-[3]" />
                  <span>Standard KSSR Semakan</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 4-Step Interactive Learning Map (Panduan Kembara Murid - KOTAK KRIM DENGAN KAD COKLAT) */}
      <div className="bold-box bg-[#FFFDF0] text-[#3E2723] rounded-3xl p-6 sm:p-8 border-3 border-black shadow-[5px_5px_0px_#000]">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
          <h3 className="text-lg sm:text-xl font-black text-[#3E2723] flex items-center gap-2.5 uppercase">
            <span className="w-7 h-7 rounded-lg bg-[#9C7A5B] text-[#FFFDF0] flex items-center justify-center text-sm border-2 border-black">
              ⚡
            </span>
            <span>4 Langkah Kembara Ilmu Murid</span>
          </h3>
          <span className="bg-[#9C7A5B] text-[#FFFDF0] border-2 border-black font-black text-xs px-2.5 py-0.5 rounded uppercase">
            KUMPUL 100 PTS
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#5D4037] mb-6 font-bold">
          Selesaikan setiap stesen mengikut turutan di bawah untuk mengumpul mata bintang dan menjana Sijil Penghargaan Digital:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              step: 'LANGKAH 1',
              title: 'Pengertian & 4 Kitab',
              desc: 'Fahami takrif syarak dan selesaikan cabaran susun perkataan & padanan nabi.',
              target: 'halaman-2',
            },
            {
              step: 'LANGKAH 2',
              title: 'Dalil Naqli Suci',
              desc: 'Dengar Surah An-Nisa 136 dan susun potongan maksud ayat mengikut turutan.',
              target: 'halaman-3',
            },
            {
              step: 'LANGKAH 3',
              title: 'Kepentingan & Kuiz',
              desc: 'Hayati 4 tonggak kebaikan serta sahut Kuiz Uji Minda Pengembaraan Kitab Allah.',
              target: 'halaman-4',
            },
            {
              step: 'LANGKAH 4',
              title: 'Refleksi & Sijil',
              desc: 'Lafazkan 3 ikrar mulia, isi jurnal kendiri, dan cetak Sijil Digital Kembara.',
              target: 'halaman-5',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              onClick={() => onNavigateToPage(item.target)}
              className="bold-box bg-[#FAF7F2] hover:bg-[#F5EFE6] text-[#3E2723] rounded-2xl p-5 transition cursor-pointer flex flex-col justify-between group border-2.5 border-black shadow-[3px_3px_0px_#000]"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-black text-[#FFFDF0] bg-[#9C7A5B] px-2.5 py-1 rounded-md border border-black shadow-[1.5px_1.5px_0px_0px_#000] uppercase">
                    {item.step}
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#3E2723] group-hover:translate-x-1 transition stroke-[3]" />
                </div>
                <h4 className="font-black text-[#3E2723] text-base mb-1.5 uppercase">
                  {item.title}
                </h4>
                <p className="text-xs text-[#5D4037] leading-relaxed font-bold">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-2 border-t-2 border-black/20 text-xs text-[#9C7A5B] font-black uppercase flex items-center gap-1">
                <span>MASUK SEKARANG</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Button */}
      <div className="text-center pt-3">
        <button
          onClick={onNavigateToNext}
          className="bold-btn inline-flex items-center gap-3 bg-[#9C7A5B] hover:bg-[#836245] text-[#FFFDF0] font-black px-10 py-5 rounded-2xl text-lg sm:text-xl uppercase tracking-wider cursor-pointer shadow-[5px_5px_0px_0px_#000] border-3 border-black"
        >
          <span>TERUSKAN KE HALAMAN 2: PENGERTIAN KITAB</span>
          <ArrowRight className="w-6 h-6 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
