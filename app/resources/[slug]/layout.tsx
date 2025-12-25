import type React from "react";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import ShareIcons from "@/components/Resources/ShareIcons";

type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
};

type ResourceMeta = {
  slug: string;
  title: string;
  date: string;
  team: string;
};

export default async function ResourceLayout({ children, params }: Props) {
  const { slug } = await params;

  if (slug === "[slug]") {
    return <Wrapper>{children}</Wrapper>;
  }

  const dir = path.join(process.cwd(), "content/resources");

  let currentData: any;
  let resources: ResourceMeta[] = [];

  try {
    const files = (await fs.readdir(dir)).filter((f) => f.endsWith(".mdx"));

    resources = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(dir, file);
        const source = await fs.readFile(filePath, "utf8");
        const { data } = matter(source);

        return {
          slug: file.replace(/\.mdx$/, ""),
          title: data.title,
          date: data.date,
          team: data.team,
        };
      })
    );

    // sort newest → oldest (same as listing page)
    resources.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const currentIndex = resources.findIndex(
      (r) => r.slug === slug
    );

    if (currentIndex === -1) notFound();

    currentData = resources[currentIndex];

    var previous =
      currentIndex < resources.length - 1
        ? resources[currentIndex + 1]
        : null;

    var next =
      currentIndex > 0
        ? resources[currentIndex - 1]
        : null;
  } catch {
    notFound();
  }

  return (
    <Wrapper>
      <section className="relative pt-60 pb-40">
        <div className="relative flex">
          {/* SIDEBAR */}
          <aside className="hidden lg:block w-60 pr-10">
            <div className="sticky top-32 flex flex-col gap-12 text-sm text-[#666]">
              <Link
                href="/resources"
                className="flex items-center gap-2 text-[#111] hover:opacity-70"
              >
                ← Resources
              </Link>

              <form className="space-y-3">
                <p className="text-xs uppercase tracking-wide">
                  Subscribe to our Newsletter
                </p>

                <div className="flex gap-2">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email address"
                    className="h-9 w-full rounded border border-[#DDD] px-3 text-[13px] focus:outline-none focus:border-[#111]"
                  />
                  <button
                    type="submit"
                    className="h-9 rounded bg-[#E6F0FF] px-3 text-[12px] text-[#2563EB] hover:bg-[#DCE9FF]"
                  >
                    Subscribe
                  </button>
                </div>
              </form>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wide">
                  Share this article
                </p>
                <ShareIcons title={currentData.title} />
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex-1">
            <div className="mx-auto max-w-2xl">
              <h1 className="text-[36px] leading-[1.2] font-semibold text-[#111]">
                {currentData.title}
              </h1>

              <p className="mt-2 text-sm text-[#666]">
                {currentData.date} · {currentData.team}
              </p>

              <div className="mt-12">{children}</div>

              {/* PREVIOUS / NEXT */}
              <div className="mt-20 flex justify-between border-t pt-8">
                {previous ? (
                  <Link
                    href={`/resources/${previous.slug}`}
                    className="flex items-center gap-2 rounded border px-4 py-2 text-sm text-[#666] hover:text-[#111]"
                  >
                    ← {previous.title}
                  </Link>
                ) : (
                  <span />
                )}

                {next ? (
                  <Link
                    href={`/resources/${next.slug}`}
                    className="flex items-center gap-2 rounded border px-4 py-2 text-sm text-[#666] hover:text-[#111]"
                  >
                    {next.title} →
                  </Link>
                ) : (
                  <span />
                )}
              </div>
            </div>
          </main>
        </div>
      </section>
    </Wrapper>
  );
}
