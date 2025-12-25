"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Header from "../Header";

const services = [
  {
    title: "Shop",
    short: "Drive direct conversions with a product-first shopping experience.",
    content:
      "Mobile shopping is taking off. Our product locator gives cannabis advertisers the opportunity to drive direct conversion by providing consumers with the names and location of surrounding dispensaries that carry the exact products they want. With 8,000+ dispensaries and 4 million menu items, we match your product availability to the nearest dispensaries.",
  },
  {
    title: "Display",
    short: "High-impact placements across premium publishers.",
    content:
      "Display advertising allows cannabis brands to reach consumers at scale while maintaining compliance and brand safety across premium environments.",
  },
  {
    title: "Native",
    short: "Seamlessly blended placements for trust and engagement.",
    content:
      "Native advertising integrates directly into editorial environments, increasing credibility while driving measurable performance.",
  },
  {
    title: "Audio",
    short: "Reach listeners during high-attention moments.",
    content:
      "Audio advertising connects brands with cannabis consumers across streaming platforms and podcasts when they are most engaged.",
  },
  {
    title: "CTV",
    short: "Storytelling on the biggest screen.",
    content:
      "Connected TV delivers immersive storytelling with precise targeting on premium, brand-safe inventory.",
  },
  {
    title: "Video",
    short: "Motion-driven formats built for attention.",
    content:
      "Video advertising drives awareness and recall through rich, motion-based storytelling optimized for performance.",
  },
];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const service = services[active];
  const modalRef = useRef<HTMLDivElement>(null);
  const [modalHeight, setModalHeight] = useState(0);

  useEffect(() => {
    if (modalRef.current) {
      setModalHeight(modalRef.current.offsetHeight);
    }
  }, [active]);

  return (
    <section className="relative w-full bg-[#fafafa] pt-20" style={{ paddingBottom: (modalHeight + 50)/3 }}>
      <div className="flex justify-center mb-20">
        <Header
          title="Ready to take your 
brand to the next level."
          description="Choose your campaign goal and we’ll help you launch compliant ads that reach real cannabis consumers"
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* TABLE SYSTEM */}
        <div className="relative bg-[#fcfcfc] border border-[#dddddd] rounded-[10px] overflow-visible">
          <div className="grid grid-cols-[300px_1fr]">
            {/* LEFT TABLE — UNCHANGED */}
            <div className="outline outline-[#dddddd] rounded-[10px]">
              {services.map((item, index) => {
                const isActive = index === active;
                return (
                  <div
                    key={item.title}
                    onClick={() => setActive(index)}
                    className={`px-8 py-3 cursor-pointer rounded-xl ${
                      isActive ? "bg-white font-semibold" : "bg-[#fafafa]"
                    }`}
                  >
                    <div className="paragraph">{item.title}</div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN BASE (NO HEIGHT EFFECT) */}
            <div className="relative" />
          </div>

          {/* ABSOLUTE DIALOG (OUT, ABOVE MASK, NO LAYOUT IMPACT) */}
          <div ref={modalRef} className="absolute -top-8 right-0 w-150 z-20">
            <div className="relative shadow rounded-[10px] p-6 bg-white max-h-[520px] overflow-y-auto">
              <div className="big-paragraph mb-3">{service.title}</div>

              <Image
                width={400}
                height={200}
                src={`/assets/images/${service.title}.png`}
                alt="service"
              />

              <p className="mt-4 text-[18px] leading-8 text-[#333]">
                {service.content}
              </p>
            </div>
          </div>

          {/* TABLE MASK — CARD ABOVE THIS */}
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-10 bg-linear-to-t from-[#fafafa] to-transparent z-10" />
        </div>
      </div>

      {/* GLOBAL MASK */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-32 bg-linear-to-t from-[#fafafa] to-transparent" />
    </section>
  );
}
