import React, { useState } from 'react';
import { DALIL_SCRAMBLE_PHRASES } from '../../data/curriculumData';
import { fireConfetti } from '../../utils/confetti';
import { playKidVoiceCorrect, playKidVoiceWrong } from '../../utils/kidAudio';
import {
  Volume2,
  CheckCircle2,
  RotateCcw,
  ArrowRight,
  Info,
  Sparkles,
  HelpCircle,
} from 'lucide-react';

interface Page3DalilProps {
  onNavigateToNext: () => void;
  onActivityComplete: (activityKey: string, points: number) => void;
}

export const Page3Dalil: React.FC<Page3DalilProps> = ({
  onNavigateToNext,
  onActivityComplete,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeHighlightIndex, setActiveHighlightIndex] = useState<number | null>(null);

  // Dalil translation puzzle state
  const [orderedPhrases, setOrderedPhrases] = useState(
    [...DALIL_SCRAMBLE_PHRASES].sort(() => Math.random() - 0.5)
  );
  const [puzzleResult, setPuzzleResult] = useState<'idle' | 'correct' | 'wrong'>('idle');

  const arabicVerseParts = [
    { text: 'يَـٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟', label: 'Wahai orang beriman' },
    { text: 'ءَامِنُوا۟ بِٱللَّهِ وَرَسُولِهِۦ', label: 'Berimanlah kepada Allah & Rasul-Nya' },
    { text: 'وَٱلْكِتَـٰبِ ٱلَّذِى نَزَّلَ عَلَىٰ رَسُولِهِۦ', label: 'Dan kitab yang diturunkan kepada Rasul-Nya (Al-Quran)' },
    { text: 'وَٱلْكِتَـٰبِ ٱلَّذِىٓ أَنزَلَ مِن قَبْلُ', label: 'Serta kitab yang diturunkan sebelumnya' },
  ];

  const handlePlayRecitation = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
        setActiveHighlightIndex(null);
        return;
      }

      const text =
        "Surah An-Nisa ayat 136. Yaa ayyuhal-laziina aamanuu, aaminuu billaahi wa Rasoolihee, wal-Kitaabil-lazii nazzala 'alaa Rasoolihee, wal-Kitaabil-laziii anzala min qabl. Maksudnya: Wahai orang-orang yang beriman! Tetapkanlah iman kamu kepada Allah dan Rasul-Nya, dan kepada Kitab yang diturunkan kepada Rasul-Nya, serta Kitab-kitab yang diturunkan sebelumnya.";

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'id-ID';
      utterance.rate = 0.9;

      utterance.onstart = () => {
        setIsPlayingAudio(true);
        setActiveHighlightIndex(0);
      };

      utterance.onend = () => {
        setIsPlayingAudio(false);
        setActiveHighlightIndex(null);
      };

      utterance.onerror = () => {
        setIsPlayingAudio(false);
        setActiveHighlightIndex(null);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  // Move phrase up or down
  const movePhrase = (index: number, direction: 'up' | 'down') => {
    const newArr = [...orderedPhrases];
    const targetIdx = direction === 'up' ? index - 1 : index + 1;
    if (targetIdx < 0 || targetIdx >= newArr.length) return;
    const temp = newArr[index];
    newArr[index] = newArr[targetIdx];
    newArr[targetIdx] = temp;
    setOrderedPhrases(newArr);
    setPuzzleResult('idle');
  };

  const handleCheckPuzzle = () => {
    const isSorted = orderedPhrases.every((p, idx) => p.order === idx + 1);
    if (isSorted) {
      setPuzzleResult('correct');
      fireConfetti();
      playKidVoiceCorrect();
      onActivityComplete('halaman-3-dalil', 20);
    } else {
      setPuzzleResult('wrong');
      playKidVoiceWrong();
    }
  };

  const handleResetPuzzle = () => {
    setOrderedPhrases([...DALIL_SCRAMBLE_PHRASES].sort(() => Math.random() - 0.5));
    setPuzzleResult('idle');
  };

  return (
    <div className="space-y-10 animate-fadeIn text-[#3E2723]">
      {/* Page Header - COKLAT GELAP & KRIM */}
      <div className="bold-box-lg bg-[#FAF7F2] text-[#3E2723] rounded-3xl p-6 sm:p-8 relative border-3 border-black shadow-[6px_6px_0px_0px_#000]">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            ⚡ HALAMAN 3 • SP 3.2.2
          </span>
          <span className="bg-[#3E2723] text-[#FFFDF0] text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            BUKTI AL-QURAN
          </span>
        </div>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#3E2723] mb-3 uppercase leading-tight">
          DALIL NAQLI KEWAJIPAN BERIMAN KEPADA KITAB
        </h1>
        <p className="text-[#5D4037] text-xs sm:text-sm max-w-3xl leading-relaxed font-bold bg-[#FFFDF0] p-3.5 rounded-xl border-2 border-black shadow-[2px_2px_0px_#000]">
          Bukti perintah mutlak daripada Allah SWT dalam Surah An-Nisa' ayat 136. Dengarkan audio bacaan rasmi, fahami kata kunci al-Quran, dan susun potongan maksud ayat mengikut susunan tepat!
        </p>
      </div>

      {/* NOTA 1: APA ITU DALIL NAQLI? (KOTAK KRIM & COKLAT) */}
      <div className="bold-box bg-[#FFFDF0] rounded-2xl p-5 flex items-start gap-4 border-3 border-black text-[#3E2723] shadow-[4px_4px_0px_0px_#000]">
        <div className="w-12 h-12 rounded-xl bg-[#9C7A5B] text-[#FFFDF0] flex items-center justify-center shrink-0 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
          <Info className="w-6 h-6 stroke-[3]" />
        </div>
        <div>
          <h3 className="font-black text-[#3E2723] text-base mb-1 uppercase">
            TAHUKAH ANDA: APAKAH ITU DALIL NAQLI?
          </h3>
          <p className="text-xs sm:text-sm text-[#5D4037] leading-relaxed font-bold">
            <strong>Dalil Naqli</strong> ialah bukti kukuh yang bersumberkan wahyu suci <strong>Al-Quran dan Hadis Sahih</strong>. Ia menjadi bukti tidak boleh disangkal bahawa setiap orang Islam wajib meyakini kesucian dan kebenaran seluruh kitab Allah!
          </p>
        </div>
      </div>

      {/* NOTA 2: BACAAN AYAT SUCI AL-QURAN & TERJEMAHAN (KOTAK KRIM & COKLAT) */}
      <div className="bold-box bg-[#FFFDF0] text-[#3E2723] rounded-3xl p-6 sm:p-10 relative overflow-hidden border-3 border-black shadow-[6px_6px_0px_0px_#000]">
        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black px-3.5 py-1.5 rounded-lg uppercase tracking-wider border-2 border-black shadow-[2px_2px_0px_0px_#000]">
              SURAH AN-NISA' : AYAT 136
            </span>
            <span className="text-xs text-[#5D4037] font-black uppercase hidden sm:inline bg-[#FAF7F2] px-2.5 py-1 rounded border border-black">
              (PERINTAH WAJIB BERIMAN)
            </span>
          </div>

          <button
            onClick={handlePlayRecitation}
            className="bold-btn flex items-center gap-2 bg-[#9C7A5B] hover:bg-[#836245] text-[#FFFDF0] text-xs sm:text-sm font-black px-5 py-2.5 rounded-xl cursor-pointer uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] border-2 border-black"
          >
            <Volume2 className={`w-5 h-5 stroke-[2.5] ${isPlayingAudio ? 'animate-pulse text-[#FFFDF0]' : ''}`} />
            <span>{isPlayingAudio ? 'Hentikan Audio' : 'Dengar Bacaan Ayat'}</span>
          </button>
        </div>

        {/* Teks Arab Berserta Harakat Lengkap */}
        <div className="bold-box-lg bg-[#FAF7F2] text-[#3E2723] p-6 sm:p-10 rounded-3xl text-center my-6 border-3 border-black shadow-[4px_4px_0px_0px_#000]">
          <p className="text-xs sm:text-sm text-[#FFFDF0] font-mono mb-4 tracking-widest uppercase font-black bg-[#9C7A5B] py-1 px-4 inline-block rounded-md border-2 border-black">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <div className="font-arabic text-3xl sm:text-5xl lg:text-6xl leading-loose sm:leading-loose text-[#3E2723] text-center font-bold tracking-wide px-2 py-4 dir-rtl">
            {arabicVerseParts.map((part, idx) => (
              <span
                key={idx}
                className={`transition-all px-1.5 inline-block ${
                  activeHighlightIndex === idx
                    ? 'bg-[#9C7A5B] text-[#FFFDF0] rounded-lg px-2 border-2 border-black shadow-[2px_2px_0px_0px_#000]'
                    : ''
                }`}
              >
                {part.text}{' '}
              </span>
            ))}
          </div>
          <p className="text-xs text-[#5D4037] mt-4 font-sans font-black uppercase">
            [ SURAH AN-NISA' : AYAT 136 ]
          </p>
        </div>

        {/* Transliterasi Sebutan Rumi */}
        <div className="bold-box mb-6 p-4.5 rounded-2xl bg-[#FAF7F2] text-[#3E2723] border-2 border-black shadow-[2px_2px_0px_0px_#000]">
          <span className="text-[11px] font-black text-[#5D4037] uppercase tracking-wider block mb-1">
            PANDUAN SEBUTAN RUMI (TRANSLITERASI):
          </span>
          <p className="text-xs sm:text-sm text-[#3E2723] font-mono font-bold leading-relaxed">
            "Yaa ayyuhal-laziina aamanuuu, aaminuu billaahi wa Rasoolihee, wal-Kitaabil-lazii nazzala 'alaa Rasoolihee, wal-Kitaabil-laziii anzala min qabl..."
          </p>
        </div>

        {/* Terjemahan Bahasa Melayu */}
        <div className="bold-box p-5 sm:p-6 rounded-2xl bg-[#FAF7F2] text-[#3E2723] border-2 border-black shadow-[2px_2px_0px_0px_#000]">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-[#9C7A5B] text-[#FFFDF0] text-[10px] font-black uppercase px-2.5 py-0.5 rounded border border-black">
              TERJEMAHAN MAKSUD AYAT
            </span>
          </div>
          <blockquote className="text-sm sm:text-base text-[#3E2723] font-black leading-relaxed">
            "Wahai orang-orang yang beriman! Tetapkanlah iman kamu kepada Allah dan Rasul-Nya, dan kepada Kitab yang diturunkan kepada Rasul-Nya (Al-Quran), serta Kitab-kitab yang diturunkan sebelumnya."
          </blockquote>
        </div>

        {/* Pecahan Kalimah & Maksud */}
        <div className="mt-8">
          <h4 className="text-sm sm:text-base font-black text-[#3E2723] mb-3 flex items-center gap-2 uppercase">
            <Sparkles className="w-5 h-5 text-[#9C7A5B] stroke-[3]" />
            <span>Pecahan Kalimah Kunci (Mari Tadabbur):</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {arabicVerseParts.map((item, idx) => (
              <div
                key={idx}
                className="bold-box p-4 rounded-xl bg-[#FAF7F2] text-[#3E2723] border-2 border-black flex items-center justify-between gap-3 text-xs shadow-[2px_2px_0px_0px_#000]"
              >
                <span className="font-arabic text-lg sm:text-xl font-bold text-[#3E2723]">
                  {item.text}
                </span>
                <span className="bg-[#9C7A5B] text-[#FFFDF0] px-2.5 py-1 rounded-md border border-black font-black text-right text-xs">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AKTIVITI SANTAI: SUSUN POTONGAN MAKSUD AYAT (KOTAK KRIM & COKLAT GELAP) */}
      <div className="bold-box-lg bg-[#FFFDF0] text-[#3E2723] rounded-3xl p-6 sm:p-8 border-3 border-black shadow-[6px_6px_0px_0px_#000]">
        <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-3">
            <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black px-3.5 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000] uppercase">
              ⚡ AKTIVITI INTERAKTIF
            </span>
            <h3 className="text-lg sm:text-xl font-black text-[#3E2723] uppercase tracking-tight">
              CABARAN SUSUN POTONGAN MAKSUD DALIL NAQLI
            </h3>
          </div>
          <span className="text-xs text-[#FFFDF0] font-black bg-[#9C7A5B] border-2 border-black px-3 py-1.5 rounded-lg shadow-[2px_2px_0px_0px_#000] uppercase">
            ⭐ GANJARAN: +20 PTS
          </span>
        </div>

        <p className="text-xs sm:text-sm text-[#5D4037] mb-6 font-bold">
          Susun 4 frasa maksud ayat di bawah daripada nombor 1 hingga 4 mengikut terjemahan Surah An-Nisa ayat 136 yang betul. Gunakan butang <strong>Naik (▲)</strong> atau <strong>Turun (▼)</strong>:
        </p>

        {/* Ordered Phrases List */}
        <div className="space-y-3 mb-6">
          {orderedPhrases.map((phrase, idx) => (
            <div
              key={phrase.id}
              className="bold-box bg-[#FAF7F2] text-[#3E2723] rounded-2xl p-4.5 flex items-center justify-between gap-3 border-2 border-black shadow-[2px_2px_0px_0px_#000]"
            >
              <div className="flex items-center gap-3.5">
                <span className="w-9 h-9 rounded-xl bg-[#9C7A5B] text-[#FFFDF0] border border-black shadow-[2px_2px_0px_0px_#000] flex items-center justify-center font-black text-sm">
                  {idx + 1}
                </span>
                <span className="text-xs sm:text-base font-black text-[#3E2723]">
                  "{phrase.text}"
                </span>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => movePhrase(idx, 'up')}
                  disabled={idx === 0}
                  className="bold-btn w-9 h-9 rounded-xl bg-[#9C7A5B] hover:bg-[#836245] text-[#FFFDF0] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-xs font-black cursor-pointer border border-black shadow-[1.5px_1.5px_0px_0px_#000]"
                  title="Alih ke atas"
                >
                  ▲
                </button>
                <button
                  onClick={() => movePhrase(idx, 'down')}
                  disabled={idx === orderedPhrases.length - 1}
                  className="bold-btn w-9 h-9 rounded-xl bg-[#9C7A5B] hover:bg-[#836245] text-[#FFFDF0] disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center text-xs font-black cursor-pointer border border-black shadow-[1.5px_1.5px_0px_0px_#000]"
                  title="Alih ke bawah"
                >
                  ▼
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Status result */}
        {puzzleResult === 'correct' && (
          <div className="bold-box mb-5 p-4 rounded-xl bg-[#FAF7F2] text-[#3E2723] border-2.5 border-black flex items-center gap-3 shadow-[2px_2px_0px_#000]">
            <div className="w-8 h-8 rounded-lg bg-[#9C7A5B] text-[#FFFDF0] flex items-center justify-center border border-black shadow-[1.5px_1.5px_0px_0px_#000] shrink-0">
              <CheckCircle2 className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="text-xs sm:text-sm font-black uppercase">
              HEBAT SEKALI! Anda telah menyusun terjemahan ayat Surah An-Nisa: 136 dengan susunan yang sempurna! (+20 Mata)
            </div>
          </div>
        )}

        {puzzleResult === 'wrong' && (
          <div className="bold-box mb-5 p-4 rounded-xl bg-[#FAF7F2] text-[#3E2723] border-2.5 border-black flex items-center gap-3 shadow-[2px_2px_0px_#000]">
            <div className="w-8 h-8 rounded-lg bg-[#3E2723] text-[#FFFDF0] flex items-center justify-center border border-black shadow-[1.5px_1.5px_0px_0px_#000] shrink-0">
              <HelpCircle className="w-5 h-5 stroke-[3]" />
            </div>
            <div className="text-xs sm:text-sm font-black">
              Susunan masih belum tepat. Sila rujuk kotak Terjemahan Maksud Ayat di atas dan cuba lagi!
            </div>
          </div>
        )}

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleCheckPuzzle}
            className="bold-btn bg-[#9C7A5B] hover:bg-[#836245] text-[#FFFDF0] font-black px-6 py-3 rounded-xl text-xs sm:text-sm cursor-pointer flex items-center gap-2 uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] border-2 border-black"
          >
            <CheckCircle2 className="w-4 h-4 stroke-[3]" />
            <span>Semak Susunan</span>
          </button>
          <button
            onClick={handleResetPuzzle}
            className="bold-btn bg-[#FFFDF0] hover:bg-[#FAF7F2] text-[#3E2723] font-black px-5 py-3 rounded-xl text-xs sm:text-sm cursor-pointer flex items-center gap-2 uppercase tracking-wider shadow-[3px_3px_0px_0px_#000] border-2 border-black"
          >
            <RotateCcw className="w-4 h-4 stroke-[3]" />
            <span>Rawakkan Semula</span>
          </button>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t-2.5 border-black">
        <span className="text-xs text-[#5D4037] font-black uppercase">
          SELESAI HALAMAN 3: DALIL NAQLI
        </span>
        <button
          onClick={onNavigateToNext}
          className="bold-btn inline-flex items-center gap-2.5 bg-[#9C7A5B] hover:bg-[#836245] text-[#FFFDF0] font-black px-7 py-4 rounded-2xl text-sm uppercase tracking-wider cursor-pointer shadow-[4px_4px_0px_0px_#000] border-3 border-black"
        >
          <span>SETERUSNYA: HALAMAN 4 (KEPENTINGAN BERIMAN)</span>
          <ArrowRight className="w-5 h-5 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};
