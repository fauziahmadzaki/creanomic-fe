import React from "react";
import StatCard from "@/components/custom/statcard";
import { StatCardProp } from "@/components/custom/statcard";

export default function Statistic() {
  const data: StatCardProp[] = [
    {
      count: 2.5,
      type: "Juta",
      content: "Pohon ternanam berkat donasimu.",
      unit: "qty",
    },
    {
      count: 12,
      type: "Miliar",
      content: "Dana penghijauan terkumpul.",
      unit: "cur",
    },
    {
      count: 1.2,
      type: "Miliar",
      content: "Analisis AI dilakukan",
      unit: "qty",
    },
    {
      count: 80,
      type: "Ribu",
      content: "Donatur aktif dari seluruh dunia.",
      unit: "qty",
    },
  ];
  return (
    <section className="pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
      {data.map((item, index) => (
        <StatCard
          count={item.count}
          unit={item.unit}
          type={item.type}
          content={item.content}
          key={index}
        />
      ))}
    </section>
  );
}
