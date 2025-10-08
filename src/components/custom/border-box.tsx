import React from "react";

export default function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-1 border-gray-200 p-5 rounded-md">{children}</div>
  );
}
