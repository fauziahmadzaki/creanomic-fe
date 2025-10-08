import React from "react";

export type StatCardProp = {
  count: number;
  content: string;
  unit: "qty" | "cur";
  type: string;
};
export default function StatCard({ content, count, unit, type }: StatCardProp) {
  let formatedString = "";
  switch (unit) {
    case "cur":
      formatedString = `Rp ${count} ${type}`;
      break;
    case "qty":
      formatedString = `${count} ${type}`;
  }

  return (
    <div className="border-l-5 pl-4 border-l-primary space-y-2">
      <h1 className="text-4xl font-bold">{formatedString}</h1>
      <p className="text-base font-normal text-muted-foreground">{content}</p>
    </div>
  );
}
