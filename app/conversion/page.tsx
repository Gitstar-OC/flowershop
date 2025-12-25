import ConversionHeader from "@/components/Conversion/ConversionHeader";
import ConversionCTA from "@/components/Conversion/ConversionCTA";
import { InteractiveGridPattern } from "@/components/InteractiveGridPattern";

export default function ConversionPage() {
  return (
    <main className="relative w-full">
      {/* FIXED HERO BACKGROUND */}
      <div className="fixed inset-0 -mt-13 z-0 overflow-hidden pointer-events-none">
        <span
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 20%, hsla(210,100%,90%,0.85) 0%, #FBFBFB 80%)",
          }}
        />
        <div className="absolute inset-0 mask-[radial-gradient(ellipse_at_50%_50%,white_0%,transparent_70%)]">
          <InteractiveGridPattern />
        </div>
      </div>

      {/* FIXED HEADER TEXT */}
      <ConversionHeader />

      {/* SPACE RESERVED FOR HERO */}
      <div className="h-[80svh]" />

      {/* FOREGROUND CONTENT */}
      <div className="relative z-20 rounded-t-[24px] bg-[#FBFBFB]">
        <ConversionCTA
          firstParagraph="Conversion tracking allows you to assess the effectiveness of your advertising campaigns by tracking the actions taken by people after interacting with your ads."
          secondParagraph="These conversion events not only allow you to report on campaign performance, but can also be used to improve ad targeting and optimization."
        />
      </div>
    </main>
  );
}
