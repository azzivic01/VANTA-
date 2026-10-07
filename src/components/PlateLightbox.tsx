import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Copy, Check } from 'lucide-react';
import { CampaignPlate } from '../types/campaign';
import { CAMPAIGN_PLATES } from '../data/campaignData';

interface PlateLightboxProps {
  plate: CampaignPlate | null;
  onClose: () => void;
  onSelectPlate: (plate: CampaignPlate) => void;
}

export const PlateLightbox: React.FC<PlateLightboxProps> = ({ plate, onClose, onSelectPlate }) => {
  const [copied, setCopied] = React.useState(false);

  const handleNext = useCallback(() => {
    if (!plate) return;
    const currentIndex = CAMPAIGN_PLATES.findIndex((p) => p.id === plate.id);
    const nextIndex = (currentIndex + 1) % CAMPAIGN_PLATES.length;
    onSelectPlate(CAMPAIGN_PLATES[nextIndex]);
  }, [plate, onSelectPlate]);

  const handlePrev = useCallback(() => {
    if (!plate) return;
    const currentIndex = CAMPAIGN_PLATES.findIndex((p) => p.id === plate.id);
    const prevIndex = (currentIndex - 1 + CAMPAIGN_PLATES.length) % CAMPAIGN_PLATES.length;
    onSelectPlate(CAMPAIGN_PLATES[prevIndex]);
  }, [plate, onSelectPlate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, handleNext, handlePrev]);

  if (!plate) return null;

  const handleCopyCitation = () => {
    const citation = `VANTA / CAMPAIGN 01 · ${plate.code} · ${plate.look} · ${plate.textile} · ${plate.architecturalContext} · Photo: ${plate.photographer}`;
    navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Plate ${plate.code} - ${plate.title}`}
      className="fixed inset-0 z-50 bg-[#070606]/95 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 overflow-y-auto"
    >
      {/* Top Bar with Plate Info and Close Button */}
      <div className="flex items-center justify-between border-b border-[#2A2928]/60 pb-4 text-xs tracking-[0.25em] uppercase font-mono text-[#787672]">
        <div className="flex items-center gap-3">
          <span className="text-[#EDECE8] font-bold">VANTA MONOGRAPH</span>
          <span>·</span>
          <span>{plate.code}</span>
          <span>·</span>
          <span>CH. {plate.chapterNumber} {plate.chapter}</span>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleCopyCitation}
            className="flex items-center gap-1.5 text-[#C4C1BA] hover:text-white transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="text-[11px]">{copied ? 'Citation Copied' : 'Copy Citation'}</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-[#EDECE8] hover:text-white border border-[#2A2928] hover:border-[#EDECE8] transition-colors"
            aria-label="Close plate inspection"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Exhibition Center */}
      <div className="relative my-auto py-6 flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl mx-auto w-full">
        {/* Navigation Arrow Previous */}
        <button
          type="button"
          onClick={handlePrev}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-[#0A0A0A]/80 border border-[#2A2928] text-[#EDECE8] hover:text-white hover:border-[#EDECE8] transition-colors"
          aria-label="Previous plate"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The High-Resolution Master Plate */}
        <div className="relative max-h-[75vh] max-w-3xl w-full flex items-center justify-center bg-[#141211] border border-[#2A2928]">
          <img
            src={plate.image}
            alt={plate.title}
            className="max-h-[72vh] w-auto max-w-full object-contain filter contrast-110"
          />
        </div>

        {/* Technical Curatorial Dossier Sidebar */}
        <div className="max-w-md w-full space-y-6 text-left">
          <div className="border-l-2 border-[#780016] pl-4">
            <div className="text-[11px] tracking-[0.25em] uppercase text-[#780016] font-mono mb-1">
              {plate.look}
            </div>
            <h3 className="text-3xl font-editorial text-[#EDECE8]">
              {plate.title}
            </h3>
          </div>

          <div className="space-y-3 text-xs tracking-[0.16em] uppercase border-y border-[#2A2928]/50 py-4 font-mono">
            <div className="flex justify-between py-1">
              <span className="text-[#787672]">Textile Weave</span>
              <span className="text-[#EDECE8] text-right font-normal max-w-[220px]">{plate.textile}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[#787672]">Density / Weight</span>
              <span className="text-[#EDECE8]">{plate.gsm}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[#787672]">Architectural Set</span>
              <span className="text-[#EDECE8] text-right font-normal max-w-[220px]">{plate.architecturalContext}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[#787672]">Cinematographer</span>
              <span className="text-[#EDECE8]">{plate.photographer}</span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-[#787672]">Costume Architecture</span>
              <span className="text-[#EDECE8]">{plate.stylist}</span>
            </div>
          </div>

          <p className="text-xs text-[#A8A6A1] leading-relaxed font-light italic bg-[#100E0D] p-4 border border-[#2A2928]/40">
            "{plate.curatorNote}"
          </p>

          <div className="flex items-center gap-3 pt-2">
            <button
              type="button"
              onClick={handlePrev}
              className="md:hidden flex-1 py-2 border border-[#2A2928] text-xs uppercase tracking-widest text-[#EDECE8]"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="md:hidden flex-1 py-2 border border-[#2A2928] text-xs uppercase tracking-widest text-[#EDECE8]"
            >
              Next
            </button>
          </div>
        </div>

        {/* Navigation Arrow Next */}
        <button
          type="button"
          onClick={handleNext}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3 bg-[#0A0A0A]/80 border border-[#2A2928] text-[#EDECE8] hover:text-white hover:border-[#EDECE8] transition-colors"
          aria-label="Next plate"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Lightbox Footer */}
      <div className="flex items-center justify-between border-t border-[#2A2928]/60 pt-4 text-[10px] tracking-[0.25em] uppercase font-mono text-[#787672]">
        <span>USE LEFT / RIGHT ARROWS TO NAVIGATE · ESC TO CLOSE</span>
        <span>VANTA ARCHIVE · PARIS / SÃO PAULO</span>
      </div>
    </div>
  );
};
