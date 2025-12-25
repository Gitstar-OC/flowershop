"use client";

import ReactMarkdown from "react-markdown";
import Link from "next/link";

export default function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="text-black">
      <ReactMarkdown
        components={{
          p: ({ children, ...props }) => (
            <p
              className="text-[16px] sm:text-[16px] md:text-[20px] leading-relaxed mb-3 sm:mb-4"
              {...props}
            >
              {children}
            </p>
          ),

          ol: (props) => (
            <ol
              className="list-decimal pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 mb-3 sm:mb-4"
              {...props}
            />
          ),

          ul: (props) => (
            <ul
              className="list-disc pl-4 sm:pl-5 space-y-1.5 sm:space-y-2 mb-3 sm:mb-4"
              {...props}
            />
          ),

          li: (props) => (
            <li
              className="pl-1 text-[15px] sm:text-[16px] md:text-[18px]"
              {...props}
            />
          ),

          em: (props) => <em className="font-medium" {...props} />,

          strong: (props) => (
            <strong className="font-semibold" {...props} />
          ),

          a: ({ href, children, ...props }) => {
            const className = "text-red-500 hover:underline transition-all";

            if (href?.startsWith("/")) {
              return (
                <Link href={href} className={className}>
                  {children}
                </Link>
              );
            }

            return (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                {...props}
              >
                {children}
              </a>
            );
          },

          code: ({ children }) => (
            <pre className="bg-neutral-800 p-4 rounded overflow-x-auto mb-4">
              <code className="text-[14px] sm:text-[15px] md:text-[16px] font-mono text-neutral-100">
                {children}
              </code>
            </pre>
          ),

          blockquote: (props) => (
            <blockquote
              className="border-l-4 border-neutral-700 pl-4 italic my-4 text-[15px] sm:text-[16px] md:text-[17px]"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
