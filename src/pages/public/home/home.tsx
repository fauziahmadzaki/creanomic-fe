import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="w-full lg:flex  lg:gap-20 justify-between space-y-10 mx-auto  "
    >
      <div className="flex-1 flex flex-col gap-6">
        <Image src={"/logo.png"} alt="logo" width={50} height={50} />
        <h1 className="text-4xl font-bold">
          Bersama Kita Tanam Harapan, Selamatkan Bumi
        </h1>
        <p className="text-base font-normal text-muted-foreground">
          Setiap pohon yang kamu bantu tanam adalah napas baru bagi bumi. Dengan
          teknologi peta dan AI, kami memastikan setiap donasi benar-benar
          menumbuhkan kehidupan di tempat yang membutuhkannya.
        </p>
        <div className="w-full flex gap-4 pt-4">
          <Button className="">Donasi Sekarang</Button>
          <Button className="" variant={"outline"}>
            Pelajari Program Kami
          </Button>
        </div>
      </div>
      <div className="w-fit mx-auto ">
        <Image
          src={"/hero.png"}
          alt="logo"
          width={500}
          height={500}
          className="h-full mx-auto"
        />
      </div>
    </section>
  );
}

export default HeroSection;
