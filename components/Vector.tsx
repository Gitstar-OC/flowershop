import type { SVGProps } from "react";

const ArrowRight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={9}
    fill="none"
    {...props}
  >
    <path
      stroke="#888"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M1 4.502h5.516L10 4.501m0 0L6.972 1M10 4.5 6.972 8"
    />
  </svg>
);
export default ArrowRight;
