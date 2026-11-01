import React, { useState } from 'react';
import { PAGES_DATA } from '../data/curriculumData';
import { X, Copy, Check, Download, FileText } from 'lucide-react';

interface QuickCopyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickCopyModal: React.FC<QuickCopyModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [selectedPage, setSelectedPage] = useState<number>(0); // 0 = all

  if (!isOpen) return null;

  const fullText =
    selectedPage === 0
      ? PAGES_DATA.map((p) => p.rawCopyText).join('\n\n\n')
      : PAGES_DATA[selectedPage - 1].rawCopyText;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
    const blob = new Blob([fullText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Draf_Google_Sites_${selectedPage === 0 ? 'Semua_Halaman' : `Halaman_${selectedPage}`}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bold-box-lg bg-[#FFFDF0] text-[#3E2723] rounded-3xl max-w-4xl w-full p-6 sm:p-8 relative flex flex-col max-h-[90vh] border-3 border-black">
        {/* Header */}
        <div className="flex items-center justify-between border-b-2.5 border-black pb-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#9C7A5B] border-2 border-black shadow-[2px_2px_0px_0px_#000] text-[#FFFDF0] flex items-center justify-center">
              <FileText className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-black text-[#3E2723] text-lg sm:text-xl uppercase">
                SALIN DRAF GOOGLE SITES (SIAP TAMPAL)
              </h3>
              <p className="text-xs text-[#3E2723]/80 font-bold">
                Pilih halaman atau salin kesemua 5 halaman sekali gus ke Google Sites / Docs
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="bold-btn w-9 h-9 rounded-xl bg-[#FFFDF0] hover:bg-[#FAF7F2] flex items-center justify-center text-[#3E2723] cursor-pointer border-2 border-black shadow-[1.5px_1.5px_0px_0px_#000]"
          >
            <X className="w-5 h-5 stroke-[3]" />
          </button>
        </div>

        {/* Page selector buttons */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-3 border-b-2 border-black">
          <button
            onClick={() => setSelectedPage(0)}
            className={`bold-btn px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer border-2 border-black ${
              selectedPage === 0
                ? 'bg-[#9C7A5B] text-[#FFFDF0] shadow-[2px_2px_0px_0px_#000]'
                : 'bg-[#FFFDF0] text-[#3E2723] hover:bg-[#FAF7F2]'
            }`}
          >
            Semua Halaman (1-5)
          </button>
          {PAGES_DATA.map((p) => (
            <button
              key={p.pageNumber}
              onClick={() => setSelectedPage(p.pageNumber)}
              className={`bold-btn px-3.5 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer whitespace-nowrap border-2 border-black ${
                selectedPage === p.pageNumber
                  ? 'bg-[#9C7A5B] text-[#FFFDF0] shadow-[2px_2px_0px_0px_#000]'
                  : 'bg-[#FFFDF0] text-[#3E2723] hover:bg-[#FAF7F2]'
              }`}
            >
              Halaman {p.pageNumber}
            </button>
          ))}
        </div>

        {/* Text Area */}
        <div className="flex-1 overflow-hidden relative">
          <textarea
            readOnly
            value={fullText}
            className="bold-box w-full h-full bg-[#FAF7F2] text-[#3E2723] font-mono font-bold text-xs sm:text-sm p-4 rounded-2xl resize-none focus:outline-none leading-relaxed selection:bg-[#9C7A5B] selection:text-[#FFFDF0] border-2 border-black"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 mt-4 border-t-2 border-black">
          <div className="text-xs text-[#3E2723] font-black uppercase">
            {copied ? (
              <span className="text-[#3E2723] flex items-center gap-1.5 bg-[#9C7A5B] text-[#FFFDF0] px-3 py-1 rounded-lg border border-black">
                <Check className="w-5 h-5 stroke-[3]" /> BERJAYA DISALIN KE PAPAN KERATAN!
              </span>
            ) : (
              <span>KLIK BUTANG SALIN DI SEBELAH KANAN 👉</span>
            )}
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleDownload}
              className="bold-btn px-4 py-2 rounded-xl bg-[#FFFDF0] hover:bg-[#FAF7F2] text-[#3E2723] text-xs font-black uppercase flex items-center gap-1.5 cursor-pointer border-2 border-black shadow-[2px_2px_0px_0px_#000]"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>Muat Turun .TXT</span>
            </button>
            <button
              onClick={handleCopy}
              className="bold-btn px-5 py-2 rounded-xl bg-[#9C7A5B] hover:brightness-110 text-[#FFFDF0] text-xs font-black uppercase flex items-center gap-1.5 cursor-pointer shadow-[2px_2px_0px_0px_#000] border-2 border-black"
            >
              <Copy className="w-4 h-4 stroke-[2.5]" />
              <span>{copied ? 'TELAH DISALIN!' : 'SALIN TEKS INI'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
