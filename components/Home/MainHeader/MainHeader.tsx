import { ButtonGroup } from "@/components/Button";
import { DappledLight } from "./DappledLight";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

export default function MainHeader() {
  return (
    <main className="relative -mt-13 overflow-hidden bg-accent">
      {/* Changed: Removed 'justify-center' so we can control spacing manually inside */}
      <section className="relative min-h-screen flex flex-col items-center">
        <DappledLight />
        
        <Wrapper className="h-full">
          {/* New Container: Spans full screen height to manage vertical layout */}
          <div className="flex flex-col min-h-screen pt-20 pb-6">
            
            {/* 1. Main Text Content: flex-1 allows this to grow and center itself in the available space */}
            <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center px-6">
              <span className="mb-6 rounded-full border px-4 py-1 text-sm text-gray-600 bg-white/50 backdrop-blur">
                Now advertising on Twitter
              </span>

              <h1 className="text-[60px]/[60px] text-balance font-bold max-w-3xl">
                Where Cannabis Brands Meet Their Audience
              </h1>

              <p className="mt-4 mb-3 big-paragraph text-[#444] leading-tight">
                We connect cannabis brands to cannabis consumers via online
                advertising.
              </p>
              <ButtonGroup
                primaryButtonChildren="Get in Touch"
                secondaryButtonChildren="Learn More"
                primaryButtonHref="/contact"
                secondaryButtonHref="#solutions"
                buttonVariant="ghost"
              />
            </div>

            {/* 2. TrustedBy Section: Moved outside the text div, sitting at the bottom */}
            <section className="w-full z-10 mt-auto">
              <TrustedBy className="py-8 opacity-80" />
            </section>
            
          </div>
        </Wrapper>
      </section>
    </main>
  );
}

interface TrustedLogosProps {
  className?: string;
  logoColor?: string;
}

export function TrustedBy({ className = "" }: TrustedLogosProps) {
  const logos = [
    { name: "Curaleaf", src: "/logos/Curaleaf.png", width: 120, height: 40 },
    { name: "Panacea", src: "/logos/Panacea.png", width: 140, height: 40 },
    {
      name: "High Supply",
      src: "/logos/HighSupply.png",
      width: 160,
      height: 50,
    },
    {
      name: "Sunnny Side",
      src: "/logos/SunnySide.png",
      width: 150,
      height: 40,
    },
    { name: "Mi-pod", src: "/logos/MiPod.png", width: 120, height: 40 },
    {
      name: "Klutch Cannabis",
      src: "/logos/Klutch.png",
      width: 120,
      height: 40,
    },
    { name: "Good News", src: "/logos/GoodNews.png", width: 150, height: 40 },
    { name: "Conbud", src: "/logos/Conbud.png", width: 140, height: 40 },
  ];

  return (
    <div className={`flex flex-col lg:flex-row items-stretch ${className}`}>
      <div className="mb-6 md:mb-0 md:mr-2">
        <p className="text-[#333] text-balance max-w-50 mb-4 lg:mb-0 text-center lg:text-left text-[16px] leading-[19px] tracking-[-0.4px]">
          Trusted by top cannabis brands around the world
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8 flex-1 gap-y-4">
        {logos.map((logo) => (
          <div key={logo.name} className={`flex items-center justify-center`}>
            <div
              className="relative"
              style={{ width: logo.width, height: logo.height }}
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="w-full h-full object-contain scale-90"
                style={{
                  filter: "brightness(0) saturate(100%)",
                  WebkitFilter: "brightness(0) saturate(100%)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}