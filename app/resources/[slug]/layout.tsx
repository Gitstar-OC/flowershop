import type React from "react";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import ShareIcons from "@/components/Resources/ShareIcons";
import { ArrowRight } from "@/components/Vector";

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

  let currentData: ResourceMeta;
  let resources: ResourceMeta[] = [];
  let previous: ResourceMeta | null = null;
  let next: ResourceMeta | null = null;

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

    const currentIndex = resources.findIndex((r) => r.slug === slug);

    if (currentIndex === -1) notFound();

    currentData = resources[currentIndex];

    previous =
      currentIndex < resources.length - 1 ? resources[currentIndex + 1] : null;

    next = currentIndex > 0 ? resources[currentIndex - 1] : null;
  } catch {
    notFound();
  }

  return (
    <Wrapper>
      <section className="relative pt-32 pb-40">
        <div className="relative flex">
          {/* SIDEBAR */}
          <aside className="hidden lg:block w-60">
            <div className="sticky top-32 flex flex-col gap-12 text-sm text-[#666]">
              <Link
                href="/resources"
                className="flex opacity-70 transition-opacity duration-300 hover:opacity-100 items-center gap-2 mini-text "
              >
                {/* <ArrowRight className=" rotate-180 scale-125 mt-1" /> */}
                Resources
              </Link>

              <div className="space-y-3">
                <p className="input-label">
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
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wide">
                  Share this article
                </p>
                <ShareIcons title={currentData.title} />
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="flex pl-20">
            <div className="mx-auto max-w-2xl">
              <h1 className="text-[36px] leading-[1.2] font-semibold text-[#111]">
                {currentData.title}
              </h1>

              <p className="mt-2 text-sm text-[#666]">
                {currentData.date} · {currentData.team}
              </p>

              <div className="mt-12">{children}</div>

              <div className="mt-20 pt-8">
                <div className={`grid gap-4 ${previous && next ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
                  {previous ? (
                    <Link
                      href={`/resources/${previous.slug}`}
                      className="group rounded-[10px] hover:bg-[#fafafa] bg-[#fcfcfc] input px-2 py-3 flex flex-col gap-1"
                    >
                      <span className="flex items-center text-[#444] gap-1 text-sm opacity-70">
                        <ArrowRight className="rotate-180" />
                        <span>Previous post</span>
                      </span>

                      <span className="mini-text leading-snug text-left">
                        {previous.title}
                      </span>
                    </Link>
                  ) : (
                    <span />
                  )}

                  {next ? (
                    <Link
                      href={`/resources/${next.slug}`}
                      className={`group rounded-[10px] bg-[#fcfcfc] hover:bg-[#fafafa] input px-2 py-3 flex flex-col gap-1 ${previous && next ? 'text-right md:ml-auto' : ''}`}
                    >
                      <span className="flex text-[#444] items-center justify-end gap-1 text-sm opacity-70">
                        <span>Next post</span>
                        <ArrowRight />
                      </span>

                      <span className="mini-text leading-snug text-right">
                        {next.title}
                      </span>
                    </Link>
                  ) : (
                    <span />
                  )}
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </Wrapper>
  );
}
