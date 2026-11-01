import React, { useEffect, useState } from 'react';
import { onKidVoiceEvent, KidVoiceEventDetail } from '../utils/kidAudio';
import { Sparkles, RefreshCcw, Volume2 } from 'lucide-react';

export const KidVoiceBanner: React.FC = () => {
  const [currentEvent, setCurrentEvent] = useState<KidVoiceEventDetail | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const unsubscribe = onKidVoiceEvent((event) => {
      setCurrentEvent(event);
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3500);

      return () => clearTimeout(timer);
    });

    return unsubscribe;
  }, []);

  if (!visible || !currentEvent) return null;

  const isCorrect = currentEvent.type === 'correct';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short pointer-events-none max-w-sm sm:max-w-md">
      <div
        className={`p-4 rounded-2xl border-3 border-black shadow-[5px_5px_0px_#000] flex items-center gap-3.5 ${
          isCorrect ? 'bg-[#FFFDF0] text-[#3E2723]' : 'bg-[#FAF7F2] text-[#3E2723]'
        }`}
      >
        {/* Status Icon */}
        <div className="w-12 h-12 rounded-2xl bg-[#9C7A5B] border-2.5 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center shrink-0 text-xl relative text-[#FFFDF0]">
          <span>{isCorrect ? '🌟' : '💪'}</span>
          <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#3E2723] text-white text-[10px] flex items-center justify-center font-black border border-white">
            <Volume2 className="w-3 h-3 animate-pulse" />
          </span>
        </div>

        {/* Speech Bubble Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#9C7A5B] text-[#FFFDF0] border border-black shadow-[1px_1px_0px_#000]">
              {isCorrect ? 'TAHNIAH!' : 'SEMANGAT!'}
            </span>
            <span className="text-xs font-black uppercase text-[#9C7A5B] flex items-center gap-1">
              {isCorrect ? (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-[#9C7A5B]" />
                  <span>BERJAYA</span>
                </>
              ) : (
                <>
                  <RefreshCcw className="w-3.5 h-3.5 text-[#9C7A5B]" />
                  <span>CUBA LAGI</span>
                </>
              )}
            </span>
          </div>
          <p className="text-sm font-black leading-snug text-[#3E2723]">
            "{currentEvent.text}"
          </p>
        </div>
      </div>
    </div>
  );
};
