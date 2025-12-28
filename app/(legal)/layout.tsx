import type React from "react";
import type { Metadata } from "next";
import "../globals.css";
import Image from "next/image";
import TableOfContents from "@/components/legal/table-of-contents";
import LegalHeader from "@/components/legal/LegalHeader";
import Wrapper from "@/components/Wrapper";

export const metadata: Metadata = {
  title: "Flowershop Media Legal",
  description: "Flowershop Media Legal - Terms of Use and Privacy Policy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative min-h-[60vh] -mt-13 lg:min-h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/header-background.png"
            alt="Floral background"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="relative mt-13 z-10 flex w-full flex-col">
          <LegalHeader />
        </div>
      </div>
      <Wrapper>
        <div className="max-w-8xl py-16">
          <div className="flex flex-col sm:flex-row gap-12">
            <div className="w-full sm:w-3/5 lg:w-4/6">{children}</div>
            <div className="hidden sm:block sm:w-2/6 lg:w-2/8 sm:sticky sm:top-8 self-start">
              <div className="p-6">
                <h2 className="text-[20px] font-medium mb-6 mt-2">
                  On this page
                </h2>
                <TableOfContents />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
