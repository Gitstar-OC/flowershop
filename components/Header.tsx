import { cn } from "@/lib/utils";

const HEADER_WIDTHS = {
  default: {
    title: "max-w-xl",
    description: "max-w-3xl",
  },
  narrow: {
    title: "max-w-lg",
    description: "max-w-2xl",
  },
  wide: {
    title: "max-w-2xl",
    description: "max-w-5xl",
  },
  full: {
    title: "max-w-5xl",
    description: "max-w-full",
  },
} as const;

interface HeaderProps {
  title: string;
  description?: string;
  className?: string;
  width?: keyof typeof HEADER_WIDTHS;
  variant?: "default" | "small";
}

export default function Header({
  title,
  description,
  className,
  width, 
  variant = "default",
}: HeaderProps) {
  const styles = HEADER_WIDTHS[width ?? "default"];

  return (
    <section
      className={cn("flex flex-col items-center gap-3.75 w-full", className)}
    >
      <h1 className={cn(variant === "default" ? "heading" : "heading-small", "text-center w-full mx-auto", styles.title)}>
        {title}
      </h1>

      {description && (
        <p
          className={cn(
            "subheading text-center w-full mx-auto",
            styles.description
          )}
        >
          {description}
        </p>
      )}
    </section>
  );
}
