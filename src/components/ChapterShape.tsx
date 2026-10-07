import React, { useState } from 'react';
import { Maximize2, Move3d } from 'lucide-react';
import { CampaignPlate } from '../types/campaign';

interface ChapterShapeProps {
  plate: CampaignPlate;
  onOpenPlate: (plate: CampaignPlate) => void;
}

const FORM_STUDIES = [
  {
    id: 'cantilever',
    title: 'The Cantilever Shoulder',
    metric: '+18cm Span',
    description: 'The shoulder yoke projects beyond anatomical boundaries, creating a suspended horizontal shelf that redirects light away from the sternum.',
  },
  {
    id: 'kinetic',
    title: 'Kinetic Pivot Momentum',
    metric: '120° Centrifugal Drag',
    description: 'During rotation, the dense cashmere hem expands outwardly like a solid wall, converting personal gait into spatial volume.',
  },
  {
    id: 'parabolic',
    title: 'Parabolic Fold Geometry',
    metric: '1:1.618 Ratio',
    description: 'Internal hidden carbon stays distribute weight evenly to the collarbone, relieving the torso from carrying the mass.',
  },
];

export const ChapterShape: React.FC<ChapterShapeProps> = ({ plate, onOpenPlate }) => {
  const [activeStudy, setActiveStudy] = useState(0);

  return (
    <section id="the-shape" className="relative py-28 px-6 md:px-12 bg-[#0A0A0A] border-t border-[#2A2928]/40">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 border-b border-[#2A2928]/40 pb-6 gap-4">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[#787672] mb-1 font-mono">
              CHAPTER 03 / VOLUMETRIC SCULPTURE
            </div>
            <h2 className="text-4xl md:text-6xl font-editorial tracking-tight text-[#EDECE8]">
              The Shape as Spatial Tension
            </h2>
          </div>
          <div className="text-xs tracking-[0.25em] uppercase text-[#C4C1BA] font-light max-w-xs text-left md:text-right">
            Not the presentation of garment, but the manifestation of form, proportion, and velocity.
          </div>
        </div>

        {/* Dynamic Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Typographic and Form Study Left Column */}
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-8">
            <div className="border-l border-[#2A2928] pl-6 space-y-4">
              <div className="text-[11px] tracking-[0.25em] uppercase text-[#787672] font-mono">
                VOLUMETRIC HYPOTHESIS
              </div>
              <h3 className="text-3xl font-editorial text-[#EDECE8]">
                Form Without Permission
              </h3>
              <p className="text-sm text-[#A8A6A1] leading-relaxed font-light">
                {plate.curatorNote}
              </p>
            </div>

            {/* Interactive Form Studies */}
            <div className="space-y-3">
              <div className="text-xs tracking-[0.25em] uppercase text-[#787672] font-mono flex items-center gap-2">
                <Move3d className="w-3.5 h-3.5 text-[#780016]" />
                <span>Form Dynamics Matrix</span>
              </div>

              <div className="space-y-2">
                {FORM_STUDIES.map((study, idx) => (
                  <button
                    key={study.id}
                    type="button"
                    onClick={() => setActiveStudy(idx)}
                    className={`w-full p-4 text-left border transition-all ${
                      activeStudy === idx
                        ? 'border-[#EDECE8] bg-[#171514] text-[#EDECE8]'
                        : 'border-[#2A2928]/60 bg-[#0E0D0C] text-[#787672] hover:text-[#C4C1BA] hover:border-[#787672]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase mb-1">
                      <span className="font-medium text-[#EDECE8]">{study.title}</span>
                      <span className="font-mono text-[#780016] text-[11px]">{study.metric}</span>
                    </div>
                    <p className="text-xs text-[#A8A6A1] font-light leading-relaxed">
                      {study.description}
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs tracking-[0.2em] uppercase text-[#787672]">
              <span>Look 07 · Ivory Felted Cashmere</span>
              <span>Medium Format 120 Analogue</span>
            </div>
          </div>

          {/* Right Column: Monumental Vertical Portrait Framing */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex justify-center">
            <div
              onClick={() => onOpenPlate(plate)}
              className="relative w-full max-w-lg aspect-[3/4] overflow-hidden bg-[#161413] border border-[#2A2928] group cursor-pointer shadow-2xl"
            >
              <img
                src={plate.image}
                alt={plate.title}
                className="w-full h-full object-cover object-top filter grayscale contrast-110 brightness-95 group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/70 via-transparent to-transparent opacity-40" />

              <div className="absolute top-4 right-4 bg-[#0A0A0A]/90 backdrop-blur-sm px-3 py-1.5 border border-[#2A2928] text-[10px] tracking-[0.25em] uppercase text-[#EDECE8] font-mono flex items-center gap-1.5">
                <span>Inspect Plate</span>
                <Maximize2 className="w-3 h-3 text-[#C4C1BA]" />
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] tracking-[0.2em] uppercase text-[#EDECE8] font-mono">
                <span className="bg-[#0A0A0A]/85 px-3 py-1 border border-[#2A2928]">
                  {plate.code} · {plate.look}
                </span>
                <span className="bg-[#0A0A0A]/85 px-2.5 py-1 border border-[#2A2928] text-[#787672]">
                  {plate.gsm}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
