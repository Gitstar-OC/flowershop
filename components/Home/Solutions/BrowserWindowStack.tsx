"use client";

import React from "react";

export function BrowserWindowStack({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative space-y-[160px]">
      {React.Children.map(children, (child, index) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { index })
          : child
      )}
    </div>
  );
}
