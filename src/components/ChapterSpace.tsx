import React, { useState } from 'react';
import { Maximize2, Grid, Eye } from 'lucide-react';
import { CampaignPlate } from '../types/campaign';

interface ChapterSpaceProps {
  plate: CampaignPlate;
  onOpenPlate: (plate: CampaignPlate) => void;
}

export const ChapterSpace: React.FC<ChapterSpaceProps> = ({ plate, onOpenPlate }) => {
  const [showArchitectureGrid, setShowArchitectureGrid] = useState(false);

  return (
    <section id="the-space" className="relative py-28 px-6 md:px-12 bg-[#0A0A0A] border-t border-[#2A2928]/40">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 border-b border-[#2A2928]/40 pb-6 gap-4">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[#780016] mb-1 font-mono font-semibold">
              CHAPTER 04 / BRUTALIST CONVERGENCE · OXBLOOD ACCENT
            </div>
            <h2 className="text-4xl md:text-6xl font-editorial tracking-tight text-[#EDECE8]">
              The Space as Co-Author
            </h2>
          </div>
          <div className="text-xs tracking-[0.25em] uppercase text-[#C4C1BA] font-light max-w-xs text-left md:text-right">
            Architecture and garment cease to be two distinct disciplines. They share the same tectonic grammar.
          </div>
        </div>

        {/* Cinematic Wide Canvas */}
        <div className="space-y-8">
          <div
            onClick={() => onOpenPlate(plate)}
            className="relative w-full aspect-[16/9] overflow-hidden bg-[#161413] border border-[#2A2928] group cursor-pointer"
          >
            <img
              src={plate.image}
              alt={plate.title}
              className="w-full h-full object-cover object-center filter contrast-110 group-hover:scale-[1.01] transition-transform duration-1000 ease-out"
            />

            {/* Architectural Geometry Overlay Grid */}
            {showArchitectureGrid && (
              <div className="absolute inset-0 pointer-events-none z-20 bg-[#0A0A0A]/40 backdrop-blur-[1px] transition-all">
                <svg className="w-full h-full stroke-[#EDECE8]/60" xmlns="http://www.w3.org/2000/svg">
                  {/* Spiral logarithmic guide */}
                  <path
                    d="M 100,500 C 300,500 500,400 650,300 C 800,200 950,220 1100,320 C 1200,400 1250,550 1150,650 C 1050,750 850,750 780,680"
                    fill="none"
                    stroke="#780016"
                    strokeWidth="1.5"
                    strokeDasharray="6 4"
                  />
                  {/* Perspective vanishing rays */}
                  <line x1="0%" y1="100%" x2="68%" y2="42%" stroke="#EDECE8" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="100%" y1="100%" x2="68%" y2="42%" stroke="#EDECE8" strokeWidth="0.5" strokeDasharray="4 4" />
                  <line x1="50%" y1="0%" x2="68%" y2="42%" stroke="#EDECE8" strokeWidth="0.5" strokeDasharray="4 4" />
                  <circle cx="68%" cy="42%" r="28" fill="none" stroke="#780016" strokeWidth="1" />
                  <text x="70%" y="40%" fill="#EDECE8" fontSize="10" fontFamily="monospace" letterSpacing="0.2em">
                    VANISHING FOCAL MOMENT
                  </text>
                  <text x="12%" y="90%" fill="#C4C1BA" fontSize="10" fontFamily="monospace" letterSpacing="0.2em">
                    1968 HELICAL TRAVERTINE REINFORCED
                  </text>
                </svg>
              </div>
            )}

            {/* Chromatic Event Badge: Oxblood Indicator */}
            <div className="absolute top-4 left-4 bg-[#0A0A0A]/90 backdrop-blur-sm px-3.5 py-1.5 border border-[#780016] text-[10px] tracking-[0.25em] uppercase text-[#EDECE8] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#780016] animate-pulse" />
              <span>THE CHROMATIC EVENT: OXBLOOD ACCENT</span>
            </div>

            {/* Inspect Button */}
            <div className="absolute top-4 right-4 bg-[#0A0A0A]/90 backdrop-blur-sm px-3 py-1.5 border border-[#2A2928] text-[10px] tracking-[0.25em] uppercase text-[#EDECE8] flex items-center gap-2">
              <span>Inspect Cinematic Frame</span>
              <Maximize2 className="w-3 h-3 text-[#C4C1BA]" />
            </div>

            {/* Bottom Meta Bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[11px] tracking-[0.2em] uppercase text-[#EDECE8] font-mono">
              <span className="bg-[#0A0A0A]/85 px-3 py-1 border border-[#2A2928]">
                {plate.look}
              </span>
              <span className="hidden md:inline bg-[#0A0A0A]/85 px-3 py-1 border border-[#2A2928] text-[#787672]">
                {plate.architecturalContext}
              </span>
            </div>
          </div>

          {/* Lower Dialogue Spread */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4">
            <div className="md:col-span-4 space-y-3">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowArchitectureGrid(!showArchitectureGrid)}
                  className={`flex items-center gap-2 px-3 py-1.5 text-xs tracking-[0.2em] uppercase border transition-colors ${
                    showArchitectureGrid
                      ? 'border-[#780016] text-[#EDECE8] bg-[#1C1613]'
                      : 'border-[#2A2928] text-[#787672] hover:text-[#EDECE8]'
                  }`}
                >
                  <Grid className="w-3.5 h-3.5" />
                  <span>{showArchitectureGrid ? 'Deactivate Perspective Grid' : 'Reveal Architectural Rays'}</span>
                </button>
              </div>
              <p className="text-xs text-[#787672] uppercase tracking-[0.2em]">
                Logarithmic Staircase Geometry · 1968 Municipal Civic Center
              </p>
            </div>

            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs tracking-[0.16em] uppercase">
              <div className="p-4 bg-[#121110] border border-[#2A2928]/60 space-y-2">
                <div className="text-[#EDECE8] font-semibold flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5 text-[#780016]" />
                  <span>The Solitary Chromatic Event</span>
                </div>
                <p className="text-[#A8A6A1] normal-case font-light text-xs leading-relaxed tracking-normal">
                  In the VANTA universe, red does not operate as decoration. It arrives with the gravity of blood through arterial concrete—a solitary human testimony inside mineral immobility.
                </p>
              </div>

              <div className="p-4 bg-[#121110] border border-[#2A2928]/60 space-y-2">
                <div className="text-[#EDECE8] font-semibold">
                  <span>Helical Travertine Cadence</span>
                </div>
                <p className="text-[#A8A6A1] normal-case font-light text-xs leading-relaxed tracking-normal">
                  The weighted hem of 410 GSM washed silk faille responds directly to the downward sweep of the steps, transforming vertical descent into an architectural performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
