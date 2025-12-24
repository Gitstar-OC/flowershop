import { cn } from "@/lib/utils"

interface HeaderProps {
  title: string
  description?: string
  className?: string
}

export default function Header({
  title,
  description,
  className,
}: HeaderProps) {
  return (
    <section
      className={cn(
        "flex flex-col justify-center items-center w-full gap-3.75",
        className
      )}
    >
      <h1 className={cn(
        "text-center text-[28px]/[30px] sm:text-[30px]/[32px] md:text-[34px]/[34px] lg:text-[40px]/[40px] font-medium max-w-4xl text-balance",
      )}>
        {title}
      </h1>
      <p className={cn(
        "text-center text-[16px] text-[#333] sm:text-[18px] md:text-[20px] lg:text-[22px] mt-6 lg:mt-2 md:mt-3 tracking-[0.1px] max-w-3xl text-balance",
      )}>
        {description}
      </p>
    </section>
  )
}