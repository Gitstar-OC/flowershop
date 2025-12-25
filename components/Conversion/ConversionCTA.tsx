"use client";

import Wrapper from "@/components/Wrapper";
import { Chart01 } from "@/components/Conversion/Chart1";
import { Chart02 } from "@/components/Conversion/Chart2";
import { buttonVariants } from "@/components/Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ConversionCTAProps {
  firstParagraph: string;
  secondParagraph: string;
}

const ConversionCTA = ({
  firstParagraph,
  secondParagraph,
}: ConversionCTAProps) => {
  return (
    <Wrapper>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-x-16 items-center">
        <div className="flex flex-col gap-12 mt-10">
          <p className="paragraph">{firstParagraph}</p>

          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "secondary" }), "w-fit")}
          >
            Learn More
          </Link>
        </div>

        <div className="relative">
          <div className="border absolute -top-40 rounded-[15px] input w-full max-w-lg p-2 bg-white">
            <Chart01 />
          </div>
        </div>
      </section>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-x-16 items-center pb-32">
        <div className="border rounded-[15px] input w-full max-w-lg p-2 bg-white md:order-1 order-2">
          <Chart02 />
        </div>

        <div className="flex flex-col gap-12 md:order-2 order-1">
          <p className="paragraph">{secondParagraph}</p>

          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "default" }), "w-fit")}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default ConversionCTA;
