"use client";

import Header from "@/components/Header";

export default function ConversionHeader() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 min-h-144 flex items-center pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pointer-events-auto">
        <Header
          width="wide"
          title="Purchase and Conversion Tracking"
          description="A simple way to understand which ads lead to visits, purchases, and meaningful activity on your site."
        />
      </div>
    </div>
  );
}
