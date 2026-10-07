import React, { useState } from 'react';
import { Maximize2, Layers } from 'lucide-react';
import { CampaignPlate } from '../types/campaign';
import { MATERIAL_SPECS } from '../data/campaignData';

interface ChapterMaterialProps {
  plate: CampaignPlate;
  onOpenPlate: (plate: CampaignPlate) => void;
}

export const ChapterMaterial: React.FC<ChapterMaterialProps> = ({ plate, onOpenPlate }) => {
  const [selectedSpecIndex, setSelectedSpecIndex] = useState(0);
  const activeSpec = MATERIAL_SPECS[selectedSpecIndex];

  return (
    <section id="the-material" className="relative py-28 px-6 md:px-12 bg-[#0D0C0B] border-t border-[#2A2928]/40">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 border-b border-[#2A2928]/40 pb-6 gap-4">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[#787672] mb-1 font-mono">
              CHAPTER 02 / MACRO TECTONICS
            </div>
            <h2 className="text-4xl md:text-6xl font-editorial tracking-tight text-[#EDECE8]">
              The Material as Geological Mass
            </h2>
          </div>
          <div className="text-xs tracking-[0.25em] uppercase text-[#C4C1BA] font-light max-w-xs text-left md:text-right">
            Under microscopic proximity, the fabric ceases to be garment. It becomes mineral landscape.
          </div>
        </div>

        {/* Asymmetric Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Macro Photographic Frame */}
          <div className="lg:col-span-7">
            <div
              onClick={() => onOpenPlate(plate)}
              className="relative w-full aspect-[4/3] overflow-hidden bg-[#181615] border border-[#2A2928] group cursor-pointer"
            >
              <img
                src={plate.image}
                alt={plate.title}
                className="w-full h-full object-cover object-center filter contrast-120 group-hover:scale-[1.03] transition-transform duration-1000 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent opacity-40" />

              <div className="absolute top-4 left-4 bg-[#0A0A0A]/90 backdrop-blur-sm px-3 py-1.5 border border-[#2A2928] text-[10px] tracking-[0.25em] uppercase text-[#EDECE8] font-mono">
                MACRO FIELD 1:1 · HIGH-TWIST FIBER & TRAVERTINE
              </div>

              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-[#0A0A0A]/90 backdrop-blur-sm px-3 py-1.5 border border-[#2A2928] text-[10px] tracking-[0.25em] uppercase text-[#EDECE8]">
                <span>Inspect Weave</span>
                <Maximize2 className="w-3 h-3 text-[#C4C1BA]" />
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-[#787672]">
              <span>Raking 45° Tungsten Ray</span>
              <span>Density: {plate.gsm}</span>
            </div>
          </div>

          {/* Right Column: Interactive Material Physics Dossier */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border-l border-[#2A2928] pl-6">
              <div className="text-[11px] tracking-[0.25em] uppercase text-[#787672] font-mono mb-2">
                MATERIAL DOSSIER
              </div>
              <h3 className="text-2xl font-editorial text-[#EDECE8] mb-3">
                Weight, Tensility & Surface Behavior
              </h3>
              <p className="text-sm text-[#A8A6A1] leading-relaxed font-light">
                {plate.curatorNote}
              </p>
            </div>

            {/* Interactive Material Specimen Selector */}
            <div className="bg-[#141211] p-6 border border-[#2A2928]/60 space-y-6">
              <div className="flex items-center justify-between text-xs tracking-[0.25em] uppercase text-[#C4C1BA] border-b border-[#2A2928] pb-3 font-mono">
                <span className="flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#780016]" />
                  <span>Specimen Library</span>
                </span>
                <span>{selectedSpecIndex + 1} of {MATERIAL_SPECS.length}</span>
              </div>

              {/* Specimen Tabs */}
              <div className="grid grid-cols-2 gap-2">
                {MATERIAL_SPECS.map((spec, idx) => (
                  <button
                    key={spec.name}
                    type="button"
                    onClick={() => setSelectedSpecIndex(idx)}
                    className={`p-3 text-left border transition-all text-xs tracking-[0.15em] uppercase ${
                      selectedSpecIndex === idx
                        ? 'border-[#EDECE8] bg-[#1F1D1B] text-[#EDECE8]'
                        : 'border-[#2A2928]/60 bg-[#12100F] text-[#787672] hover:text-[#C4C1BA] hover:border-[#787672]'
                    }`}
                  >
                    <div className="font-semibold truncate">{spec.name}</div>
                    <div className="text-[10px] text-[#787672] mt-0.5 font-mono">{spec.weight}</div>
                  </button>
                ))}
              </div>

              {/* Active Specimen Attributes */}
              <div className="space-y-3 pt-2 text-xs tracking-[0.16em] uppercase">
                <div className="flex justify-between py-1 border-b border-[#2A2928]/40">
                  <span className="text-[#787672]">Provenance</span>
                  <span className="text-[#EDECE8] font-medium">{activeSpec.origin}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#2A2928]/40">
                  <span className="text-[#787672]">Composition</span>
                  <span className="text-[#EDECE8] text-right max-w-[200px] truncate">{activeSpec.composition}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#2A2928]/40">
                  <span className="text-[#787672]">Gravity Behavior</span>
                  <span className="text-[#EDECE8]">{activeSpec.behavior.slice(0, 26)}...</span>
                </div>
              </div>

              <div className="p-3 bg-[#0A0A0A] border-l-2 border-[#780016] text-xs text-[#A8A6A1] leading-relaxed italic">
                "{activeSpec.tactileDescription}"
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
