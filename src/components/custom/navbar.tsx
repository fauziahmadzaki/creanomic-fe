"use client";

import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import clsx from "clsx";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScroll, setIsScroll] = useState<boolean>(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const links = [
    {
      title: "Beranda",
      href: "/",
    },
    {
      title: "Tentang Kami",
      href: "/about",
    },
    {
      title: "AI",
      href: "/contact",
    },
    {
      title: "Komunitas",
      href: "/blog",
    },
  ];

  return (
    <div
      className={clsx(
        isScroll
          ? " md:flex   top-0 md:top-5 "
          : " md:fixed md:flex top-0 md:top-10  ",
        "fixed z-50 md:max-w-4xl md:fixedtransition-all duration-500 ease-in-out bg-white justify-between items-center  md:py-[0px] md:p-3.5 md:border-gray-200 md:border-1 md:items-center w-full  md:rounded-lg"
      )}
    >
      <div className="w-full md:w-fit flex justify-between border-input border-b-1 md:border-none py-4 px-2 md:px-0">
        <Image src={"/image.png"} alt="logo" width={100} height={100} />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-8 h-8 flex items-center justify-center md:hidden"
        >
          <Menu
            width={30}
            height={30}
            className={clsx(
              "absolute transition-all duration-300 ease-in-out",
              isOpen
                ? "opacity-0 scale-50 rotate-90"
                : "opacity-100 scale-100 rotate-0"
            )}
          />
          <X
            width={30}
            height={30}
            className={clsx(
              "absolute transition-all duration-300 ease-in-out",
              isOpen
                ? "opacity-100 scale-100 rotate-0"
                : "opacity-0 scale-50 -rotate-90"
            )}
          />
        </button>
      </div>
      <div
        className={clsx(
          "w-full md:w-fit shadow-sm md:flex   md:items-center overflow-hidden md:overflow-visible md:shadow-none  transition-all duration-700",
          isOpen ? "max-h-96 opacity-100 py-5" : "max-h-0"
        )}
      >
        <NavigationMenu className="w-full mx-auto mb-5 md:m-0">
          <NavigationMenuList className="flex-col md:flex-row items-center w-full">
            {links.map((link) => (
              <NavigationMenuItem key={link.title}>
                <NavigationMenuLink asChild>
                  <Button
                    variant={"link"}
                    className="text-sm md:font-semibold text-black font-sans"
                  >
                    <Link href={link.href}>{link.title}</Link>
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
            <NavigationMenuItem>
              <Button className="w-80 md:hidden">Login</Button>
            </NavigationMenuItem>
            <NavigationMenuItem className="mt-3">
              <Button className="w-80 md:hidden" variant={"outline"}>
                Register
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="hidden md:flex items-center">
        <Button size={"sm"}>Login</Button>
      </div>
    </div>
  );
}
