"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GridProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number];
  className?: string;
}

export function InteractiveGridPattern({
  width = 56,          // smaller boxes
  height = 56,         // smaller boxes
  squares = [20, 14],  // more columns/rows
  className,
  ...props
}: GridProps) {
  const [h, v] = squares;
  const total = h * v;

  return (
    <svg
      viewBox={`0 0 ${width * h} ${height * v}`}
      preserveAspectRatio="xMidYMid slice"
      className={cn(
        "absolute inset-0 w-full h-full scale-125 -skew-y-12 opacity-70",
        className
      )}
      {...props}
    >
      <style>
        {`
          .grid-cell {
            fill: transparent;
            stroke: rgba(96,165,250,0.18);
            animation: fade 40s ease-in-out infinite;
          }

          @keyframes fade {
            0%   { fill: transparent; }
            8%   { fill: rgba(59,130,246,0.22); }
            22%  { fill: transparent; }
            100% { fill: transparent; }
          }
        `}
      </style>

      {Array.from({ length: total }).map((_, i) => {
        const x = (i % h) * width;
        const y = Math.floor(i / h) * height;

        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={width}
            height={height}
            className="grid-cell"
            style={{
              animationDelay: `${Math.random() * 30}s`,
            }}
          />
        );
      })}
    </svg>
  );
}
