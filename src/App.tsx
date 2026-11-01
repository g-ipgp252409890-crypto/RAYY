import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Page1Home } from './components/pages/Page1Home';
import { Page2Pengertian } from './components/pages/Page2Pengertian';
import { Page3Dalil } from './components/pages/Page3Dalil';
import { Page4Kepentingan } from './components/pages/Page4Kepentingan';
import { Page5Refleksi } from './components/pages/Page5Refleksi';
import { PAGES_DATA } from './data/curriculumData';
import { Sparkles, BookOpen } from 'lucide-react';
import { KidVoiceBanner } from './components/KidVoiceBanner';

export default function App() {
  const [activePageId, setActivePageId] = useState<string>('halaman-1');
  const [totalScore, setTotalScore] = useState<number>(0);
  const [completedActivities, setCompletedActivities] = useState<Record<string, boolean>>({});

  const handleActivityComplete = (activityKey: string, points: number) => {
    if (!completedActivities[activityKey]) {
      setCompletedActivities((prev) => ({ ...prev, [activityKey]: true }));
      setTotalScore((prev) => prev + points);
    }
  };

  const getNextPageId = (currentId: string) => {
    const currentIndex = PAGES_DATA.findIndex((p) => p.id === currentId);
    if (currentIndex >= 0 && currentIndex < PAGES_DATA.length - 1) {
      return PAGES_DATA[currentIndex + 1].id;
    }
    return PAGES_DATA[0].id;
  };

  const handleNavigateToNext = () => {
    const nextId = getNextPageId(activePageId);
    setActivePageId(nextId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateToPage = (pageId: string) => {
    setActivePageId(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentPage = PAGES_DATA.find((p) => p.id === activePageId) || PAGES_DATA[0];

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#3E2723] flex flex-col font-sans selection:bg-[#9C7A5B] selection:text-[#FFFDF0]">
      {/* Top Navigation */}
      <Navbar
        activePageId={activePageId}
        setActivePageId={handleNavigateToPage}
        totalScore={totalScore}
        completedActivities={completedActivities}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6 sm:py-8">
        <div>
          {/* Active Unit Indicator - CREAM BOX, PASTEL BROWN ACCENTS, BLACK LINE */}
          <div className="bold-box mb-6 flex items-center justify-between bg-[#FFFDF0] px-5 py-3 rounded-2xl text-xs text-[#3E2723] border-2.5 border-black">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-[#9C7A5B] border border-black animate-pulse" />
              <span className="font-black uppercase text-[#3E2723]">
                MODUL PEMBELAJARAN:
              </span>
              <span className="bg-[#9C7A5B] text-[#FFFDF0] font-black px-2.5 py-0.5 rounded border-2 border-black uppercase shadow-[1.5px_1.5px_0px_0px_#000]">
                {currentPage.shortTitle}
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-2 font-black text-[#5D4037] text-xs">
              <span className="bg-[#FAF7F2] px-3 py-1 rounded-lg border-2 border-black">
                📖 SK 3.2 • TAHUN 3
              </span>
            </div>
          </div>

          {/* Dynamic Page Views */}
          {activePageId === 'halaman-1' && (
            <Page1Home
              onNavigateToNext={handleNavigateToNext}
              onNavigateToPage={handleNavigateToPage}
            />
          )}
          {activePageId === 'halaman-2' && (
            <Page2Pengertian
              onNavigateToNext={handleNavigateToNext}
              onActivityComplete={handleActivityComplete}
            />
          )}
          {activePageId === 'halaman-3' && (
            <Page3Dalil
              onNavigateToNext={handleNavigateToNext}
              onActivityComplete={handleActivityComplete}
            />
          )}
          {activePageId === 'halaman-4' && (
            <Page4Kepentingan
              onNavigateToNext={handleNavigateToNext}
              onActivityComplete={handleActivityComplete}
            />
          )}
          {activePageId === 'halaman-5' && (
            <Page5Refleksi
              totalScore={totalScore}
              onActivityComplete={handleActivityComplete}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#FFFDF0] border-t-3 border-black mt-16 py-8 no-print">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3E2723] text-center sm:text-left">
          <div>
            <p className="font-black text-[#3E2723] uppercase">
              Modul Pembelajaran Interaktif Pendidikan Islam Tahun 3
            </p>
            <p className="font-bold text-[#5D4037]">
              Standard Kandungan 3.2: Beriman Kepada Kitab Allah • Panduan Hidup Beradab dan Istiqomah
            </p>
          </div>
          <div className="flex items-center gap-2 font-black text-xs text-[#3E2723]">
            <span className="bg-[#9C7A5B] text-[#FFFDF0] px-3 py-1.5 rounded-lg border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000] uppercase tracking-wider">
              ⭐ TAHUN 3 AKIDAH
            </span>
          </div>
        </div>
      </footer>

      {/* Floating Kid Voice Toast (Alif & Sofia) */}
      <KidVoiceBanner />
    </div>
  );
}
