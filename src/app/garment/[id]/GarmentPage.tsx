"use client";

import { IntroAnimation } from "@/components/IntroAnimation";
import { ScrollSection } from "@/components/ScrollSection";
import type { Garment } from "@/data/garments";

interface GarmentPageProps {
  garment: Garment;
}

export function GarmentPage({ garment }: GarmentPageProps) {
  return (
    <main className="overflow-x-hidden">
      <IntroAnimation
        totalHolders={garment.totalHolders}
        totalCities={garment.totalCities}
      />
      <ScrollSection transfers={garment.transfers} garmentId={garment.id} />
    </main>
  );
}
