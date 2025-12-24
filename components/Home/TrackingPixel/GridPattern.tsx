import { useId } from "react";
import { cn } from "@/lib/utils";

interface GridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[x: number, y: number]>;
  strokeDasharray?: string;
  className?: string;
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}: GridPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          {/* THIS is the animation that actually works */}
          <animateTransform
            attributeName="patternTransform"
            type="translate"
            from="0 0"
            to={`${width} ${height}`}
            dur="120s"
            repeatCount="indefinite"
          />

          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>

      {/* grid */}
      <rect width="100%" height="100%" fill={`url(#${id})`} />

      {/* filled squares — NO color override */}
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy]) => (
            <rect
              key={`${sx}-${sy}`}
              x={sx * width + 1}
              y={sy * height + 1}
              width={width - 1}
              height={height - 1}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
