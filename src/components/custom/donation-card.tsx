import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { Dot } from "lucide-react";

export default function DonationCard() {
  return (
    <div className="space-y-6 ">
      <Image
        src={"/donations.png"}
        alt="logo"
        width={400}
        height={400}
        className="rounded-md aspect-square md:aspect-auto"
      />
      <div>
        <h5 className="text-xl font-semibold">Hijaukan Bandung Barat</h5>
        <div className="flex">
          <p className="text-sm font-semibold text-muted-foreground">
            Bandung Barat
          </p>
          <Dot />
          <p className="text-sm font-semibold text-muted-foreground">
            Target: 1.000 pohon
          </p>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-normal text-primary">
            progres 450 pohon tertanam
          </p>
          <div className="w-full h-1 bg-gradient-to-r from-primary via-primary/90 to-accent-white rounded-full"></div>
        </div>
        <Button className="mt-4">Donasi Sekarang</Button>
      </div>
    </div>
  );
}
