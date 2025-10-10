import React from "react";
import HeroSection from "./home-section";
import Statistic from "./statistic-section";
import GeoSection from "./geo-section";
import FigureSection from "./figure-section";
import DonationSection from "./donation-section";
import BlogSection from "./blog-section";
import FaqSection from "./faq-section";

function HomePage() {
  return (
    <main className="flex flex-col gap-5">
      <HeroSection />
      <Statistic />
      <GeoSection />
      <FigureSection />
      <DonationSection />
      <BlogSection />
      <FaqSection />
    </main>
  );
}

export default HomePage;
