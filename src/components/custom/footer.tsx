import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center gap-2 max-w-7xl  mx-auto py-20 px-10">
      <Image src={"/image.png"} alt="logo" width={100} height={100} />
      <p className="text-base font-semibold text-muted-foreground">
        Modern Solution For Green Issues
      </p>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-20 w-full justify-center border-b-1 border-b-gray-200 pb-10">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
            <h4 className="text-base font-semibold">Useful Link</h4>
            <p className="text-sm font-semibold text-muted-foreground">About</p>
            <p className="text-sm font-semibold text-muted-foreground">Blog</p>
            <p className="text-sm font-semibold text-muted-foreground">
              Careers
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-5 self-center md:self-end md:pr-12 justify-center">
        <Link
          href={"#"}
          className="text-base text-muted-foreground font-normal"
        >
          Privacy Settings
        </Link>
        <Link
          href={"#"}
          className="text-base text-muted-foreground font-normal"
        >
          Term Services
        </Link>
        <Link
          href={"#"}
          className="text-base text-muted-foreground font-normal"
        >
          Cookies
        </Link>
      </div>
      <p className="text-base text-muted-foreground font-normal mt-10">
        Copyright &copy; 2023. All rights reserved
      </p>
    </footer>
  );
}
