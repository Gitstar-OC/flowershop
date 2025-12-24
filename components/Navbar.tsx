"use client";
import { useEffect, useRef, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { buttonVariants } from "./Button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
  const handleScroll = () => {
    if (!ticking.current) {
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 0);
        ticking.current = false;
      });
      ticking.current = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  return () => window.removeEventListener('scroll', handleScroll);
}, []); 
  
  return (
    <div
      className={cn(
        "h-13 sticky top-0 z-999 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-shadow" // bg-background when scrolled
          : "bg-transparent"
      )}
    >
      <Wrapper className="h-full">
        <nav className="flex justify-between w-full pt-2.5">
          <Link
            href="/"
            className="inline-flex rounded-[7px]  focus:outline-offset-2 focus:outline-2 focus:ring-2 focus:ring-offset-2 "
          >
            <Image
              width={200}
              height={25}
              src="/assets/Logo.png"
              alt="Logo"
              className="h-6 mt-1"
            />
          </Link>
          <div className="flex gap-2.5">
            <Link
              href="/Conversion"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "px-1 md:px-2"
              )}
            >
              Conversion
            </Link>
            <Link
              href="/Resources"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "px-1 md:px-2"
              )}
            >
              Resources
            </Link>
            <Link href="/Contact" className={cn(buttonVariants({}), "")}>
              Contact
            </Link>
          </div>
        </nav>
      </Wrapper>
    </div>
  );
};

export default Navbar;
