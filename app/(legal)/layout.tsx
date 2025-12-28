import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "../globals.css"
import Image from "next/image"
import TableOfContents from "@/components/legal/table-of-contents"
import LegalHeader from "@/components/legal/LegalHeader"

const geist = Geist({ subsets: ["latin-ext"], weight: ["400", "600"] })

export const metadata: Metadata = {
  title: "Flowershop Media Legal",
  description: "Flowershop Media Legal - Terms of Use and Privacy Policy",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="relative min-h-[60vh] lg:min-h-[80vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/header-background.png" alt="Floral background" fill priority className="object-cover" />
        </div>

        <div className="relative z-10 flex w-full flex-col">
          <LegalHeader />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:px-8 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-12">
          <div className="w-full sm:w-3/5 lg:w-4/6">{children}</div>
          <div className="hidden sm:block sm:w-2/6 lg:w-2/8 sm:sticky sm:top-8 self-start">
            <div className="p-6">
              <h2 className="text-[20px] font-medium mb-6 mt-2">On this page</h2>
              <TableOfContents />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
