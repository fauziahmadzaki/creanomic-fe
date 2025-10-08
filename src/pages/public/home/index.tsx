import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import HeroSection from "./home";
import Statistic from "./statistic";

function HomePage() {
  return (
    <main className="flex flex-col gap-20">
      <HeroSection />
      <Statistic />
    </main>
  );
}

export default HomePage;
