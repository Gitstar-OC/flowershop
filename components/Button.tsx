import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "./Vector";
import Link from "next/link";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[7px]  px-3 md:px-4 md:py-1.5 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default:
          "border text-4/5 active:scale-98 select-none border-[#08F] button-selection bg-[linear-gradient(to_bottom,rgba(0,136,255,0.7)_0%,rgba(0,136,255,0.7)_18%,rgba(0,136,255,0.75)_36%,rgba(0,136,255,1)_66%,#0077ff_100%)] hover:bg-[#0088FF] text-white font-semibold transition-all duration-200 ease-linear",
        ghost: "text-[#333] active:scale-98 hover:bg-[#f3f3f3] select-none font-medium",
        secondary:
          "border active:scale-98 select-none text-[#666] hover:text-[#444] border-none bg-[#f3f3f3] text-center ",
      },
      size: {
        default: "h-8",
        sm: "h-7 rounded-md px-3",
        lg: "h-9 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {variant === "secondary" ? (
          <>
            {children}{" "}
            <ArrowRight
              color="#888"
              strokeWidth={2}
              className="ml-2 mt-px transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

interface ButtonGroupProps {
  primaryChildren: React.ReactNode;
  secondaryChildren: React.ReactNode;
  primaryHref?: string;
  secondaryHref?: string;
}

const ButtonGroup = ({
  primaryChildren,
  secondaryChildren,
  primaryHref = "/",
  secondaryHref = "/",
}: ButtonGroupProps) => {
  return (
    <div className="flex items-center justify-center gap-2">
      <Link className={buttonVariants({})} href={primaryHref}>
        {primaryChildren}
      </Link>
      <Link
        className={cn(buttonVariants({ variant: "secondary" }), "group")}
        href={secondaryHref}
      >
        {secondaryChildren}{" "}
        <ArrowRight className="ml-2 mt-px group-hover:stroke-[#333] transition-transform duration-200 group-hover:translate-x-0.5" />{" "}
      </Link>
    </div>
  );
};

export { Button, buttonVariants, ButtonGroup };
