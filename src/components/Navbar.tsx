import React from 'react';
import { BookOpen, Award, CheckCircle, Sparkles, BookText } from 'lucide-react';

interface NavbarProps {
  activePageId: string;
  setActivePageId: (id: string) => void;
  totalScore: number;
  completedActivities: Record<string, boolean>;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePageId,
  setActivePageId,
  totalScore,
  completedActivities,
}) => {
  const pages = [
    { id: 'halaman-1', label: '1. Utama', icon: Sparkles },
    { id: 'halaman-2', label: '2. Pengertian & 4 Kitab', icon: BookOpen },
    { id: 'halaman-3', label: '3. Dalil Naqli', icon: BookText },
    { id: 'halaman-4', label: '4. Kepentingan & Kuiz', icon: Award },
    { id: 'halaman-5', label: '5. Refleksi & Penutup', icon: CheckCircle },
  ];

  const completedCount = Object.values(completedActivities).filter(Boolean).length;

  return (
    <header className="sticky top-0 z-40 bg-[#FFFDF0] border-b-3 border-black no-print">
      {/* Top Banner Notice - PASTEL BROWN & CREAM */}
      <div className="bg-[#9C7A5B] text-[#FFFDF0] border-b-2 border-black text-xs px-4 py-2 flex flex-wrap items-center justify-between gap-2 font-bold">
        <div className="flex items-center gap-2">
          <span className="bg-[#FFFDF0] text-[#3E2723] font-black px-2.5 py-0.5 rounded text-[11px] uppercase tracking-wider border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000]">
            ⚡ DSKP TAHUN 3
          </span>
          <span className="text-[#FFFDF0] font-extrabold hidden sm:inline">
            Pendidikan Islam (Akidah) • SK 3.2: Beriman Kepada Kitab Panduan Hidup
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-[#3E2723] font-black bg-[#FFFDF0] px-3 py-1 rounded-lg border-2 border-black shadow-[2px_2px_0px_0px_#000]">
            <span>⭐ SKOR:</span>
            <span className="text-[#9C7A5B] font-black text-sm">{totalScore} PTS</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-18 gap-3">
        {/* Brand / Logo */}
        <div
          onClick={() => setActivePageId('halaman-1')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="w-11 h-11 rounded-xl bg-[#9C7A5B] text-[#FFFDF0] flex items-center justify-center border-2.5 border-black shadow-[3px_3px_0px_0px_#000] transition group-hover:scale-105">
            <BookOpen className="w-6 h-6 stroke-[2.5]" />
          </div>
          <div>
            <div className="font-black text-[#3E2723] text-base sm:text-lg leading-tight tracking-tight flex items-center gap-2 uppercase">
              <span>BERIMAN KEPADA KITAB</span>
              <span className="text-[11px] bg-[#9C7A5B] text-[#FFFDF0] px-2 py-0.5 rounded-md font-black border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000]">
                TAHUN 3
              </span>
            </div>
            <p className="text-xs text-[#5D4037] font-black tracking-wide uppercase hidden sm:block">
              ⚡ MODUL PEMBELAJARAN INTERAKTIF
            </p>
          </div>
        </div>

        {/* Navigation Tabs (CREAM & PASTEL BROWN) */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1.5 rounded-2xl bg-[#FAF7F2] border-2.5 border-black shadow-[3px_3px_0px_0px_#000]">
          {pages.map((p) => {
            const isActive = activePageId === p.id;
            const isDone = completedActivities[p.id];
            return (
              <button
                key={p.id}
                onClick={() => setActivePageId(p.id)}
                className={`relative px-3.5 py-2 rounded-xl text-xs font-black transition flex items-center gap-1.5 cursor-pointer border-2 ${
                  isActive
                    ? 'bg-[#9C7A5B] text-[#FFFDF0] border-black shadow-[2px_2px_0px_0px_#000] scale-102'
                    : 'bg-[#FFFDF0] text-[#3E2723] border-transparent hover:border-black hover:bg-[#F5EFE6]'
                }`}
              >
                <span>{p.label}</span>
                {isDone && (
                  <span className="w-2 h-2 rounded-full bg-[#3E2723] border border-[#FFFDF0] inline-block" title="Selesai" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Mobile Page Navigator */}
      <div className="lg:hidden flex items-center justify-between px-3 py-2 bg-[#FAF7F2] border-t-2 border-black overflow-x-auto gap-2">
        {pages.map((p) => {
          const isActive = activePageId === p.id;
          return (
            <button
              key={p.id}
              onClick={() => setActivePageId(p.id)}
              className={`px-3 py-1.5 rounded-xl text-xs whitespace-nowrap font-black shrink-0 cursor-pointer border-2 border-black ${
                isActive
                  ? 'bg-[#9C7A5B] text-[#FFFDF0] shadow-[2px_2px_0px_0px_#000]'
                  : 'bg-[#FFFDF0] text-[#3E2723] hover:bg-[#F5EFE6]'
              }`}
            >
              {p.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
