import type { ComponentPropsWithoutRef } from "react"
import Link from "next/link"
import { highlight } from "sugar-high"

type HeadingProps = ComponentPropsWithoutRef<"h1">
type ParagraphProps = ComponentPropsWithoutRef<"p">
type ListProps = ComponentPropsWithoutRef<"ul">
type ListItemProps = ComponentPropsWithoutRef<"li">
type AnchorProps = ComponentPropsWithoutRef<"a">
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="font-medium text-xl sm:text-2xl pt-8 sm:pt-12 mb-3 sm:mb-4 text-neutral-900" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-neutral-900 text-2xl sm:text-[28px] md:text-[32px] font-semibold mt-6 sm:mt-8 mb-2 sm:mb-3"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3 className="text-neutral-900 text-lg sm:text-xl font-medium mt-6 sm:mt-8 mb-2 sm:mb-3" {...props} />
  ),
  h4: (props: HeadingProps) => (
    <h4 className="text-neutral-900 text-base sm:text-lg font-medium mt-4 sm:mt-6 mb-1.5 sm:mb-2" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p className="text-neutral-800 text-[15px] sm:text-[16px] md:text-[18px] leading-relaxed mb-3 sm:mb-4" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol className="text-neutral-800 list-decimal pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 mb-3 sm:mb-4" {...props} />
  ),
  ul: (props: ListProps) => (
    <ul className="text-neutral-800 list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 mb-3 sm:mb-4" {...props} />
  ),
  li: (props: ListItemProps) => <li className="pl-1 text-[15px] sm:text-[16px] md:text-[18px]" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => <em className="font-medium text-neutral-900" {...props} />,
  strong: (props: ComponentPropsWithoutRef<"strong">) => <strong className="font-semibold text-neutral-900" {...props} />,
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-600 underline underline-offset-2 decoration-blue-300 hover:text-blue-800 hover:decoration-blue-500 transition-colors"

    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      )
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      )
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} {...props}>
        {children}
      </a>
    )
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<"code">) => {
    const codeHTML = highlight(children as string)
    return (
      <code
        dangerouslySetInnerHTML={{ __html: codeHTML }}
        className="bg-neutral-100 px-1.5 py-0.5 rounded text-[14px] sm:text-[15px] md:text-[16px] font-mono"
        {...props}
      />
    )
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table className="w-full border-collapse mb-4 text-[14px] sm:text-[15px] md:text-[16px]">
      <thead>
        <tr className="bg-neutral-100">
          {data.headers.map((header, index) => (
            <th key={index} className="border border-neutral-300 px-2 sm:px-4 py-1.5 sm:py-2 text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-neutral-50"}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border border-neutral-300 px-2 sm:px-4 py-1.5 sm:py-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-4 border-neutral-300 pl-3 sm:pl-4 py-1 text-neutral-700 italic my-3 sm:my-4 text-[15px] sm:text-[16px] md:text-[17px]"
      {...props}
    />
  ),
}

declare global {
  type MDXProvidedComponents = typeof components
}

export function useMDXComponents(): MDXProvidedComponents {
  return components
}