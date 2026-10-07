import React, { useState } from 'react';
import { Maximize2, Compass, Film } from 'lucide-react';
import { CampaignPlate } from '../types/campaign';
import { CAMPAIGN_PLATES } from '../data/campaignData';

interface CuratorialIndexProps {
  onOpenPlate: (plate: CampaignPlate) => void;
}

export const CuratorialIndex: React.FC<CuratorialIndexProps> = ({ onOpenPlate }) => {
  const [filterChapter, setFilterChapter] = useState<string>('ALL');

  const filteredPlates = filterChapter === 'ALL'
    ? CAMPAIGN_PLATES
    : CAMPAIGN_PLATES.filter((p) => p.chapter === filterChapter);

  const chapters = ['ALL', 'THE BODY', 'THE MATERIAL', 'THE SHAPE', 'THE SPACE', 'THE GESTURE'];

  return (
    <section id="curatorial-index" className="relative py-28 px-6 md:px-12 bg-[#0A0A0A] border-t border-[#2A2928]/40">
      <div className="max-w-7xl mx-auto">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12 border-b border-[#2A2928]/40 pb-6 gap-4">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[#787672] mb-1 font-mono">
              ARCHIVE & CURATORIAL REGISTER
            </div>
            <h2 className="text-4xl md:text-5xl font-editorial tracking-tight text-[#EDECE8]">
              Plates & Technical Index
            </h2>
          </div>
          <div className="text-xs tracking-[0.25em] uppercase text-[#C4C1BA] font-light max-w-sm text-left md:text-right">
            Monograph plates recorded under strict European auteur direction. Not for commercial retail; archived as architectural evidence.
          </div>
        </div>

        {/* Quiet Editorial Chapter Filter Tabs (Functional button controls conforming to Section 1A) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs tracking-[0.2em] uppercase font-mono scrollbar-none">
          {chapters.map((ch) => (
            <button
              key={ch}
              type="button"
              onClick={() => setFilterChapter(ch)}
              className={`px-3.5 py-1.5 border transition-colors whitespace-nowrap ${
                filterChapter === ch
                  ? 'border-[#EDECE8] bg-[#1C1613] text-[#EDECE8]'
                  : 'border-[#2A2928]/50 text-[#787672] hover:text-[#C4C1BA] hover:border-[#787672]'
              }`}
            >
              {ch === 'ALL' ? 'Index (All Plates)' : ch}
            </button>
          ))}
        </div>

        {/* Editorial Plates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPlates.map((plate) => (
            <article
              key={plate.id}
              onClick={() => onOpenPlate(plate)}
              className="group cursor-pointer border border-[#2A2928]/60 bg-[#121110] transition-colors hover:border-[#EDECE8]/60"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#181615]">
                <img
                  src={plate.image}
                  alt={plate.title}
                  className="w-full h-full object-cover object-center filter grayscale contrast-110 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                <div className="absolute top-3 left-3 bg-[#0A0A0A]/90 px-2.5 py-1 border border-[#2A2928] text-[10px] tracking-[0.25em] uppercase font-mono text-[#EDECE8]">
                  {plate.code}
                </div>

                <div className="absolute top-3 right-3 bg-[#0A0A0A]/90 p-1.5 border border-[#2A2928] text-[#EDECE8] opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono text-[#EDECE8]">
                  <span className="bg-[#0A0A0A]/80 px-2 py-0.5 border border-[#2A2928]">
                    CH. {plate.chapterNumber}
                  </span>
                  <span className="bg-[#0A0A0A]/80 px-2 py-0.5 border border-[#2A2928] text-[#787672]">
                    {plate.gsm}
                  </span>
                </div>
              </div>

              {/* Technical Notation Card */}
              <div className="p-5 space-y-3">
                <div className="text-[11px] tracking-[0.2em] uppercase text-[#780016] font-mono">
                  {plate.look}
                </div>

                <h3 className="text-xl font-editorial text-[#EDECE8] group-hover:text-white transition-colors">
                  {plate.title}
                </h3>

                <p className="text-xs text-[#787672] font-light leading-relaxed line-clamp-2">
                  {plate.textile}
                </p>

                <div className="pt-3 border-t border-[#2A2928]/50 flex items-center justify-between text-[10px] tracking-[0.18em] uppercase text-[#787672] font-mono">
                  <span className="flex items-center gap-1">
                    <Film className="w-3 h-3 text-[#787672]" />
                    <span>{plate.photographer.split(' ')[0]}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Compass className="w-3 h-3 text-[#787672]" />
                    <span>Plate Archive</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
