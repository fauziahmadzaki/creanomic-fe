import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselFigure() {
  return (
    <Carousel className="w-full max-w-xs md:max-w-4xl">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-col items-center gap-4">
              <p className="text-base text-muted-foreground font-medium">
                By Praveen Juge • Published on August 24, 2024 • 12 min read
              </p>
              <Image
                src={"/caraousel.png"}
                alt=""
                width={500}
                height={500}
                className="w-full h-60  rounded-md"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
