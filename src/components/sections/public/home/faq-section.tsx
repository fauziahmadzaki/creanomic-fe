import { Badge } from "@/components/ui/badge";
import React from "react";
import { AccordionDemo } from "@/components/custom/faq-accordion";

export default function FaqSection() {
  return (
    <section className="py-10 flex flex-col items-center gap-15">
      <div className="flex flex-col items-center gap-5">
        <Badge variant={"outline"}>Pertanyaan Yang Sering Diajukan</Badge>
        <h1 className="text-4xl font-bold">Subscription & Billing FAQs</h1>
        <p className="text-base font-normal text-muted-foreground">
          Pertanyaan yang sering ditanyakan oleh berbagai pengguna dari seluruh
          dunia.
        </p>
      </div>
      <div className="flex-none w-full space-y-20 lg:flex gap-20">
        <AccordionDemo />
        <AccordionDemo />
      </div>
    </section>
  );
}
