"use client"
import { usePathname } from "next/navigation"

export default function LegalHeader() {
  const pathname = usePathname()
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <h1 className="text-center text-balance text-[32px] lg:mt-50 mt-40 sm:text-[42px] md:text-[48px] lg:text-[56px] leading-[1.2] sm:leading-[1.2] md:leading-[1.2] lg:leading-[64px] tracking-tight">
        The FlowerShop platform {" "}
        <br className="hidden sm:block" />
        {pathname === "/terms" ? "Terms of Use" : "Privacy Policy"}
      </h1>
    </div>
  )
}