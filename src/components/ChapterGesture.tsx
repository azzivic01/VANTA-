import React, { useState } from 'react';
import { Maximize2, Play, Pause, Activity } from 'lucide-react';
import { CampaignPlate } from '../types/campaign';

interface ChapterGestureProps {
  plate: CampaignPlate;
  onOpenPlate: (plate: CampaignPlate) => void;
}

const GESTURE_CHRONO = [
  {
    phase: '01',
    label: 'Tension of the Grip',
    timecode: '00:01.12',
    action: 'Fingers exert 14 N of tensile pull against sheer pleated organza.',
  },
  {
    phase: '02',
    label: 'Interrupted Pivot',
    timecode: '00:02.48',
    action: 'Torso rotates 45° off-axis; coat edge remains suspended in velocity.',
  },
  {
    phase: '03',
    label: 'Veil & Facial Dissolution',
    timecode: '00:03.90',
    action: 'Shadow crosses the jawline; the individual identity recedes into pure form.',
  },
  {
    phase: '04',
    label: 'Residual Stasis',
    timecode: '00:05.16',
    action: 'Air turbulence settles; the garment forms an immutable monolithic column.',
  },
];

export const ChapterGesture: React.FC<ChapterGestureProps> = ({ plate, onOpenPlate }) => {
  const [activeFrame, setActiveFrame] = useState(0);
  const [isPlayingSeq, setIsPlayingSeq] = useState(false);

  React.useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingSeq) {
      interval = setInterval(() => {
        setActiveFrame((prev) => (prev + 1) % GESTURE_CHRONO.length);
      }, 1600);
    }
    return () => clearInterval(interval);
  }, [isPlayingSeq]);

  return (
    <section id="the-gesture" className="relative py-28 px-6 md:px-12 bg-[#0C0B0A] border-t border-[#2A2928]/40">
      <div className="max-w-7xl mx-auto">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16 border-b border-[#2A2928]/40 pb-6 gap-4">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-[#787672] mb-1 font-mono">
              CHAPTER 05 / KINETIC CHOREOGRAPHY
            </div>
            <h2 className="text-4xl md:text-6xl font-editorial tracking-tight text-[#EDECE8]">
              The Gesture as Living Event
            </h2>
          </div>
          <div className="text-xs tracking-[0.25em] uppercase text-[#C4C1BA] font-light max-w-xs text-left md:text-right">
            Rejecting commercial stillness. The garment lives only in interrupted trajectory.
          </div>
        </div>

        {/* Dynamic Editorial Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Visual Frame (3/4 vertical portrait) */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              onClick={() => onOpenPlate(plate)}
              className="relative w-full max-w-md aspect-[3/4] overflow-hidden bg-[#161413] border border-[#2A2928] group cursor-pointer"
            >
              <img
                src={plate.image}
                alt={plate.title}
                className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-90 group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-50" />

              <div className="absolute top-4 left-4 bg-[#0A0A0A]/90 backdrop-blur-sm px-3 py-1.5 border border-[#2A2928] text-[10px] tracking-[0.25em] uppercase text-[#EDECE8] font-mono">
                HIGH-SPEED CINEMATIC SHUTTER · 1/500S
              </div>

              <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-[#0A0A0A]/90 backdrop-blur-sm px-3 py-1.5 border border-[#2A2928] text-[10px] tracking-[0.25em] uppercase text-[#EDECE8]">
                <span>Inspect Frame</span>
                <Maximize2 className="w-3 h-3 text-[#C4C1BA]" />
              </div>
            </div>
          </div>

          {/* Right Chrono-Photographic Sequence */}
          <div className="lg:col-span-6 space-y-8">
            <div className="border-l border-[#2A2928] pl-6 space-y-3">
              <div className="text-[11px] tracking-[0.25em] uppercase text-[#787672] font-mono">
                CHOREOGRAPHY PROTOCOL
              </div>
              <h3 className="text-2xl font-editorial text-[#EDECE8] italic">
                Contact Between Flesh, Shadow & Textile
              </h3>
              <p className="text-sm text-[#A8A6A1] leading-relaxed font-light">
                {plate.curatorNote}
              </p>
            </div>

            {/* Kinetic Chrono Analysis Player */}
            <div className="bg-[#141211] p-6 border border-[#2A2928]/60 space-y-6">
              <div className="flex items-center justify-between text-xs tracking-[0.25em] uppercase text-[#C4C1BA] border-b border-[#2A2928] pb-3">
                <span className="flex items-center gap-2 font-mono">
                  <Activity className="w-3.5 h-3.5 text-[#780016]" />
                  <span>Velocity Chronology</span>
                </span>
                <button
                  type="button"
                  onClick={() => setIsPlayingSeq(!isPlayingSeq)}
                  className="flex items-center gap-1.5 text-[#EDECE8] hover:text-white transition-colors"
                >
                  {isPlayingSeq ? <Pause className="w-3 h-3 text-[#780016]" /> : <Play className="w-3 h-3" />}
                  <span className="text-[10px] font-mono">{isPlayingSeq ? 'PAUSE CYCLE' : 'CYCLE PHASES'}</span>
                </button>
              </div>

              {/* Chrono Steps */}
              <div className="space-y-2">
                {GESTURE_CHRONO.map((item, idx) => (
                  <div
                    key={item.phase}
                    onClick={() => setActiveFrame(idx)}
                    className={`p-3.5 border transition-all cursor-pointer ${
                      activeFrame === idx
                        ? 'border-[#EDECE8] bg-[#1E1B19] text-[#EDECE8]'
                        : 'border-[#2A2928]/50 bg-[#100E0D] text-[#787672] hover:text-[#C4C1BA]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs tracking-[0.2em] uppercase font-mono mb-1">
                      <span className="text-[#EDECE8]">PHASE {item.phase} · {item.label}</span>
                      <span className="text-[11px] text-[#787672]">{item.timecode}</span>
                    </div>
                    <p className="text-xs text-[#A8A6A1] font-light">
                      {item.action}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-3 bg-[#0A0A0A] border-l-2 border-[#780016] text-xs text-[#A8A6A1] italic">
                "The model never gazes directly into the camera lens. The gaze is directed into the architecture's periphery."
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
