"use client";

import { BsTwitterX, BsLinkedin } from "react-icons/bs";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareReddit } from "react-icons/fa6";

export default function ShareIcons({ title }: { title: string }) {
  const url = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const items = [
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: (
        <BsTwitterX className="h-5 w-5 hover:text-black translate-y-[0.5px]" />
      ),
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: (
        <BsLinkedin className="h-5 w-5 hover:text-[#0A66C2]  translate-y-[0.5px]" />
      ),
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <AiFillFacebook className="h-9 mt-[0.5px] w-6.5 hover:text-[#1877F2] translate-y-[-0.5px]" />
      ),
    },
    {
      label: "Reddit",
      href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      icon: (
        <FaSquareReddit className="h-5.75 mt-[0.5px] w-6.25 hover:text-[#FF4500] translate-y-[-0.5px]" />
      ),
    },
  ];

  return (
    <div className="flex items-center gap-2 ">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="h-10 w-8 flex items-center justify-center"
        >
          <span
            className={`flex  ${
              ["LinkedIn", "X"].includes(item.label) ? "px-1.5" : "px-1"
            } py-4 rounded-sm items-center justify-center h-5`}
          >
            {item.icon}
          </span>
        </a>
      ))}
    </div>
  );
}
