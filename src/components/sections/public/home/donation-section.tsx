import Box from "@/components/custom/border-box";
import { ArticleFilterTable } from "@/components/custom/filter-table";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";
import React from "react";
import DonationCard from "@/components/custom/donation-card";
import { Pagination } from "@/components/custom/pagination";

export default function DonationSection() {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Rekomendasi Campaign Donasi Dari AI
      </h1>
      <p className="text-base font-normal text-muted-foreground block w-2/3">
        Setiap campaign telah melalui proses verifikasi data dan lokasi oleh tim
        kami. Donasimu akan langsung disalurkan ke lembaga yang benar-benar
        aktif di lapangan.
      </p>
      <div className="p-10 border-t-1 border-t-gray-200 mt-10 grid grid-cols-1 md:grid-cols-3 justify-center gap-10">
        {/* <div className="space-y-10 hidden md:block">
          <Box>
            <h3 className="text-lg font-bold">Search</h3>
            <InputGroup>
              <InputGroupInput placeholder="Search..." />
              <InputGroupAddon>
                <Search />
              </InputGroupAddon>
            </InputGroup>
          </Box>
          <ArticleFilterTable />
        </div> */}

        {Array.from({ length: 6 }).map((_, index) => (
          <DonationCard key={index} />
        ))}
      </div>
      <Pagination />
    </div>
  );
}
