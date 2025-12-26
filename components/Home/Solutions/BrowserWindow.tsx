"use client";

import React from "react";

export interface StatsProps {
  title: string;
  miniTitle: string;
  description: string;
}

export type StatsPosition = "floating-right" | "floating-left";

export const Stats = ({ title, miniTitle, description }: StatsProps) => {
  return (
    <div className="w-[220px] rounded-[10px] bg-white px-5 py-4 border shadow-xl">
      <h4 className="text-xs text-[#666]">{miniTitle}</h4>
      <h3 className="mt-1 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-[#777] leading-snug">{description}</p>
    </div>
  );
};

const MacButton = ({ color }: { color: "red" | "yellow" | "green" }) => {
  const colors = {
    red: "bg-[#ff5f57]",
    yellow: "bg-[#febc2e]",
    green: "bg-[#28c840]",
  };

  return <div className={`h-3.5 w-3.5 rounded-full ${colors[color]}`} />;
};

interface BrowserWindowProps {
  windowTitle: string;
  children: React.ReactNode;
  stats?: StatsProps[];
  statsPosition?: StatsPosition;
}

export default function BrowserWindow({
  windowTitle,
  children,
  stats = [],
  statsPosition = "floating-right",
}: BrowserWindowProps) {
  const hasStats = stats.length > 0;

  return (
    <div className="relative flex justify-center py-24">
      <div className="relative">
        {hasStats && (
          <div
            className={`absolute z-30 flex flex-col gap-4 top-14 ${
              statsPosition === "floating-right"
                ? "right-0 translate-x-[35%] -translate-y-[25%]"
                : "left-0 -translate-x-[35%] -translate-y-[25%]"
            }`}
          >
            {stats.map((stat, i) => (
              <Stats key={i} {...stat} />
            ))}
          </div>
        )}

        <div className="relative z-10 w-[560px] h-[420px] overflow-hidden rounded-[12px] border bg-white shadow-2xl">
          <div className="relative flex h-12 items-center border-b bg-[#fafafa] px-4">
            <div className="flex gap-2">
              <MacButton color="red" />
              <MacButton color="yellow" />
              <MacButton color="green" />
            </div>
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-sm text-[#666]">
                {windowTitle}
              </span>
            </div>
          </div>

          <div className="p-6 h-[calc(100%-3rem)] overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
