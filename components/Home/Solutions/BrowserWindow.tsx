"use client";

import React from "react";

export interface StatsProps {
  title: string;
  miniTitle: string;
  description: string;
}

export type StatsPosition = "floating-left" | "floating-right";

interface BrowserWindowProps {
  windowTitle: string;
  children: React.ReactNode;
  stats?: StatsProps[];
  statsPosition?: StatsPosition;
  insidePercentage?: number;
  atPercent?: number;
  index?: number;
}

export const Stats = ({ title, miniTitle, description }: StatsProps) => {
  return (
    <div className="w-55 rounded-[10px] bg-white px-4 py-2 border input">
      <h4 className="text-[#666]">{miniTitle}</h4>
      <h3 className="mt-1 heading-small">{title}</h3>
      <p className="mt-1 mini-text">{description}</p>
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

export default function BrowserWindow({
  windowTitle,
  children,
  stats = [],
  statsPosition = "floating-right",
  insidePercentage = 0,
  atPercent = 35,
  index = 0,
}: BrowserWindowProps) {
  const inside = Math.min(100, Math.max(0, insidePercentage));
  const at = Math.min(100, Math.max(0, atPercent));


  const TITLE_HEIGHT = 48;
  const BASE_TOP = 96;

  const windowZ = 100 + index;
  const statsZ = windowZ + 50;

  return (
    <div
      className="sticky flex justify-center py-24"
      style={{
        top: BASE_TOP + index * 96,
        zIndex: windowZ,
      }}
    >
      <div className="relative">
        {stats.length > 0 && (
          <div
            className="absolute flex flex-col gap-4"
            style={{
              top: `${at}%`,
              zIndex: statsZ,
              transform:
                statsPosition === "floating-right"
                  ? `translate(${inside}%, -50%)`
                  : `translate(-${inside}%, -50%)`,
              right: statsPosition === "floating-right" ? 0 : "auto",
              left: statsPosition === "floating-left" ? 0 : "auto",
            }}
          >
            {stats.map((s, i) => (
              <Stats key={i} {...s} />
            ))}
          </div>
        )}

        <div className="relative w-[560px] h-[420px] overflow-hidden rounded-[12px] border bg-white shadow">
          <div className="relative flex h-12 items-center border-b bg-white px-4">
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
