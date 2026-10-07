import React, { useState } from 'react';
import { Sliders, Sparkles, RefreshCw, ZoomIn, EyeOff, Building, Layers } from 'lucide-react';
import { CAMPAIGN_PLATES } from '../data/campaignData';

const STAGES = [
  {
    id: 'corpo',
    index: 0,
    title: '01. CORPO / THE BODY',
    kicker: 'The Anatomical Vector',
    lens: 'Leica 50mm Summilux · f/1.4',
    zoom: 'scale-100',
    filter: 'grayscale contrast-110 brightness-100',
    description: 'The human spine stands as the central column. The garment conforms to the shoulder yoke and falls perpendicular to the earth.',
    overlayMode: 'silhouette',
  },
  {
    id: 'sombra',
    index: 1,
    title: '02. SOMBRA / THE SHADOW',
    kicker: 'Chiaroscuro & Facial Dissolution',
    lens: '35mm Analogue Push-Process',
    zoom: 'scale-105',
    filter: 'grayscale contrast-200 brightness-75',
    description: 'The personal identity of the model disappears. The face dissolves into the deep void; only the sharp silhouette edge remains.',
    overlayMode: 'void',
  },
  {
    id: 'tecido',
    index: 2,
    title: '03. TECIDO / THE TEXTILE',
    kicker: 'Macro Tactile Landscape',
    lens: '100mm Macro Optical Bench · 1:1',
    zoom: 'scale-135',
    filter: 'contrast-125 brightness-90',
    description: 'The camera moves into extreme proximity. The woven strands of virgin wool appear as deep tectonic fissures on stone.',
    overlayMode: 'macro',
  },
  {
    id: 'arquitetura',
    index: 3,
    title: '04. ARQUITETURA / THE SPACE',
    kicker: 'Monumental Spatial Grid',
    lens: '21mm Super-Angulon Ultra-Wide',
    zoom: 'scale-100',
    filter: 'contrast-105 brightness-95',
    description: 'The focal length widens. The brutalist concrete atrium reveals its monolithic verticality, framing the silhouette as a permanent fixture.',
    overlayMode: 'grid',
  },
  {
    id: 'continuum',
    index: 4,
    title: '05. SÍNTESE / THE CONTINUUM',
    kicker: 'The Permanent Sculpture',
    lens: 'Master Editorial Plate · Full Spectrum',
    zoom: 'scale-100',
    filter: 'contrast-115 brightness-100',
    description: 'Body, shadow, textile, and concrete achieve absolute equilibrium. The garment is architecture; the architecture is body.',
    overlayMode: 'final',
  },
];

