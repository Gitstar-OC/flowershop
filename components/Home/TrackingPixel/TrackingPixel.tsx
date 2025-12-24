"use client";

import Header from "@/components/Header";
import { ButtonGroup } from "@/components/Button";
import { InteractiveGridPattern } from "./InteractiveGridPattern";

export default function TrackingPixel() {
  return (
    <div className="relative overflow-hidden border-y border-shadow min-h-144">
      {/* Background */}
      <div className="absolute inset-0">
        <span
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 20%, hsla(210,100%,90%,0.85) 0%, #FBFBFB 80%)",
          }}
        />

        {/* GRID */}
        <InteractiveGridPattern />

        {/* EDGE / CORNER MASK ABOVE GRID */}
        <span
          aria-hidden
          className="
            pointer-events-none
            absolute inset-0
            z-[1]
            bg-[linear-gradient(to_right,#FBFBFB_0%,transparent_12%,transparent_88%,#FBFBFB_100%),
                linear-gradient(to_bottom,#FBFBFB_0%,transparent_15%,transparent_85%,#FBFBFB_100%)]
          "
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 min-h-144 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col justify-center gap-6">
        <Header
          title="Track Every Sale. Measure Every Success."
          description="Understand the full journey of your customers — from first click to final purchase."
        />
        <ButtonGroup
          primaryButtonChildren="Purchase Pixel"
          secondaryButtonChildren="Learn More"
          primaryButtonHref="/Contact"
          secondaryButtonHref="/Conversion"
        />
      </div>
    </div>
  );
}
