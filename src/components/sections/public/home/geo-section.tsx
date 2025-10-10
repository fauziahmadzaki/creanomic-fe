import Ads from "@/components/custom/ads";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

function GeoSection() {
  const legends = [
    {
      color: "bg-green-500",
      text: "Hijau - Area sehat dan hijau kembali.",
    },
    {
      color: "bg-yellow-500",
      text: "Kuning - Dalam tahap penanaman.",
    },
    {
      color: "bg-red-500",
      text: "Merah - Area kritis, butuh bantuan segera.",
    },
  ];
  return (
    <div className="relative pb-50 flex flex-col md:flex-row-reverse items-center gap-10 py-10">
      <div className="h-full w-full ">
        <Image
          src={"/map.png"}
          alt="logo"
          width={500}
          height={500}
          className="w-full h-full"
        />
      </div>
      <div className="">
        <h1 className="text-4xl font-bold">
          Lihat Langsung Dampak Donasimu Melalui Peta Interaktif
        </h1>
        <p className="text-muted-foreground text-base font-medium mt-4">
          Pantau area penanaman pohon di Indonesia dengan melihat indikator
          warna
        </p>
        {legends.map((item, index) => (
          <div className="flex items-center" key={index}>
            <span
              className={clsx("w-4 h-4 inline-block mr-2 ", item.color)}
            ></span>
            <p className="text-muted-foreground text-base font-medium">
              {item.text}
            </p>
          </div>
        ))}
      </div>
      <Ads />
    </div>
  );
}

export default GeoSection;