export const TheTransformation: React.FC = () => {
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [isAutoTransforming, setIsAutoTransforming] = useState(false);

  const activeStage = STAGES[currentStageIdx];
  const heroPlate = CAMPAIGN_PLATES[0];

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAutoTransforming) {
      timer = setInterval(() => {
        setCurrentStageIdx((prev) => (prev + 1) % STAGES.length);
      }, 3200);
    }
    return () => clearInterval(timer);
  }, [isAutoTransforming]);

  return (
    <section id="transformation" className="relative py-32 px-6 md:px-12 bg-[#090808] border-t border-[#2A2928]/40">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 border-b border-[#2A2928]/40 pb-6 gap-4">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[#780016] mb-1 font-mono font-medium">
              SIGNATURE INTERACTION / THE TRANSFORMATION
            </div>
            <h2 className="text-4xl md:text-6xl font-editorial tracking-tight text-[#EDECE8]">
              Corpo → Sombra → Tecido → Arquitetura
            </h2>
          </div>
          <div className="text-xs tracking-[0.25em] uppercase text-[#C4C1BA] font-light max-w-sm text-left md:text-right">
            A fluid, uninterrupted metamorphosis where clothing, body, and space interchange without conventional cuts.
          </div>
        </div>

        {/* The Transformation Stage Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Morphing Frame */}
          <div className="lg:col-span-8 relative">
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#11100F] border border-[#2A2928]">
              {/* Dynamic Transforming Image */}
              <div
                className={`w-full h-full transition-all duration-1000 ease-in-out ${activeStage.zoom}`}
              >
                <img
                  src={heroPlate.image}
                  alt="Transformation sequence plate"
                  className={`w-full h-full object-cover object-center transition-all duration-1000 ease-in-out ${activeStage.filter}`}
                />
              </div>

              {/* Dynamic Vector Drafting / Stage Overlays */}
              {activeStage.overlayMode === 'silhouette' && (
                <div className="absolute inset-0 pointer-events-none border-[1px] border-[#EDECE8]/20 m-6 flex items-center justify-center">
                  <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-[#EDECE8]/70 bg-[#0A0A0A]/70 px-3 py-1">
                    PRIMARY ANATOMICAL SILHOUETTE
                  </div>
                </div>
              )}

              {activeStage.overlayMode === 'void' && (
                <div className="absolute inset-0 pointer-events-none bg-radial from-transparent to-[#0A0A0A]/90 transition-opacity duration-1000">
                  <div className="absolute bottom-6 left-6 text-[10px] tracking-[0.3em] uppercase font-mono text-[#780016] bg-[#0A0A0A]/80 px-3 py-1 border border-[#780016]/40">
                    FACIAL DISSOLUTION · CHIAROSCURO
                  </div>
                </div>
              )}

              {activeStage.overlayMode === 'macro' && (
                <div className="absolute inset-0 pointer-events-none bg-[#0A0A0A]/20 backdrop-blur-[0.5px]">
                  <div className="absolute top-6 left-6 text-[10px] tracking-[0.3em] uppercase font-mono text-[#EDECE8] bg-[#0A0A0A]/85 px-3 py-1 border border-[#2A2928]">
                    OPTICAL 100MM · TECTONIC WEAVE 780 GSM
                  </div>
                </div>
              )}

              {activeStage.overlayMode === 'grid' && (
                <div className="absolute inset-0 pointer-events-none">
                  <svg className="w-full h-full stroke-[#EDECE8]/40" xmlns="http://www.w3.org/2000/svg">
                    <line x1="25%" y1="0%" x2="25%" y2="100%" strokeDasharray="4 4" strokeWidth="0.75" />
                    <line x1="75%" y1="0%" x2="75%" y2="100%" strokeDasharray="4 4" strokeWidth="0.75" />
                    <line x1="0%" y1="50%" x2="100%" y2="50%" strokeDasharray="4 4" strokeWidth="0.75" />
                  </svg>
                  <div className="absolute top-6 right-6 text-[10px] tracking-[0.3em] uppercase font-mono text-[#EDECE8] bg-[#0A0A0A]/85 px-3 py-1 border border-[#2A2928]">
                    MONUMENTAL ATRIUM PERSPECTIVE
                  </div>
                </div>
              )}

              {activeStage.overlayMode === 'final' && (
                <div className="absolute inset-0 pointer-events-none border border-[#780016] m-4">
                  <div className="absolute bottom-6 right-6 text-[10px] tracking-[0.3em] uppercase font-mono text-[#EDECE8] bg-[#0A0A0A]/90 px-3 py-1 border border-[#780016]">
                    SYNTHESIS: PERMANENT FORM
                  </div>
                </div>
              )}

              {/* Status Header Inside Canvas */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-[10px] tracking-[0.25em] uppercase font-mono text-[#EDECE8] z-30">
                <span className="bg-[#0A0A0A]/90 px-3 py-1 border border-[#2A2928]">
                  STAGE {currentStageIdx + 1}/5
                </span>
                <span className="bg-[#0A0A0A]/90 px-3 py-1 border border-[#2A2928] text-[#C4C1BA]">
                  {activeStage.lens}
                </span>
              </div>
            </div>

            {/* Scrubber Range Bar */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase font-mono text-[#787672]">
                <span>Progressive Morph Scrubber</span>
                <span className="text-[#EDECE8]">{Math.round(((currentStageIdx + 1) / STAGES.length) * 100)}% Coherence</span>
              </div>

              <input
                type="range"
                min="0"
                max={STAGES.length - 1}
                step="1"
                value={currentStageIdx}
                onChange={(e) => {
                  setCurrentStageIdx(Number(e.target.value));
                  setIsAutoTransforming(false);
                }}
                className="w-full h-1.5 bg-[#2A2928] accent-[#780016] cursor-pointer rounded-none appearance-none"
                aria-label="Progressive transformation scrubber"
              />
            </div>
          </div>

          {/* Right Control & Stage Dossier Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="border-l border-[#2A2928] pl-6 space-y-3">
              <div className="text-[11px] tracking-[0.25em] uppercase text-[#780016] font-mono">
                {activeStage.kicker}
              </div>
              <h3 className="text-3xl font-editorial text-[#EDECE8]">
                {activeStage.title}
              </h3>
              <p className="text-sm text-[#A8A6A1] leading-relaxed font-light">
                {activeStage.description}
              </p>
            </div>

            {/* Stage Selector Buttons */}
            <div className="space-y-2 pt-2">
              {STAGES.map((stg, idx) => (
                <button
                  key={stg.id}
                  type="button"
                  onClick={() => {
                    setCurrentStageIdx(idx);
                    setIsAutoTransforming(false);
                  }}
                  className={`w-full p-3.5 text-left border transition-all flex items-center justify-between text-xs tracking-[0.18em] uppercase ${
                    currentStageIdx === idx
                      ? 'border-[#EDECE8] bg-[#1C1A18] text-[#EDECE8]'
                      : 'border-[#2A2928]/60 bg-[#100E0D] text-[#787672] hover:text-[#C4C1BA] hover:border-[#787672]'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    {idx === 0 && <Sparkles className="w-3.5 h-3.5 text-[#C4C1BA]" />}
                    {idx === 1 && <EyeOff className="w-3.5 h-3.5 text-[#780016]" />}
                    {idx === 2 && <ZoomIn className="w-3.5 h-3.5 text-[#C4C1BA]" />}
                    {idx === 3 && <Building className="w-3.5 h-3.5 text-[#C4C1BA]" />}
                    {idx === 4 && <Layers className="w-3.5 h-3.5 text-[#780016]" />}
                    <span className="font-medium">{stg.title}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#787672]">0{idx + 1}</span>
                </button>
              ))}
            </div>

            {/* Play/Pause Sequence Toggle */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setIsAutoTransforming(!isAutoTransforming)}
                className={`w-full py-3 px-4 border text-xs tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 ${
                  isAutoTransforming
                    ? 'border-[#780016] text-[#EDECE8] bg-[#1C1613]'
                    : 'border-[#2A2928] text-[#787672] hover:text-[#EDECE8] hover:border-[#EDECE8]'
                }`}
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isAutoTransforming ? 'animate-spin text-[#780016]' : ''}`} />
                <span>{isAutoTransforming ? 'Halt Continuous Loop' : 'Initiate Continuous Loop'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
