import React from 'react';
import { ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { COLLECTIVE_ROSTER } from '../data/campaignData';

interface EpilogueProps {
  onOpenCommission: () => void;
}

export const Epilogue: React.FC<EpilogueProps> = ({ onOpenCommission }) => {
  return (
    <section id="the-image" className="relative py-32 px-6 md:px-12 bg-[#080707] border-t border-[#2A2928]/40">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Cinematic Cadence Sequence */}
        <div className="text-center max-w-4xl mx-auto space-y-8 py-12">
          <div className="text-xs tracking-[0.35em] uppercase text-[#787672] font-mono">
            CHAPTER 06 / THE EPILOGUE OF FORM
          </div>

          <div className="space-y-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-editorial tracking-tight text-[#787672]">
            <p className="hover:text-[#EDECE8] transition-colors cursor-default">THE BODY.</p>
            <p className="hover:text-[#EDECE8] transition-colors cursor-default">THE MATERIAL.</p>
            <p className="hover:text-[#EDECE8] transition-colors cursor-default">THE SHAPE.</p>
            <p className="hover:text-[#EDECE8] transition-colors cursor-default">THE LIGHT.</p>
            <p className="hover:text-[#EDECE8] transition-colors cursor-default">THE IMAGE.</p>
          </div>

          <div className="pt-8">
            <h2 className="editorial-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#EDECE8] tracking-tight mb-4">
              VANTA
            </h2>
            <div className="text-sm md:text-base font-mono tracking-[0.3em] uppercase text-[#780016] font-semibold">
              FASHION AS AN ACT OF FORM.
            </div>
          </div>
        </div>

        {/* Agency Architecture & Representation Roster */}
        <div className="border-t border-[#2A2928]/60 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Platform Statement */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs tracking-[0.3em] uppercase text-[#787672] font-mono">
              AGENCY & IMAGE PLATFORM
            </div>

            <h3 className="text-3xl font-editorial text-[#EDECE8]">
              Representation of Author Collections & Spatial Campaigns
            </h3>

            <p className="text-sm text-[#A8A6A1] leading-relaxed font-light">
              VANTA operates as an elite creative direction agency, image laboratory, and exclusive representation platform for author fashion, independent ateliers, photographers, and spatial stylists.
            </p>

            <p className="text-sm text-[#A8A6A1] leading-relaxed font-light">
              We do not build retail catalogs. We construct enduring image universes, campaign monographs, and physical exhibitions for institutions and forward-looking maisons worldwide.
            </p>

            <div className="pt-4">
              <button
                type="button"
                onClick={onOpenCommission}
                className="px-6 py-3.5 bg-[#EDECE8] text-[#0A0A0A] hover:bg-[#C4C1BA] text-xs tracking-[0.25em] uppercase font-medium transition-colors flex items-center gap-2"
              >
                <span>Request Commission Dossier</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Collective Roster */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs tracking-[0.25em] uppercase text-[#C4C1BA] font-mono pb-2 border-b border-[#2A2928]/60 flex items-center justify-between">
              <span>Representation Pillars</span>
              <span>Global Dispatch</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {COLLECTIVE_ROSTER.map((item) => (
                <div
                  key={item.role}
                  className="p-5 bg-[#121110] border border-[#2A2928]/50 space-y-2 hover:border-[#EDECE8]/40 transition-colors"
                >
                  <div className="text-[10px] tracking-[0.25em] uppercase text-[#780016] font-mono">
                    {item.role}
                  </div>
                  <div className="text-lg font-editorial text-[#EDECE8]">
                    {item.name}
                  </div>
                  <div className="text-xs text-[#787672] font-mono">
                    {item.location}
                  </div>
                  <p className="text-xs text-[#A8A6A1] font-light pt-1">
                    {item.specialty}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
