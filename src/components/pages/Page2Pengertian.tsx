import React, { useState } from 'react';
import { DEFINITION_SCRAMBLE_WORDS, MATCHING_BOOKS_DATA } from '../../data/curriculumData';
import { fireConfetti } from '../../utils/confetti';
import { playKidVoiceCorrect, playKidVoiceWrong, playChimeCorrect } from '../../utils/kidAudio';
import {
  BookOpen,
  Sparkles,
  CheckCircle2,
  RotateCcw,
  HelpCircle,
  ArrowRight,
  ShieldAlert,
  Lightbulb,
  Award,
  Play,
  ExternalLink,
  X,
} from 'lucide-react';

interface Page2PengertianProps {
  onNavigateToNext: () => void;
  onActivityComplete: (activityKey: string, points: number) => void;
}

export const Page2Pengertian: React.FC<Page2PengertianProps> = ({
  onNavigateToNext,
  onActivityComplete,
}) => {
  const [showInlineVideo, setShowInlineVideo] = useState(false);

  // Activity 1 State: Word Scramble for Definition
  const [availableWords, setAvailableWords] = useState(
    [...DEFINITION_SCRAMBLE_WORDS].sort(() => Math.random() - 0.5)
  );
  const [selectedWords, setSelectedWords] = useState<typeof DEFINITION_SCRAMBLE_WORDS>([]);
  const [scrambleStatus, setScrambleStatus] = useState<'idle' | 'correct' | 'wrong'>('idle');

  // Activity 2 State: Matching Kitab & Nabi
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [matchedPairs, setMatchedPairs] = useState<Record<string, string>>({}); // { taurat: "Nabi Musa a.s." }
  const [wrongPairAnimation, setWrongPairAnimation] = useState<string | null>(null);
  const [matchingDone, setMatchingDone] = useState(false);

  // Handlers for Scramble
  const handleSelectWord = (word: (typeof DEFINITION_SCRAMBLE_WORDS)[0]) => {
    setSelectedWords([...selectedWords, word]);
    setAvailableWords(availableWords.filter((w) => w.id !== word.id));
    setScrambleStatus('idle');
  };

  const handleRemoveWord = (word: (typeof DEFINITION_SCRAMBLE_WORDS)[0]) => {
    setAvailableWords([...availableWords, word]);
    setSelectedWords(selectedWords.filter((w) => w.id !== word.id));
    setScrambleStatus('idle');
  };

  const handleResetScramble = () => {
    setAvailableWords([...DEFINITION_SCRAMBLE_WORDS].sort(() => Math.random() - 0.5));
    setSelectedWords([]);
    setScrambleStatus('idle');
  };

  const handleCheckScramble = () => {
    const correctOrder = ['w1', 'w2', 'w3', 'w4', 'w5'];
    const currentOrder = selectedWords.map((w) => w.id);
    const isCorrect =
      currentOrder.length === correctOrder.length &&
      currentOrder.every((id, idx) => id === correctOrder[idx]);

    if (isCorrect) {
      setScrambleStatus('correct');
      fireConfetti();
      playKidVoiceCorrect();
      onActivityComplete('halaman-2-scramble', 20);
    } else {
      setScrambleStatus('wrong');
      playKidVoiceWrong();
    }
  };

  // Handlers for Matching Game
  const prophetsList = [
    { name: 'Nabi Musa a.s.', bookId: 'taurat' },
    { name: 'Nabi Isa a.s.', bookId: 'injil' },
    { name: 'Nabi Muhammad SAW', bookId: 'quran' },
    { name: 'Nabi Daud a.s.', bookId: 'zabur' },
  ];

  const handleMatchSelect = (prophet: { name: string; bookId: string }) => {
    if (!selectedBook) return;

    if (selectedBook === prophet.bookId) {
      const newMatches = { ...matchedPairs, [selectedBook]: prophet.name };
      setMatchedPairs(newMatches);
      setSelectedBook(null);

      if (Object.keys(newMatches).length === MATCHING_BOOKS_DATA.length) {
        setMatchingDone(true);
        fireConfetti();
        playKidVoiceCorrect();
        onActivityComplete('halaman-2-matching', 20);
      } else {
        playChimeCorrect();
      }
    } else {
      setWrongPairAnimation(prophet.name);
      playKidVoiceWrong();
      setTimeout(() => {
        setWrongPairAnimation(null);
      }, 800);
    }
  };

  const handleResetMatching = () => {
    setMatchedPairs({});
    setSelectedBook(null);
    setMatchingDone(false);
  };

  return (
    <div className="space-y-10 animate-fadeIn text-[#3E2723]">
      {/* Page Header - COKLAT GELAP & KRIM */}
      <div className="bold-box-lg bg-[#FAF7F2] text-[#3E2723] rounded-3xl p-6 sm:p-8 relative border-3 border-black shadow-[6px_6px_0px_0px_#000]">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            ⚡ HALAMAN 2 • SP 3.2.1
          </span>
          <span className="bg-[#3E2723] text-[#FFFDF0] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            PENGETAHUAN ASAS AKIDAH
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#3E2723] mb-3 uppercase leading-tight">
          PENGERTIAN KITAB &amp; MENGENALI 4 KITAB UTAMA
        </h1>
        <p className="text-[#5D4037] text-xs sm:text-sm max-w-3xl leading-relaxed font-bold bg-[#FFFDF0] p-3.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
          Kuasai maksud kitab suci dari segi bahasa &amp; istilah syarak, kenali 4 nabi mulia penerima wahyu, serta uji kefahamanmu melalui permainan susun perkataan &amp; padanan kilat!
        </p>
      </div>

      {/* NOTA 1: PENGERTIAN KITAB (KOTAK KRIM & COKLAT GELAP) */}
      <div className="bold-box bg-[#FFFDF0] text-[#3E2723] rounded-3xl p-6 sm:p-8 border-3 border-black shadow-[5px_5px_0px_0px_#000]">
        <div className="flex items-center gap-3 mb-6">
          <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase">
            NOTA KONSEP 01
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-[#3E2723] uppercase tracking-tight">
            APAKAH PENGERTIAN KITAB ALLAH?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Bahasa Card */}
          <div className="bold-box bg-[#FAF7F2] text-[#3E2723] rounded-2xl p-6 border-2.5 border-black shadow-[3px_3px_0px_0px_#000]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#9C7A5B] text-[#FFFDF0] flex items-center justify-center font-black text-base border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                A
              </div>
              <h3 className="font-black text-[#3E2723] text-lg uppercase">
                DARI SEGI BAHASA
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#5D4037] leading-relaxed font-bold">
              Berasal daripada perkataan Arab <em>"Kataba" (كتب)</em> yang bermaksud{' '}
              <span className="bg-[#9C7A5B] text-[#FFFDF0] px-2 py-0.5 rounded border border-black font-black">
                "TULISAN"
              </span>{' '}
              atau{' '}
              <span className="bg-[#9C7A5B] text-[#FFFDF0] px-2 py-0.5 rounded border border-black font-black">
                "BUKU CATATAN"
              </span>.
            </p>
          </div>

          {/* Syarak Card */}
          <div className="bold-box bg-[#FAF7F2] text-[#3E2723] rounded-2xl p-6 border-2.5 border-black shadow-[3px_3px_0px_0px_#000]">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#9C7A5B] text-[#FFFDF0] flex items-center justify-center font-black text-base border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                B
              </div>
              <h3 className="font-black text-[#3E2723] text-lg uppercase">
                DARI SEGI ISTILAH SYARAK
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#5D4037] leading-relaxed font-bold">
              <strong>Kalam Allah SWT yang suci</strong>, diwahyukan kepada para nabi dan rasul melalui Malaikat Jibril a.s., mengandungi syariat dan petunjuk kebenaran bagi seluruh manusia.
            </p>
          </div>
        </div>

        {/* Kid-Friendly Analogy Box */}
        <div className="bold-box bg-[#FAF7F2] text-[#3E2723] rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-2 border-black shadow-[3px_3px_0px_0px_#000]">
          <div className="w-12 h-12 rounded-2xl bg-[#9C7A5B] text-[#FFFDF0] flex items-center justify-center shrink-0 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            <Lightbulb className="w-7 h-7 stroke-[2.5]" />
          </div>
          <div className="flex-1">
            <h4 className="text-base font-black text-[#3E2723] uppercase mb-1">
              💡 ANALOGI WIRA TAHUN 3: "MANUAL OPERASI KEHIDUPAN"
            </h4>
            <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed font-bold">
              Bila beli dron atau basikal baharu, kita wajib rujuk buku manual supaya tahu fungsi dan tidak terjatuh. Begitulah kitab suci! Allah menurunkan Al-Quran sebagai <strong>manual kehidupan manusia paling tepat dan selamat</strong> di dunia dan akhirat!
            </p>
          </div>
        </div>

        {/* Hukum Beriman Callout */}
        <div className="bold-box mt-5 p-4.5 rounded-2xl bg-[#9C7A5B] text-[#FFFDF0] border-2.5 border-black flex items-center justify-between flex-wrap gap-3 shadow-[3px_3px_0px_0px_#000]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#3E2723] text-[#FFFDF0] flex items-center justify-center border border-black shadow-[1.5px_1.5px_0px_0px_#000] shrink-0">
              <ShieldAlert className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div className="text-sm sm:text-base font-black">
              <span className="uppercase tracking-wider">HUKUM BERIMAN KEPADA KITAB: </span>
              <span className="bg-[#FFFDF0] text-[#3E2723] px-2.5 py-0.5 rounded border border-black uppercase ml-1">
                WAJIB (FARDHU AIN)
              </span>
            </div>
          </div>
          <span className="bg-[#3E2723] border-2 border-black text-[#FFFDF0] font-black text-xs px-3.5 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_#000] uppercase">
            👑 RUKUN IMAN KE-3
          </span>
        </div>
      </div>

      {/* KOTAK LAGU AKIDAH TAHUN 3 - LETAK SEBELUM 4 KITAB UTAMA (KOTAK COKLAT #A88665) */}
      <div 
        style={{
          backgroundColor: '#A88665',
          border: '3px solid #000000',
          borderRadius: '12px',
          padding: '20px',
          textAlign: 'center',
          boxShadow: '4px 4px 0px #000000',
          maxWidth: '650px',
          margin: '25px auto',
        }}
        className="transition-transform hover:-translate-y-0.5"
      >
        <a 
          href="https://youtu.be/rTmChzd98bM?feature=shared" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
            color: '#FFFDF9',
            fontSize: '24px',
            fontWeight: 'bold',
            display: 'block',
            fontFamily: 'sans-serif',
            letterSpacing: '1px',
          }}
          className="hover:underline flex items-center justify-center gap-2"
        >
          <span>🎵 MARI KITA DENGARKAN LAGU 🎵</span>
        </a>
        <p 
          style={{
            color: '#FFFDF9',
            fontSize: '14px',
            marginTop: '8px',
            fontFamily: 'sans-serif',
            fontWeight: 600,
          }}
        >
          (Klik di atas untuk tonton video lagu Akidah Tahun 3)
        </p>

        {/* Butang Tonton Terus dalam Web App */}
        <div className="mt-3.5 pt-3 border-t border-black/30 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setShowInlineVideo(!showInlineVideo)}
            className="bg-[#FFFDF0] hover:bg-[#FAF7F2] text-[#3E2723] font-black px-4 py-2 rounded-xl text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] cursor-pointer flex items-center gap-1.5 transition-all"
          >
            {showInlineVideo ? (
              <>
                <X className="w-4 h-4 stroke-[2.5]" />
                <span>Tutup Pemain Video</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current stroke-[2]" />
                <span>Tonton Video Di Sini (Skrin Terus)</span>
              </>
            )}
          </button>
          <a
            href="https://youtu.be/rTmChzd98bM?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#3E2723] hover:bg-[#251511] text-[#FFFDF0] font-black px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_#000] flex items-center gap-1 transition-all"
          >
            <span>Buka YouTube</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Video Player Terus (Inline Embed) */}
        {showInlineVideo && (
          <div className="mt-4 pt-3 border-t border-black/30 animate-fadeIn">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2.5 border-black shadow-[3px_3px_0px_0px_#000] bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/rTmChzd98bM?autoplay=1&rel=0"
                title="Lagu Akidah Pendidikan Islam Tahun 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>

      {/* NOTA 2: 4 KITAB UTAMA DAN NABI PENERIMANYA (KOTAK KRIM & COKLAT GELAP) */}
      <div className="bold-box bg-[#FFFDF0] text-[#3E2723] rounded-3xl p-6 sm:p-8 border-3 border-black shadow-[5px_5px_0px_0px_#000]">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-6">
          <div className="flex items-center gap-3">
            <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase">
              NOTA KONSEP 02
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#3E2723] uppercase tracking-tight">
              4 KITAB UTAMA &amp; NABI PENERIMA
            </h2>
          </div>
          <span className="text-xs font-black bg-[#9C7A5B] text-[#FFFDF0] border-2 border-black px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_#000] uppercase">
            WAJIB DIKETAHUI SETIAP MUSLIM
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {MATCHING_BOOKS_DATA.map((book, idx) => {
            return (
              <div
                key={book.id}
                className="bold-box bg-[#FAF7F2] text-[#3E2723] rounded-2xl p-5 transition flex flex-col justify-between border-2.5 border-black shadow-[3px_3px_0px_0px_#000]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-lg bg-[#9C7A5B] text-[#FFFDF0] shadow-[2px_2px_0px_0px_#000] flex items-center justify-center font-black text-xs border border-black">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded border border-black bg-[#FFFDF0] text-[#3E2723]">
                      {book.language}
                    </span>
                  </div>

                  <h3 className="font-black text-lg text-[#3E2723] mb-1 uppercase">
                    {book.bookName}
                  </h3>

                  <div className="my-3 p-3 bg-[#FFFDF0] rounded-xl border-2 border-black shadow-[2px_2px_0px_0px_#000]">
                    <span className="text-[10px] uppercase font-black text-[#5D4037] block">
                      NABI PENERIMA:
                    </span>
                    <span className="text-sm font-black text-[#3E2723]">
                      {book.prophet}
                    </span>
                  </div>

                  <p className="text-xs text-[#5D4037] leading-relaxed font-bold">
                    {book.highlight}
                  </p>
                </div>

                {book.id === 'quran' && (
                  <div className="mt-4 pt-2.5 border-t-2 border-black/20 text-xs font-black text-[#3E2723] flex items-center gap-1.5 uppercase">
                    <Sparkles className="w-4 h-4 text-[#9C7A5B] stroke-[3]" />
                    <span className="bg-[#9C7A5B] text-[#FFFDF0] px-2 py-0.5 rounded border border-black">
                      KITAB PENUTUP &amp; PENYEMPURNA
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* AKTIVITI 1: PERMAINAN SUSUN PERKATAAN DEFINISI (KOTAK KRIM & COKLAT GELAP) */}
      <div className="bold-box-lg bg-[#FFFDF0] text-[#3E2723] rounded-3xl p-6 sm:p-8 border-3 border-black shadow-[6px_6px_0px_0px_#000]">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-3">
            <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase">
              ⚡ AKTIVITI INTERAKTIF A
            </span>
            <h3 className="text-lg sm:text-xl font-black text-[#3E2723] uppercase tracking-tight">
              CABARAN SUSUN PERKATAAN: DEFINISI KITAB
            </h3>
          </div>
          <span className="text-xs text-[#FFFDF0] font-black bg-[#9C7A5B] border-2 border-black px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_#000] uppercase">
            ⭐ GANJARAN: +20 PTS
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#5D4037] mb-6 font-bold">
          Susun kepingan kad perkataan di bawah mengikut urutan yang betul untuk membina pengertian kitab mengikut syarak:
        </p>

        {/* Selected Words Area (Drop Zone) */}
        <div className="bg-[#FAF7F2] rounded-2xl border-3 border-dashed border-black/50 p-5 mb-5 min-h-[90px] flex flex-wrap items-center gap-2.5 shadow-inner">
          {selectedWords.length === 0 ? (
            <span className="text-xs sm:text-sm text-[#5D4037] font-bold italic">
              👉 Klik kepingan perkataan krim di bawah untuk membina takrifan di sini...
            </span>
          ) : (
            selectedWords.map((word) => (
              <button
                key={word.id}
                onClick={() => handleRemoveWord(word)}
                className="bold-btn bg-[#9C7A5B] text-[#FFFDF0] text-xs sm:text-sm font-black px-4 py-2 rounded-xl flex items-center gap-1.5 cursor-pointer group shadow-[2px_2px_0px_0px_#000] border-2 border-black"
                title="Klik untuk buang"
              >
                <span>{word.text}</span>
                <span className="text-xs text-white font-black ml-1 bg-black/40 w-4 h-4 rounded-full flex items-center justify-center">✕</span>
              </button>
            ))
          )}
        </div>

        {/* Available Words pool */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6">
          {availableWords.map((word) => (
            <button
              key={word.id}
              onClick={() => handleSelectWord(word)}
              className="bold-btn bg-[#FFFDF0] hover:bg-[#FAF7F2] text-[#3E2723] text-xs sm:text-sm font-black px-4 py-2.5 rounded-xl cursor-pointer shadow-[3px_3px_0px_0px_#000] border-2 border-black"
            >
              + {word.text}
            </button>
          ))}
        </div>

        {/* Status Message */}
        {scrambleStatus === 'correct' && (
          <div className="bold-box mb-5 p-4 rounded-xl bg-[#FAF7F2] text-[#3E2723] border-2.5 border-black flex items-center gap-3 shadow-[2px_2px_0px_#000]">
            <div className="w-8 h-8 rounded-lg bg-[#9C7A5B] text-[#FFFDF0] flex items-center justify-center border border-black shadow-[1.5px_1.5px_0px_0px_#000] shrink-0">
              <CheckCircle2 className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="text-xs sm:text-sm font-black uppercase">
              TAHNIAH, JAWAPAN KAMU TEPAT! Kamu berjaya menyusun definisi kitab dengan sempurna! (+20 Mata)
            </div>
          </div>
        )}

        {scrambleStatus === 'wrong' && (
          <div className="bold-box mb-5 p-4 rounded-xl bg-[#FAF7F2] text-[#3E2723] border-2.5 border-black flex items-center gap-3 shadow-[2px_2px_0px_#000]">
            <div className="w-8 h-8 rounded-lg bg-[#3E2723] text-[#FFFDF0] flex items-center justify-center border border-black shadow-[1.5px_1.5px_0px_0px_#000] shrink-0">
              <HelpCircle className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="text-xs sm:text-sm font-black">
              Urutan belum tepat. Cuba lagi! Petua: Mulakan dengan perkataan "Kalam Allah SWT...".
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCheckScramble}
            disabled={selectedWords.length !== DEFINITION_SCRAMBLE_WORDS.length}
            className="bold-btn bg-[#9C7A5B] hover:bg-[#836245] disabled:opacity-50 disabled:cursor-not-allowed text-[#FFFDF0] font-black px-6 py-3 rounded-xl text-xs sm:text-sm cursor-pointer flex items-center gap-2 uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] border-2 border-black"
          >
            <CheckCircle2 className="w-4 h-4 stroke-[3]" />
            <span>Semak Jawapan</span>
          </button>
          <button
            onClick={handleResetScramble}
            className="bold-btn bg-[#FFFDF0] hover:bg-[#FAF7F2] text-[#3E2723] font-black px-5 py-3 rounded-xl text-xs sm:text-sm cursor-pointer flex items-center gap-2 uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] border-2 border-black"
          >
            <RotateCcw className="w-4 h-4 stroke-[3]" />
            <span>Susun Semula</span>
          </button>
        </div>
      </div>

      {/* AKTIVITI 2: PADANAN KILAT KITAB & NABI PENERIMA (KOTAK KRIM & COKLAT GELAP) */}
      <div className="bold-box bg-[#FFFDF0] text-[#3E2723] rounded-3xl p-6 sm:p-8 border-3 border-black shadow-[5px_5px_0px_#000]">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-3">
            <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase">
              ⚡ AKTIVITI INTERAKTIF B
            </span>
            <h3 className="text-lg sm:text-xl font-black text-[#3E2723] uppercase tracking-tight">
              PADANAN KILAT: KITAB &amp; NABI PENERIMA
            </h3>
          </div>
          <span className="text-xs text-[#FFFDF0] font-black bg-[#9C7A5B] border-2 border-black px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_#000] uppercase">
            ⭐ GANJARAN: +20 PTS
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#5D4037] mb-6 font-bold">
          Cara bermain: <strong>Klik nama Kitab</strong> di sebelah kiri, kemudian <strong>klik nama Nabi</strong> di sebelah kanan untuk memadankannya!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Kolum Kitab */}
          <div className="space-y-3">
            <span className="text-xs font-black text-[#FFFDF0] uppercase tracking-wider bg-[#9C7A5B] border-2 border-black px-3 py-1.5 rounded-lg inline-block shadow-[2px_2px_0px_0px_#000]">
              LANGKAH 1: PILIH KITAB
            </span>
            {MATCHING_BOOKS_DATA.map((book) => {
              const isMatched = !!matchedPairs[book.id];
              const isSelected = selectedBook === book.id;

              return (
                <button
                  key={book.id}
                  onClick={() => !isMatched && setSelectedBook(book.id)}
                  disabled={isMatched}
                  className={`bold-btn w-full p-4.5 rounded-2xl text-left font-black text-sm flex items-center justify-between cursor-pointer border-2.5 border-black transition-all ${
                    isMatched
                      ? 'bg-[#3E2723] text-[#FFFDF0] opacity-90 shadow-[2px_2px_0px_#000]'
                      : isSelected
                      ? 'bg-[#9C7A5B] text-[#FFFDF0] scale-102 ring-2 ring-black shadow-[3px_3px_0px_#000]'
                      : 'bg-[#FAF7F2] hover:bg-[#F5EFE6] text-[#3E2723] shadow-[2px_2px_0px_#000]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 stroke-[2.5]" />
                    <span className="uppercase">{book.bookName}</span>
                  </div>
                  {isMatched && (
                    <span className="text-xs text-[#FFFDF0] bg-black/40 px-2.5 py-1 rounded-md border border-black font-black">
                      SELESAI ✓
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Kolum Nabi */}
          <div className="space-y-3">
            <span className="text-xs font-black text-[#FFFDF0] uppercase tracking-wider bg-[#9C7A5B] border-2 border-black px-3 py-1.5 rounded-lg inline-block shadow-[2px_2px_0px_0px_#000]">
              LANGKAH 2: PADANKAN NABI
            </span>
            {prophetsList.map((prophet) => {
              const matchedBookId = Object.keys(matchedPairs).find(
                (k) => matchedPairs[k] === prophet.name
              );
              const isMatched = !!matchedBookId;
              const isShaking = wrongPairAnimation === prophet.name;

              return (
                <button
                  key={prophet.name}
                  onClick={() => !isMatched && handleMatchSelect(prophet)}
                  disabled={isMatched || !selectedBook}
                  className={`bold-btn w-full p-4.5 rounded-2xl text-left font-black text-sm flex items-center justify-between cursor-pointer border-2.5 border-black transition-all ${
                    isMatched
                      ? 'bg-[#3E2723] text-[#FFFDF0] opacity-90 shadow-[2px_2px_0px_#000]'
                      : selectedBook
                      ? 'bg-[#FAF7F2] hover:bg-[#F5EFE6] text-[#3E2723] shadow-[2px_2px_0px_#000]'
                      : 'bg-[#FAF7F2]/50 text-[#5D4037]/50 cursor-not-allowed border-dashed'
                  } ${isShaking ? 'animate-shake bg-rose-200 text-rose-900 border-rose-900' : ''}`}
                >
                  <span className="uppercase">{prophet.name}</span>
                  {isMatched && (
                    <span className="text-xs text-[#FFFDF0] font-black flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-md border border-black">
                      <CheckCircle2 className="w-4 h-4 text-[#FFFDF0] stroke-[3]" />
                      <span>{MATCHING_BOOKS_DATA.find((b) => b.id === matchedBookId)?.bookName}</span>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Matching Success Message */}
        {matchingDone && (
          <div className="bold-box p-4 rounded-2xl bg-[#FAF7F2] text-[#3E2723] border-2.5 border-black flex items-center justify-between flex-wrap gap-3 mb-4 shadow-[2px_2px_0px_#000]">
            <div className="flex items-center gap-2.5 font-black text-sm uppercase text-[#3E2723]">
              <div className="w-8 h-8 rounded-lg bg-[#9C7A5B] text-[#FFFDF0] flex items-center justify-center border border-black shadow-[1.5px_1.5px_0px_0px_#000] shrink-0">
                <Award className="w-5 h-5 stroke-[3]" />
              </div>
              <span>
                HEBAT! Semua 4 kitab berjaya dipadankan dengan nabi penerima secara tepat! (+20 Mata)
              </span>
            </div>
            <button
              onClick={handleResetMatching}
              className="bold-btn bg-[#FFFDF0] hover:bg-[#FAF7F2] text-[#3E2723] px-3.5 py-1.5 rounded-lg text-xs font-black uppercase cursor-pointer border-2 border-black shadow-[2px_2px_0px_0px_#000]"
            >
              Main Semula
            </button>
          </div>
        )}
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t-2.5 border-black">
        <span className="text-xs text-[#5D4037] font-black uppercase">
          SELESAI HALAMAN 2: PENGERTIAN &amp; 4 KITAB
        </span>
        <button
          onClick={onNavigateToNext}
          className="bold-btn inline-flex items-center gap-2.5 bg-[#9C7A5B] hover:bg-[#836245] text-[#FFFDF0] font-black px-7 py-4 rounded-2xl text-sm uppercase tracking-wider cursor-pointer shadow-[4px_4px_0px_0px_#000] border-3 border-black"
        >
          <span>SETERUSNYA: HALAMAN 3 (DALIL NAQLI)</span>
          <ArrowRight className="w-5 h-5 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
