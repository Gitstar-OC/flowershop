"use client";
import { useEffect, useRef, useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { buttonVariants } from "./Button";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { rootMargin: "-1px 0px 0px 0px" } // Triggers when hero/content leaves viewport top
    );

    if (contentRef.current) observer.observe(contentRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div
      className={cn(
        "h-13 sticky top-0 z-999 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b" // bg-background when scrolled
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
