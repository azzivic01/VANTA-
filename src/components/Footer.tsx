import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-[#787672] py-20 px-6 md:px-12 border-t border-[#2A2928]/60 text-xs tracking-[0.2em] uppercase font-mono">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Main Footer Colophon */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 space-y-4">
            <a
              href="#hero"
              className="text-2xl font-display font-semibold tracking-[0.35em] text-[#EDECE8] uppercase hover:text-white transition-colors inline-block"
            >
              VANTA
            </a>
            <p className="text-xs text-[#A8A6A1] font-light leading-relaxed max-w-sm normal-case tracking-normal">
              An independent creative platform and agency representing author collections, experimental tailoring, and architectural fashion campaigns.
            </p>
            <div className="text-[11px] text-[#787672]">
              PARIS · BERLIN · SÃO PAULO · MILAN
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <div className="text-[#EDECE8] font-semibold text-[11px] pb-1 border-b border-[#2A2928]/50">
              The Campaign
            </div>
            <ul className="space-y-2 text-[11px]">
              <li><a href="#the-body" className="hover:text-[#EDECE8] transition-colors">01. The Body</a></li>
              <li><a href="#the-material" className="hover:text-[#EDECE8] transition-colors">02. The Material</a></li>
              <li><a href="#the-shape" className="hover:text-[#EDECE8] transition-colors">03. The Shape</a></li>
              <li><a href="#the-space" className="hover:text-[#EDECE8] transition-colors">04. The Space</a></li>
              <li><a href="#the-gesture" className="hover:text-[#EDECE8] transition-colors">05. The Gesture</a></li>
              <li><a href="#the-image" className="hover:text-[#EDECE8] transition-colors">06. The Image</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <div className="text-[#EDECE8] font-semibold text-[11px] pb-1 border-b border-[#2A2928]/50">
              Curatorial Protocol
            </div>
            <p className="text-[11px] text-[#A8A6A1] normal-case tracking-normal font-light leading-relaxed">
              VANTA refuses commercial catalog templates and standardized merchandising. Each campaign is designed as an architectural monograph for author collections.
            </p>
            <div className="text-[10px] text-[#787672] pt-2">
              PRINT MONOGRAPH: 500 NUMBERED COPIES · ED. 2026
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="pt-8 border-t border-[#2A2928]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            © {new Date().getFullYear()} VANTA IMAGE LABORATORY. ALL MONOGRAPH RIGHTS RESERVED.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[#EDECE8] hover:text-white transition-colors"
          >
            <span>Ascend to Apex</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
