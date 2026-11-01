import React, { useState } from 'react';
import { PAGES_DATA, CURRICULUM_INFO } from '../data/curriculumData';
import {
  Copy,
  Check,
  Download,
  ExternalLink,
  Lightbulb,
  Sparkles,
  BookOpen,
  Layers,
  Info,
  LayoutGrid,
  FileCode,
} from 'lucide-react';

interface TeacherCopyModeProps {
  onSwitchToStudentView: (pageId: string) => void;
}

export const TeacherCopyMode: React.FC<TeacherCopyModeProps> = ({ onSwitchToStudentView }) => {
  const [selectedTab, setSelectedTab] = useState<string>('all');
  const [viewStyle, setViewStyle] = useState<'cards' | 'raw'>('cards');
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(label);
    setTimeout(() => {
      setCopiedSection(null);
    }, 2500);
  };

  const handleDownloadDraft = () => {
    const fullDraft = PAGES_DATA.map((p) => p.rawCopyText).join('\n\n\n');
    const blob = new Blob([fullDraft], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Draf_Google_Sites_Pendidikan_Islam_Tahun_3_Beriman_Kitab.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const activePages = selectedTab === 'all' ? PAGES_DATA : PAGES_DATA.filter((p) => p.id === selectedTab);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 text-[#3E2723]">
      {/* Toast Notification */}
      {copiedSection && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#9C7A5B] text-[#FFFDF0] px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border-2 border-black animate-bounce">
          <Check className="w-5 h-5 text-[#FFFDF0]" />
          <span className="text-sm font-black">
            Teks "{copiedSection}" berjaya disalin! Tampal terus ke Google Sites anda.
          </span>
        </div>
      )}

      {/* Header Banner - CREAM BOX WITH PASTEL BROWN ACCENTS & BLACK LINES */}
      <div className="bold-box-lg bg-[#FFFDF0] text-[#3E2723] rounded-3xl p-6 sm:p-8 mb-8 relative overflow-hidden border-2.5 border-black">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#9C7A5B] border-2 border-black text-[#FFFDF0] text-xs font-black px-3.5 py-1 rounded-md mb-3 shadow-[2px_2px_0px_0px_#000] uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#FFFDF0]" />
              <span>PUSAT SALIN TEKS GOOGLE SITES</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-[#3E2723] mb-2 uppercase">
              DRAF LENGKAP GOOGLE SITES (PENDIDIKAN ISLAM TAHUN 3)
            </h1>
            <p className="text-[#3E2723] text-xs sm:text-sm max-w-2xl leading-relaxed font-bold bg-[#FAF7F2] p-3 rounded-xl border-2 border-black">
              Disusun khas mengikut DSKP Semakan (Standard Kandungan 3.2) dengan gaya visual kemas: kotak krim, kotak kecil coklat pastel, garis hitam tegas, dan teks coklat gelap yang padat &amp; mesra murid.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => {
                const allText = PAGES_DATA.map((p) => p.rawCopyText).join('\n\n\n');
                handleCopy(allText, 'Semua Halaman (1 - 5)');
              }}
              className="bold-btn flex items-center gap-2 bg-[#9C7A5B] hover:brightness-110 text-[#FFFDF0] font-black px-5 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider cursor-pointer shadow-[3px_3px_0px_0px_#000] border-2 border-black"
            >
              <Copy className="w-4 h-4 stroke-[2.5]" />
              <span>Salin Semua Draf (1 - 5)</span>
            </button>
            <button
              onClick={handleDownloadDraft}
              className="bold-btn flex items-center gap-2 bg-[#FFFDF0] hover:bg-[#FAF7F2] text-[#3E2723] font-black px-4 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider cursor-pointer shadow-[3px_3px_0px_0px_#000] border-2 border-black"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Muat Turun .TXT</span>
            </button>
          </div>
        </div>

        {/* DSKP Alignment Summary Bar */}
        <div className="mt-6 pt-6 border-t-2.5 border-black grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-bold text-[#3E2723]">
          <div className="bold-box bg-[#FAF7F2] p-3.5 rounded-xl border-2 border-black">
            <span className="bg-[#9C7A5B] text-[#FFFDF0] px-2 py-0.5 rounded border border-black font-black block mb-1 uppercase w-fit">
              Standard Kandungan:
            </span>
            <span className="text-[#3E2723] font-bold">{CURRICULUM_INFO.contentStandard}</span>
          </div>
          <div className="bold-box bg-[#FAF7F2] p-3.5 rounded-xl border-2 border-black">
            <span className="bg-[#9C7A5B] text-[#FFFDF0] px-2 py-0.5 rounded border border-black font-black block mb-1 uppercase w-fit">
              Standard Pembelajaran:
            </span>
            <ul className="text-[#3E2723] space-y-0.5 list-disc list-inside font-bold">
              <li>3.2.1: Menyatakan pengertian kitab.</li>
              <li>3.2.2: Membaca dalil naqli kewajipan beriman.</li>
            </ul>
          </div>
          <div className="bold-box bg-[#FAF7F2] p-3.5 rounded-xl border-2 border-black">
            <span className="bg-[#9C7A5B] text-[#FFFDF0] px-2 py-0.5 rounded border border-black font-black block mb-1 uppercase w-fit">
              3 Objektif Pembelajaran:
            </span>
            <span className="text-[#3E2723] font-bold">Pengertian tepat, bacaan dalil lancar, &amp; amalan kepentingan harian.</span>
          </div>
        </div>
      </div>

      {/* Instructional Design Recommendations Box */}
      <div className="bold-box bg-[#FFFDF0] rounded-3xl p-6 mb-8 text-[#3E2723] border-2.5 border-black">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#9C7A5B] text-[#FFFDF0] flex items-center justify-center shrink-0 border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            <Lightbulb className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div className="space-y-3 flex-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-black text-lg text-[#3E2723] uppercase tracking-tight flex items-center gap-2">
                <span>⚡ PANDUAN REKA BENTUK GOOGLE SITES</span>
              </h3>
              <span className="text-xs bg-[#9C7A5B] border-2 border-black text-[#FFFDF0] font-black px-3 py-1 rounded-md uppercase shadow-[1.5px_1.5px_0px_0px_#000]">
                KOTAK CREAM • KOTAK KECIK COKLAT PASTEL • LINE HITAM
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 pt-1 text-xs">
              <div className="bold-box bg-[#FAF7F2] p-3.5 rounded-xl border-2 border-black">
                <div className="flex items-center gap-1.5 font-black text-[#3E2723] mb-1 uppercase">
                  <span>Kotak Cream (#FFFDF0):</span>
                </div>
                <p className="text-[#3E2723]/90 font-bold leading-relaxed">
                  Latar belakang kad utama, bersih, cerah dan tidak memenatkan mata murid.
                </p>
              </div>

              <div className="bold-box bg-[#FAF7F2] p-3.5 rounded-xl border-2 border-black">
                <div className="flex items-center gap-1.5 font-black text-[#3E2723] mb-1 uppercase">
                  <span>Kotak Kecik (#9C7A5B):</span>
                </div>
                <p className="text-[#3E2723]/90 font-bold leading-relaxed">
                  Kotak kecil, lencana, butang, dan tag tajuk dengan teks warna cream (#FFFDF0).
                </p>
              </div>

              <div className="bold-box bg-[#FAF7F2] p-3.5 rounded-xl border-2 border-black">
                <div className="flex items-center gap-1.5 font-black text-[#3E2723] mb-1 uppercase">
                  <span>Garisan Hitam (#000000):</span>
                </div>
                <p className="text-[#3E2723]/90 font-bold leading-relaxed">
                  Bingkai solid hitam 2px-2.5px dengan bayang offset hitam untuk struktur kemas.
                </p>
              </div>

              <div className="bold-box bg-[#FAF7F2] p-3.5 rounded-xl border-2 border-black">
                <div className="flex items-center gap-1.5 font-black text-[#3E2723] mb-1 uppercase">
                  <span>Teks Coklat Gelap (#3E2723):</span>
                </div>
                <p className="text-[#3E2723]/90 font-bold leading-relaxed">
                  Kontras tinggi dan sangat tajam pada kotak cream, mudah dibaca murid Tahun 3.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs by Page & View Style Switcher */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6 border-b-2.5 border-black pb-4">
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          <button
            onClick={() => setSelectedTab('all')}
            className={`bold-btn px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer border-2 border-black ${
              selectedTab === 'all'
                ? 'bg-[#9C7A5B] text-[#FFFDF0] scale-102 ring-2 ring-black shadow-[2px_2px_0px_0px_#000]'
                : 'bg-[#FFFDF0] text-[#3E2723] hover:bg-[#FAF7F2]'
            }`}
          >
            Semua Halaman (1-5)
          </button>
          {PAGES_DATA.map((p) => (
            <button
              key={p.id}
              onClick={() => setSelectedTab(p.id)}
              className={`bold-btn px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer whitespace-nowrap border-2 border-black ${
                selectedTab === p.id
                  ? 'bg-[#9C7A5B] text-[#FFFDF0] scale-102 ring-2 ring-black shadow-[2px_2px_0px_0px_#000]'
                  : 'bg-[#FFFDF0] text-[#3E2723] hover:bg-[#FAF7F2]'
              }`}
            >
              Halaman {p.pageNumber}
            </button>
          ))}
        </div>

        {/* View Style Switcher (Cards vs Full Raw) */}
        <div className="bold-box bg-[#FFFDF0] p-1.5 rounded-2xl flex items-center text-xs border-2 border-black">
          <button
            onClick={() => setViewStyle('cards')}
            className={`bold-btn flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-black uppercase cursor-pointer border-2 border-black ${
              viewStyle === 'cards'
                ? 'bg-[#9C7A5B] text-[#FFFDF0] shadow-[1.5px_1.5px_0px_0px_#000]'
                : 'bg-transparent text-[#3E2723] border-transparent shadow-none hover:bg-[#FAF7F2]'
            }`}
          >
            <LayoutGrid className="w-4 h-4 stroke-[2.5]" />
            <span>Format Kotak Blok</span>
          </button>
          <button
            onClick={() => setViewStyle('raw')}
            className={`bold-btn flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-black uppercase cursor-pointer border-2 border-black ${
              viewStyle === 'raw'
                ? 'bg-[#9C7A5B] text-[#FFFDF0] shadow-[1.5px_1.5px_0px_0px_#000]'
                : 'bg-transparent text-[#3E2723] border-transparent shadow-none hover:bg-[#FAF7F2]'
            }`}
          >
            <FileCode className="w-4 h-4 stroke-[2.5]" />
            <span>Teks Penuh (Raw)</span>
          </button>
        </div>
      </div>

      {/* Pages Content */}
      <div className="space-y-10">
        {activePages.map((page) => (
          <div
            key={page.id}
            className="bold-box bg-[#FFFDF0] rounded-3xl overflow-hidden border-2.5 border-black"
          >
            {/* Page Header */}
            <div className="bg-[#FAF7F2] p-5 sm:p-6 border-b-2.5 border-black flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="bg-[#9C7A5B] text-[#FFFDF0] text-xs font-black px-3 py-1 rounded-md uppercase border border-black shadow-[1.5px_1.5px_0px_0px_#000]">
                    Halaman {page.pageNumber} Google Sites
                  </span>
                  <span className="text-xs text-[#3E2723] font-black uppercase bg-[#FFFDF0] px-2 py-0.5 rounded border border-black">
                    Anggaran: {page.teacherGuide.estimatedTime}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#3E2723] uppercase">{page.title}</h2>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  onClick={() => onSwitchToStudentView(page.id)}
                  className="bold-btn flex items-center gap-1.5 bg-[#FFFDF0] hover:bg-[#FAF7F2] text-[#3E2723] px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer border-2 border-black shadow-[2px_2px_0px_0px_#000]"
                  title="Lihat rupa paparan ini dalam mod murid"
                >
                  <ExternalLink className="w-4 h-4 stroke-[2.5]" />
                  <span>Uji Murid</span>
                </button>
                <button
                  onClick={() => handleCopy(page.rawCopyText, `Halaman ${page.pageNumber}: ${page.title}`)}
                  className="bold-btn flex items-center gap-1.5 bg-[#9C7A5B] hover:brightness-110 text-[#FFFDF0] px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer shadow-[2px_2px_0px_0px_#000] border-2 border-black"
                >
                  <Copy className="w-4 h-4 stroke-[2.5]" />
                  <span>Salin Semua Halaman</span>
                </button>
              </div>
            </div>

            {/* Teacher Tips for Google Sites */}
            <div className="p-5 bg-[#FFFDF0] border-b-2.5 border-black grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-bold text-[#3E2723]">
              <div className="bold-box bg-[#FAF7F2] p-3.5 rounded-xl border-2 border-black">
                <span className="font-black text-[#3E2723] flex items-center gap-1.5 uppercase mb-1">
                  <Layers className="w-4 h-4 text-[#9C7A5B] stroke-[2.5]" />
                  <span>TATA LETAK GOOGLE SITES:</span>
                </span>
                <p className="text-[#3E2723]/90">{page.teacherGuide.googleSiteLayout}</p>
              </div>
              <div className="bold-box bg-[#FAF7F2] p-3.5 rounded-xl border-2 border-black">
                <span className="font-black text-[#3E2723] flex items-center gap-1.5 uppercase mb-1">
                  <Lightbulb className="w-4 h-4 text-[#9C7A5B] stroke-[2.5]" />
                  <span>CADANGAN IMEJ / GRAFIK:</span>
                </span>
                <p className="text-[#3E2723]/90">{page.teacherGuide.visualIdeas}</p>
              </div>
              <div className="bold-box bg-[#FAF7F2] p-3.5 rounded-xl border-2 border-black">
                <span className="font-black text-[#3E2723] flex items-center gap-1.5 uppercase mb-1">
                  <BookOpen className="w-4 h-4 text-[#9C7A5B] stroke-[2.5]" />
                  <span>KOMPONEN WIDGET:</span>
                </span>
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {page.teacherGuide.suggestedWidgets.map((w, idx) => (
                    <span key={idx} className="bg-[#9C7A5B] border border-black px-2 py-0.5 rounded text-[11px] font-black text-[#FFFDF0] uppercase">
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* VIEW STYLE: CARDS (BLOCK DEMI BLOK) */}
            {viewStyle === 'cards' ? (
              <div className="p-6 space-y-6">
                <div className="text-xs text-[#3E2723] font-black uppercase flex items-center gap-2 mb-2 bg-[#FAF7F2] p-3 rounded-xl border-2 border-black">
                  <Info className="w-4 h-4 text-[#9C7A5B] stroke-[3]" />
                  <span>
                    SETIAP KAD MEWAKILI 1 BLOK GOOGLE SITES. KLIK "SALIN BLOK INI" DAN TAMPAL SECARA BERURUTAN:
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-5">
                  {page.sections.map((sec) => (
                    <div
                      key={sec.id}
                      className="bold-box bg-[#FAF7F2] p-5 rounded-2xl border-2 border-black"
                    >
                      {/* Card Block Title */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 border-b-2 border-black pb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{sec.emoji}</span>
                          <div>
                            <span className="text-[10px] uppercase font-black tracking-wider text-[#FFFDF0] bg-[#9C7A5B] border border-black px-2.5 py-0.5 rounded">
                              BLOK {sec.blockNumber}
                            </span>
                            <h3 className="font-black text-[#3E2723] text-base mt-1 uppercase">
                              {sec.blockName}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-[11px] bg-[#FFFDF0] border-2 border-black text-[#3E2723] font-black px-2.5 py-1 rounded-md uppercase">
                            🛠️ {sec.googleSitesTool}
                          </span>
                          <button
                            onClick={() => handleCopy(sec.content, sec.blockName)}
                            className="bold-btn bg-[#9C7A5B] hover:brightness-110 text-[#FFFDF0] font-black px-3.5 py-1.5 rounded-xl text-xs flex items-center gap-1.5 cursor-pointer uppercase shadow-[2px_2px_0px_0px_#000] shrink-0 border-2 border-black"
                          >
                            <Copy className="w-3.5 h-3.5 stroke-[2.5]" />
                            <span>Salin Blok Ini</span>
                          </button>
                        </div>
                      </div>

                      {/* Content preview */}
                      <pre className="bg-[#FFFDF0] p-4 rounded-xl border-2 border-black text-[#3E2723] text-xs sm:text-sm font-sans font-bold whitespace-pre-wrap leading-relaxed overflow-x-auto selection:bg-[#9C7A5B] selection:text-[#FFFDF0]">
                        {sec.content}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              /* VIEW STYLE: RAW PRE TEXT */
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black text-[#3E2723] uppercase tracking-wider flex items-center gap-2">
                    <Info className="w-4 h-4 text-[#3E2723]" />
                    <span>KANDUNGAN PENUH SATU HALAMAN (RAW DRAFT TEXT)</span>
                  </span>
                  <button
                    onClick={() => handleCopy(page.rawCopyText, `Halaman ${page.pageNumber}`)}
                    className="bold-btn text-xs bg-[#9C7A5B] text-[#FFFDF0] font-black px-3.5 py-1.5 rounded-xl flex items-center gap-1 cursor-pointer uppercase border-2 border-black shadow-[2px_2px_0px_0px_#000]"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Salin Teks Sahaja</span>
                  </button>
                </div>

                <div className="relative">
                  <pre className="bold-box w-full bg-[#FAF7F2] text-[#3E2723] p-5 rounded-2xl text-xs sm:text-sm font-mono font-bold overflow-x-auto leading-relaxed whitespace-pre-wrap max-h-96 selection:bg-[#9C7A5B] selection:text-[#FFFDF0] border-2 border-black">
                    {page.rawCopyText}
                  </pre>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Support Info */}
      <div className="mt-12 bg-[#FFFDF0] rounded-2xl border-2 border-black p-6 text-center text-xs text-[#3E2723] space-y-2">
        <p className="font-black text-[#3E2723]">
          Modul ini dirangka berpandukan sukatan KSSR Semakan Pendidikan Islam Kementerian Pendidikan Malaysia (KPM).
        </p>
        <p className="font-bold text-[#3E2723]/80">
          Tip Tambahan: Anda boleh memasukkan pautan aktiviti interaktif di mod pratonton murid ke dalam Google Sites menggunakan fungsi <strong>Embed &gt; By URL</strong>.
        </p>
      </div>
    </div>
  );
};
