import type { SVGProps } from "react";

interface VectorProps extends SVGProps<SVGSVGElement> {
  color?: string;
  className?: string;
  strokeWidth?: number;
}

const ArrowRight = ({
  strokeWidth,
  className,
  ...props
}: VectorProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={9}
    fill="none"
    className={className}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth || 2}
      d="M1 4.502h5.516L10 4.501m0 0L6.972 1M10 4.5 6.972 8"
    />
  </svg>
);
export { ArrowRight };
