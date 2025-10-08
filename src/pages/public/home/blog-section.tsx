import React from "react";
import { Pagination } from "@/components/custom/pagination";
import BlogCard from "@/components/custom/blog-card";

export default function BlogSection() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Artikel Terbaru Dari Kami</h1>
      <p className="text-base font-normal text-muted-foreground block w-2/3">
        Jelajahi artikel yang menarik dari kami.
      </p>
      <div className="p-10 border-t-1 border-t-gray-200 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <BlogCard key={index} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}
