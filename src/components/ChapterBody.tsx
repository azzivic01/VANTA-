import React, { useState } from 'react';
import { Maximize2, Compass } from 'lucide-react';
import { CampaignPlate } from '../types/campaign';

interface ChapterBodyProps {
  plate: CampaignPlate;
  onOpenPlate: (plate: CampaignPlate) => void;
}

export const ChapterBody: React.FC<ChapterBodyProps> = ({ plate, onOpenPlate }) => {
  const [showDraftingGrid, setShowDraftingGrid] = useState(false);

  return (
    <section id="the-body" className="relative py-28 px-6 md:px-12 bg-[#0A0A0A] border-t border-[#2A2928]/40">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header Anchor */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 border-b border-[#2A2928]/40 pb-6 gap-4">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[#787672] mb-1 font-mono">
              CHAPTER 01 / FORM STUDY
            </div>
            <h2 className="text-4xl md:text-6xl font-editorial tracking-tight text-[#EDECE8]">
              The Body as Primary Architecture
            </h2>
          </div>
          <div className="text-xs tracking-[0.25em] uppercase text-[#C4C1BA] font-light max-w-xs text-left md:text-right">
            Before the pillar or the cantilever, the skeleton erected the first interior volume.
          </div>
        </div>

        {/* Asymmetrical Grid Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Visual Column */}
          <div className="lg:col-span-8 relative">
            <div
              onClick={() => onOpenPlate(plate)}
              className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-[#151413] border border-[#2A2928] group cursor-pointer"
            >
              <img
                src={plate.image}
                alt={plate.title}
                className="w-full h-full object-cover object-top filter grayscale contrast-115 brightness-95 group-hover:scale-[1.01] transition-transform duration-700 ease-out"
              />

              {/* Interactive Architectural Drafting Lines Overlay */}
              {showDraftingGrid && (
                <div className="absolute inset-0 pointer-events-none z-20 bg-[#0A0A0A]/40 backdrop-blur-[1px] transition-all">
                  <svg className="w-full h-full stroke-[#EDECE8]/60" xmlns="http://www.w3.org/2000/svg">
                    <line x1="15%" y1="0%" x2="15%" y2="100%" strokeDasharray="3 3" strokeWidth="0.75" />
                    <line x1="50%" y1="0%" x2="50%" y2="100%" strokeWidth="1" stroke="#780016" />
                    <line x1="85%" y1="0%" x2="85%" y2="100%" strokeDasharray="3 3" strokeWidth="0.75" />
                    <line x1="0%" y1="35%" x2="100%" y2="35%" strokeWidth="0.75" strokeDasharray="4 4" />
                    <line x1="0%" y1="65%" x2="100%" y2="65%" strokeWidth="0.75" strokeDasharray="4 4" />
                    <circle cx="50%" cy="35%" r="18" fill="none" stroke="#EDECE8" strokeWidth="0.75" />
                    <text x="52%" y="33%" fill="#EDECE8" fontSize="10" fontFamily="monospace" letterSpacing="0.2em">
                      AXIS: CERVICAL 0.00
                    </text>
                    <text x="52%" y="67%" fill="#787672" fontSize="10" fontFamily="monospace" letterSpacing="0.2em">
                      GROUND GRAVITY MOMENT
                    </text>
                  </svg>
                </div>
              )}

              {/* Bottom Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-50" />

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-[#EDECE8] z-20">
                <span className="bg-[#0A0A0A]/85 px-3 py-1 border border-[#2A2928] font-mono">
                  {plate.code} · {plate.look}
                </span>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenPlate(plate);
                  }}
                  className="bg-[#0A0A0A]/85 p-1.5 border border-[#2A2928] hover:text-white"
                  aria-label="Enlarge plate"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Drafting Line Interactive Toggle */}
            <div className="mt-4 flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#787672]">
              <button
                type="button"
                onClick={() => setShowDraftingGrid(!showDraftingGrid)}
                className={`flex items-center gap-2 px-3 py-1.5 border transition-colors ${
                  showDraftingGrid
                    ? 'border-[#EDECE8] text-[#EDECE8] bg-[#1C1613]'
                    : 'border-[#2A2928] text-[#787672] hover:text-[#EDECE8]'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>{showDraftingGrid ? 'Hide Drafting Vectors' : 'Overlay Architectural Axis'}</span>
              </button>

              <span className="hidden sm:inline">Analogue 35mm · Monolithic Scale</span>
            </div>
          </div>

          {/* Editorial Analysis Column */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="border-l border-[#2A2928] pl-6 space-y-4">
              <div className="text-[11px] tracking-[0.25em] uppercase text-[#787672] font-mono">
                STRUCTURAL SPECIFICATION
              </div>
              <h3 className="text-2xl font-editorial text-[#EDECE8] italic">
                The Silhouette as Concrete Monolith
              </h3>
              <p className="text-sm text-[#A8A6A1] leading-relaxed font-light">
                {plate.curatorNote}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#2A2928]/40 text-xs tracking-[0.18em] uppercase">
              <div className="flex justify-between py-1 border-b border-[#2A2928]/30">
                <span className="text-[#787672]">Materiality</span>
                <span className="text-[#EDECE8] text-right font-light max-w-[200px]">Melton Wool 780 GSM</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#2A2928]/30">
                <span className="text-[#787672]">Structural Rigidity</span>
                <span className="text-[#EDECE8]">Internal Horsehair Canvas</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#2A2928]/30">
                <span className="text-[#787672]">Spatial Acoustic</span>
                <span className="text-[#EDECE8]">Acellular Light Absorption</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#787672]">Auteur Protocol</span>
                <span className="text-[#EDECE8]">Zero Commercial Posing</span>
              </div>
            </div>

            <blockquote className="text-sm font-editorial italic text-[#C4C1BA] border-l-2 border-[#780016] pl-4 py-1">
              "The model does not sell the coat. The model inhabits the monolith."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
