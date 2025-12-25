"use client";

import Header from "@/components/Header";
import { InteractiveGridPattern } from "@/components/InteractiveGridPattern";

export default function ConversionHeader() {
  return (
    <div className="relative min-h-144 flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <Header
          width="wide"
          title="Purchase and Conversion Tracking"
          description="A simple way to understand which ads lead to visits, purchases, and meaningful activity on your site."
        />
      </div>
    </div>
  );
}
