import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import MarkdownContent from "@/components/MarkdownContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "[slug]") {
    return {
      title: "Article Not Found",
    };
  }

  try {
    const file = path.join(process.cwd(), "content/resources", `${slug}.mdx`);
    const source = await fs.readFile(file, "utf8");
    const { data } = matter(source);

    return {
      title: data.title,
      description: data.description || data.title,
    };
  } catch {
    return {
      title: "Article Not Found",
    };
  }
}

export default async function ResourcesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "[slug]") notFound();

  let content;
  try {
    const file = path.join(process.cwd(), "content/resources", `${slug}.mdx`);
    const source = await fs.readFile(file, "utf8");
    ({ content } = matter(source));
  } catch {
    notFound();
  }

  return (
    <div className="prose prose-neutral max-w-none">
      <MarkdownContent content={content} />
    </div>
  );
}
