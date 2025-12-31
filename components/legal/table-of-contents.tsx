"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"

type Heading = {
  id: string
  text: string
  level: number
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([])
  const [activeId, setActiveId] = useState<string>("")
  const tocRef = useRef<HTMLDivElement>(null)
  const activeItemRef = useRef<HTMLLIElement | null>(null)

  useEffect(() => {
    const contentContainer = document.querySelector(".lg\\:w-4\\/6")

    if (!contentContainer) return

    const headingElements = contentContainer.querySelectorAll("h1, h2, h3, h4, h5, h6")

    const headingData = Array.from(headingElements).map((heading) => {
      const level = Number.parseInt(heading.tagName.substring(1))

      if (!heading.id) {
        heading.id =
          heading.textContent?.toLowerCase().replace(/\s+/g, "-") ||
          `heading-${Math.random().toString(36).substring(2, 9)}`
      }

      return {
        heading: heading as HTMLElement,
        data: {
          id: heading.id,
          text: heading.textContent || "",
          level,
        }
      }
    })

    const extractedHeadings = headingData.map(h => h.data)
    // eslint-disable-next-line
    setHeadings(extractedHeadings)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting)

        if (visibleEntry) {
          setActiveId(visibleEntry.target.id)
        }
      },
      {
        rootMargin: "-100px 0px -80% 0px",
        threshold: 0,
      },
    )

    headingData.forEach(h => observer.observe(h.heading))

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (activeId && tocRef.current && activeItemRef.current) {
      const tocContainer = tocRef.current
      const activeItem = activeItemRef.current

      const containerTop = tocContainer.scrollTop
      const containerBottom = containerTop + tocContainer.clientHeight
      const itemTop = activeItem.offsetTop
      const itemBottom = itemTop + activeItem.clientHeight

      if (itemTop < containerTop || itemBottom > containerBottom) {
        const scrollPosition = itemTop - tocContainer.clientHeight / 2 + activeItem.clientHeight / 2

        tocContainer.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        })
      }
    }
  }, [activeId])

  return (
    <div ref={tocRef} className="toc-nav max-h-[calc(100vh-150px)] overflow-y-auto pr-1 hide-scrollbar">
      <ul className="space-y-3">
        {headings.map((heading) => (
          <li
            key={heading.id}
            ref={activeId === heading.id ? activeItemRef : null}
            className={`${heading.level > 2 ? "ml-4" : ""}`}
          >
            <Link
              href={`#${heading.id}`}
              className={`block transition-colors duration-200 ${
                activeId === heading.id ? "text-black font-medium" : "text-neutral-500 hover:text-neutral-800"
              }`}
            >
              {heading.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}