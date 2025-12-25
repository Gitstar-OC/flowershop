"use client";

import { BsTwitterX, BsLinkedin, BsFacebook, BsReddit } from "react-icons/bs";

export default function ShareIcons({ title }: { title: string }) {
  if (typeof window === "undefined") return null;

  const url = window.location.href;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const items = [
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <BsTwitterX className="h-4 w-4" />,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <BsLinkedin className="h-4 w-4" />,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <BsFacebook className="h-4 w-4" />,
    },
    {
      label: "Reddit",
      href: `https://www.reddit.com/submit?url=${encodedUrl}&title=${encodedTitle}`,
      icon: <BsReddit className="h-4 w-4" />,
    },
  ];

  return (
    <div className="flex gap-2">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="h-9 w-9 flex items-center justify-center rounded border border-[#DDD] text-[#111] hover:bg-[#F5F5F5]"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
