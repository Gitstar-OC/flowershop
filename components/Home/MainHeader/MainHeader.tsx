import { ButtonGroup } from "@/components/Button";
import { DappledLight } from "./DappledLight";
import Wrapper from "@/components/Wrapper";

export default function MainHeader() {
  return (
    <main className="relative -mt-13 overflow-hidden bg-accent">
      <section className="relative min-h-screen flex flex-col items-center justify-center">
        <DappledLight />
        <Wrapper>
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            <span className="mb-6 rounded-full border px-4 py-1 text-sm text-gray-600 bg-white/70 backdrop-blur">
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
          <section className="w-full z-10 border-t ">
            <div className="mx-auto max-w-6xl py-8 px-6 flex flex-wrap items-center justify-between gap-6 opacity-80">
              {/* logos here */}
            </div>
          </section>
          </div>

        </Wrapper>
      </section>
    </main>
  );
}
