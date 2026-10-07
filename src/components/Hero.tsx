import React from 'react';
import { ArrowDown, Maximize2 } from 'lucide-react';
import { CampaignPlate } from '../types/campaign';

interface HeroProps {
  heroPlate: CampaignPlate;
  onOpenPlate: (plate: CampaignPlate) => void;
}

export const Hero: React.FC<HeroProps> = ({ heroPlate, onOpenPlate }) => {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between pt-20 pb-10 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden"
    >
      {/* Top Editorial Kicker */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between text-[11px] tracking-[0.28em] uppercase text-[#787672] pt-4 border-b border-[#2A2928]/40 pb-4">
        <span>VANTA / CAMPAIGN 01</span>
        <span className="hidden md:inline">DIRECTION: ATELIER BRUT & MAISONS AUTORALES</span>
        <span>PARIS · BERLIN · SÃO PAULO</span>
      </div>

      {/* Main Monumental Spread: Asymmetric Magazine Cover Layout */}
      <div className="relative w-full max-w-7xl mx-auto my-auto py-8 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Typographic Anchor */}
        <div className="lg:col-span-5 flex flex-col justify-center z-10">
          <div className="text-[12px] tracking-[0.3em] uppercase text-[#C4C1BA] mb-3 font-medium">
            Maison Collective / Editorial Issue
          </div>

          <h1 className="editorial-title text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light text-[#EDECE8] tracking-tight mb-4 select-none">
            VANTA
          </h1>

          <div className="text-xl sm:text-2xl md:text-3xl font-editorial italic text-[#C4C1BA] tracking-wide mb-6">
            The Body as Architecture
          </div>

          <p className="text-sm md:text-base text-[#787672] max-w-md font-light leading-relaxed mb-8">
            The garment is not presented as merchandise. It is erected as architecture over the anatomical frame. The body becomes structure. The fabric becomes surface. The shadow becomes drafting.
          </p>

          <div className="flex flex-col gap-2 text-xs tracking-[0.2em] uppercase text-[#EDECE8] border-l-2 border-[#780016] pl-4 py-1">
            <span className="font-semibold tracking-[0.25em]">Form Without Permission</span>
            <span className="text-[#787672] text-[11px]">Plate 001 — Monolith in Negative Atrium</span>
          </div>
        </div>

        {/* Right Monumental Photography Frame */}
        <div className="lg:col-span-7 relative group">
          <div
            onClick={() => onOpenPlate(heroPlate)}
            className="relative w-full aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-[#1C1613] cursor-pointer border border-[#2A2928]/60 transition-transform duration-700 ease-out"
          >
            {/* The Monumental Image */}
            <img
              src={heroPlate.image}
              alt="Monolithic architectural overcoat in brutalist concrete atrium"
              className="w-full h-full object-cover object-center filter grayscale contrast-110 brightness-95 group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
              loading="eager"
            />

            {/* Subtle Chiaroscuro Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

            {/* Editorial Plate Stamp Overlay */}
            <div className="absolute top-4 right-4 flex items-center gap-2 bg-[#0A0A0A]/85 backdrop-blur-sm px-3 py-1.5 border border-[#2A2928] text-[10px] tracking-[0.25em] text-[#EDECE8] uppercase">
              <span>Inspect Plate</span>
              <Maximize2 className="w-3 h-3 text-[#C4C1BA]" />
            </div>

            {/* Bottom Meta Overlay */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-[11px] tracking-[0.2em] text-[#EDECE8] uppercase font-mono">
              <span className="bg-[#0A0A0A]/80 backdrop-blur-sm px-2.5 py-1 border border-[#2A2928]">
                {heroPlate.look}
              </span>
              <span className="hidden sm:inline bg-[#0A0A0A]/80 backdrop-blur-sm px-2.5 py-1 border border-[#2A2928] text-[#787672]">
                {heroPlate.gsm}
              </span>
            </div>
          </div>

          {/* Quiet Sub-label */}
          <div className="mt-3 flex items-center justify-between text-[11px] tracking-[0.2em] text-[#787672] uppercase">
            <span>Leica M Analogue · 35mm</span>
            <span>Concrete Cavity / Zenithal Ray</span>
          </div>
        </div>
      </div>

      {/* Hero Footer Bar */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between pt-6 border-t border-[#2A2928]/40 text-xs tracking-[0.2em] uppercase text-[#787672]">
        <div className="flex items-center gap-6">
          <span className="text-[#EDECE8] font-medium">Chapters</span>
          <a href="#the-body" className="hover:text-[#EDECE8] transition-colors">01. Body</a>
          <a href="#the-material" className="hover:text-[#EDECE8] transition-colors">02. Material</a>
          <a href="#the-shape" className="hover:text-[#EDECE8] transition-colors">03. Shape</a>
          <a href="#the-space" className="hover:text-[#EDECE8] transition-colors">04. Space</a>
          <a href="#the-gesture" className="hover:text-[#EDECE8] transition-colors">05. Gesture</a>
        </div>

        <a
          href="#the-body"
          className="flex items-center gap-2 hover:text-[#EDECE8] transition-colors"
          aria-label="Scroll to chapter 01"
        >
          <span className="hidden sm:inline">Descent</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
