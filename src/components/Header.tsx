import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { ambientDrone } from '../utils/audioDrone';

interface HeaderProps {
  onOpenCommission: () => void;
  activeChapter?: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCommission }) => {
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const newState = ambientDrone.toggle();
    setIsAudioActive(newState);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#2A2928]/40 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Brand Zone - Single text element wordmark */}
        <a
          href="#hero"
          className="text-lg md:text-xl font-display font-semibold tracking-[0.35em] text-[#EDECE8] uppercase hover:text-[#C4C1BA] transition-colors whitespace-nowrap"
        >
          VANTA
        </a>

        {/* Zone 2: Navigation Links - Clean text with subtle hover underlines */}
        <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.2em] uppercase text-[#A8A6A1] font-medium">
          <a href="#the-body" className="hover:text-[#EDECE8] transition-colors py-1">
            The Body
          </a>
          <a href="#the-material" className="hover:text-[#EDECE8] transition-colors py-1">
            The Material
          </a>
          <a href="#the-shape" className="hover:text-[#EDECE8] transition-colors py-1">
            The Shape
          </a>
          <a href="#the-space" className="hover:text-[#EDECE8] transition-colors py-1">
            The Space
          </a>
          <a href="#the-gesture" className="hover:text-[#EDECE8] transition-colors py-1">
            The Gesture
          </a>
          <a href="#transformation" className="hover:text-[#EDECE8] text-[#EDECE8]/90 transition-colors py-1">
            Transformation
          </a>
          <a href="#curatorial-index" className="hover:text-[#EDECE8] transition-colors py-1">
            Plates Index
          </a>
        </nav>

        {/* Zone 3: Primary Actions - Ambient sound toggle + Commission Dossier button */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleSound}
            type="button"
            className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[#A8A6A1] hover:text-[#EDECE8] transition-colors px-2 py-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EDECE8]"
            title={isAudioActive ? 'Silence ambient atmosphere' : 'Enable brutalist acoustic drone'}
            aria-label={isAudioActive ? 'Mute atmosphere sound' : 'Unmute atmosphere sound'}
          >
            {isAudioActive ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#780016] animate-pulse" />
                <span className="hidden sm:inline">Atmosphere: On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#787672]" />
                <span className="hidden sm:inline">Atmosphere: Muted</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenCommission}
            type="button"
            className="px-3.5 py-1.5 text-[11px] tracking-[0.2em] uppercase text-[#EDECE8] bg-[#1C1613] hover:bg-[#2A2928] border border-[#2A2928] transition-colors whitespace-nowrap flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#EDECE8]"
          >
            <span>Dossier</span>
            <ArrowUpRight className="w-3 h-3 text-[#C4C1BA]" />
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#EDECE8] p-1.5 focus-visible:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-[#2A2928] px-6 py-6 flex flex-col gap-4 text-xs tracking-[0.25em] uppercase text-[#A8A6A1]">
          <a
            href="#the-body"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#EDECE8] py-2 border-b border-[#2A2928]/30"
          >
            01 — The Body
          </a>
          <a
            href="#the-material"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#EDECE8] py-2 border-b border-[#2A2928]/30"
          >
            02 — The Material
          </a>
          <a
            href="#the-shape"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#EDECE8] py-2 border-b border-[#2A2928]/30"
          >
            03 — The Shape
          </a>
          <a
            href="#the-space"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#EDECE8] py-2 border-b border-[#2A2928]/30"
          >
            04 — The Space
          </a>
          <a
            href="#the-gesture"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#EDECE8] py-2 border-b border-[#2A2928]/30"
          >
            05 — The Gesture
          </a>
          <a
            href="#transformation"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#EDECE8] py-2 border-b border-[#2A2928]/30"
          >
            Interactive Transformation
          </a>
          <a
            href="#curatorial-index"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-[#EDECE8] py-2"
          >
            Plates & Archive Index
          </a>
        </div>
      )}
    </header>
  );
};
