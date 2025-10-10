import React from "react";
import { CarouselFigure } from "@/components/custom/caraousel";
export default function FigureSection() {
  return (
    <div className="space-y-4 overflow-hidden flex justify-center flex-col items-center py-10">
      <h1 className="text-4xl font-bold">Apa Kata Mereka?</h1>

      <CarouselFigure />
    </div>
  );
}
