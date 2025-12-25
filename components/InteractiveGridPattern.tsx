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
  width = 56,
  height = 56,
  squares = [20, 14],
  className,
  ...props
}: GridProps) {
  const [cols, rows] = squares;
  const total = cols * rows;

  return (
    <svg
      viewBox={`0 0 ${width * cols} ${height * rows}`}
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
            animation: fade 42s ease-in-out infinite;
          }

          @keyframes fade {
            0%   { fill: transparent; }
            10%  { fill: rgba(59,130,246,0.22); }
            25%  { fill: transparent; }
            100% { fill: transparent; }
          }
        `}
      </style>

      {Array.from({ length: total }).map((_, i) => {
        const x = (i % cols) * width;
        const y = Math.floor(i / cols) * height;

        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={width}
            height={height}
            className="grid-cell"
            style={{ animationDelay: `${Math.random() * 32}s` }}
          />
        );
      })}
    </svg>
  );
}
