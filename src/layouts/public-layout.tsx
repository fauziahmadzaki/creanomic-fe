import Navbar from "@/components/custom/navbar";
import React from "react";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto font-sans flex flex-col items-center justify-items-center min-h-screen p-8 pt-30 md:pt-10  pb-20 gap-16 sm:p-20">
      <Navbar />
      {children}
    </div>
  );
}

export default PublicLayout;
