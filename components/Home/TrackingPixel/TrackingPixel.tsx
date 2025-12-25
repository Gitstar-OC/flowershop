"use client";

import Header from "@/components/Header";
import { ButtonGroup } from "@/components/Button";
import { InteractiveGridPattern } from "./InteractiveGridPattern";

export default function TrackingPixel() {
  return (
    <div className="relative overflow-hidden border-y border-shadow min-h-144">
      <div className="absolute inset-0">
        <span
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 20%, hsla(210,100%,90%,0.85) 0%, #FBFBFB 80%)",
          }}
        />
        {/* grid that gets masked */}
        <div
          className="
        absolute inset-0
        mask-[radial-gradient(ellipse_at_50%_50%,white_0%,transparent_70%)]
      "
    /*
    - mask-image: Defines a grayscale/alpha image that decides what parts of the element are visible. 
    - radial-gradient(...): Generates that image procedurally instead of using a file.
    - Inside the gradient: 
    - circle: Shape of the mask is a circle (instead of ellipse).
    - at 50% 20%: Center of the circle; 50% = center horizontally, 20% = near top vertically.
​    - white 0%: At the very center, the mask is white → fully visible area (grid shows).
    - transparent 60%: By 60% radius, the mask fades to transparent → fully hidden area (grid disappears, only background seen).
    - Make it an ellipse by changing the circle part of your radial-gradient to ellipse 
    More - https://www.perplexity.ai/search/how-can-i-add-mask-here-with-t-bp.REFVqREejV2Jb02ExSQ#9
    */
        >
          <InteractiveGridPattern />
        </div>
      </div>

      <div className="relative z-10 min-h-144 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col justify-center gap-6">
        <Header
          title="Track Every Sale. Measure Every Success."
          description="Understand the full journey of your customers — from first click to final purchase."
        />
        <ButtonGroup
          primaryButtonChildren="Purchase Pixel"
          secondaryButtonChildren="Learn More"
          primaryButtonHref="/contact"
          secondaryButtonHref="/conversion"
          buttonVariant="ghost"
        />
      </div>
    </div>
  );
}
