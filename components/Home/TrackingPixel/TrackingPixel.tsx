import Header from "@/components/Header";
import { ButtonGroup } from "@/components/Button";
import { GridPattern } from "./GridPattern";
import { cn } from "@/lib/utils";

const TrackingPixel = () => {
  return (
    <div className="relative overflow-hidden border-y border-shadow">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <span
          className="absolute inset-0 xl:scale-110 z-[-1] h-[35rem] max-h-[80vh] -mt-60 overflow-hidden"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 10%, hsla(210, 100%, 90%, 0.85) 0%, #FBFBFB 80%)",
          }}
        >
          <GridPattern
            squares={[
              [7, 7],
              [8, 12],
              [18, 5],
              [19, 10],
              [5, 8],
              [9, 10],
              [16, 7],
              [21, 12],
              [6, 5],
              [17, 3],
            ]}
            className={cn(
              "fill-blue-500/15 stroke-blue-400/10",
              "[mask-image:radial-gradient(450px_circle_at_center,#FCFCFC,transparent)]",
              "absolute -top-[15%] inset-x-[5%] w-[90%] h-[140%] skew-y-12"
            )}
          />
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[36rem] px-4 md:px-8 lg:px-16 max-w-7xl mx-auto flex flex-col justify-center gap-6">
        <Header
          title="Track Every Sale. Measure Every Success."
          description="Understand the full journey of your customers — from first click to final purchase. Improve your campaigns with real data, not guesses."
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
};

export default TrackingPixel;
