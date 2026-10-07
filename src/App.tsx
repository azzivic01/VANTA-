/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ChapterBody } from './components/ChapterBody';
import { ChapterMaterial } from './components/ChapterMaterial';
import { ChapterShape } from './components/ChapterShape';
import { ChapterSpace } from './components/ChapterSpace';
import { ChapterGesture } from './components/ChapterGesture';
import { TheTransformation } from './components/TheTransformation';
import { CuratorialIndex } from './components/CuratorialIndex';
import { Epilogue } from './components/Epilogue';
import { PlateLightbox } from './components/PlateLightbox';
import { CommissionModal } from './components/CommissionModal';
import { Footer } from './components/Footer';
import { CAMPAIGN_PLATES } from './data/campaignData';
import { CampaignPlate } from './types/campaign';

export default function App() {
  const [selectedPlate, setSelectedPlate] = useState<CampaignPlate | null>(null);
  const [isCommissionOpen, setIsCommissionOpen] = useState(false);

  const heroPlate = CAMPAIGN_PLATES[0]; // Look 01 Monolith
  const materialPlate = CAMPAIGN_PLATES[1]; // Look 04 Macro Tectonic Weave
  const shapePlate = CAMPAIGN_PLATES[2]; // Look 07 Cantilever Volume
  const spacePlate = CAMPAIGN_PLATES[3]; // Look 11 Monumental Oxblood on Spiral
  const gesturePlate = CAMPAIGN_PLATES[4]; // Look 14 Chiaroscuro Veil Performance

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#EDECE8] film-grain selection:bg-[#780016] selection:text-white">
      {/* Top Bar Navigation */}
      <Header onOpenCommission={() => setIsCommissionOpen(true)} />

      <main className="relative">
        {/* HERO Spread: The Body */}
        <Hero
          heroPlate={heroPlate}
          onOpenPlate={(plate) => setSelectedPlate(plate)}
        />

        {/* 01 — THE BODY */}
        <ChapterBody
          plate={heroPlate}
          onOpenPlate={(plate) => setSelectedPlate(plate)}
        />

        {/* 02 — THE MATERIAL */}
        <ChapterMaterial
          plate={materialPlate}
          onOpenPlate={(plate) => setSelectedPlate(plate)}
        />

        {/* 03 — THE SHAPE */}
        <ChapterShape
          plate={shapePlate}
          onOpenPlate={(plate) => setSelectedPlate(plate)}
        />

        {/* 04 — THE SPACE */}
        <ChapterSpace
          plate={spacePlate}
          onOpenPlate={(plate) => setSelectedPlate(plate)}
        />

        {/* 05 — THE GESTURE */}
        <ChapterGesture
          plate={gesturePlate}
          onOpenPlate={(plate) => setSelectedPlate(plate)}
        />

        {/* SIGNATURE INTERACTIVE EXPERIENCE: THE TRANSFORMATION */}
        <TheTransformation />

        {/* MONOGRAPH & CURATORIAL REGISTER */}
        <CuratorialIndex
          onOpenPlate={(plate) => setSelectedPlate(plate)}
        />

        {/* 06 — THE IMAGE & MANIFESTO */}
        <Epilogue
          onOpenCommission={() => setIsCommissionOpen(true)}
        />
      </main>

      {/* Footer Colophon */}
      <Footer />

      {/* Lightbox Modal for High-Res Inspection */}
      <PlateLightbox
        plate={selectedPlate}
        onClose={() => setSelectedPlate(null)}
        onSelectPlate={(plate) => setSelectedPlate(plate)}
      />

      {/* Curatorial Commission & Representation Modal */}
      <CommissionModal
        isOpen={isCommissionOpen}
        onClose={() => setIsCommissionOpen(false)}
      />
    </div>
  );
}
