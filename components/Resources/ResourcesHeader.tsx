import Header from "@/components/Header";

export default function ResourcesHeader() {
  return (
    <div className="fixed inset-x-0 top-0 z-10 min-h-144 flex items-center pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pointer-events-auto">
        <Header
          title="Resources to inspire new ideas and better performance."
        />
      </div>
    </div>
  );
}
