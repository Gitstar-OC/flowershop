import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { ResourceList } from "@/components/Resources/ResourcesList";
import ResourcesHeader from "@/components/Resources/ResourcesHeader";
import Image from "next/image";

type Resource = {
  title: string;
  description: string;
  slug: string;
  date: string;
  team: string;
};

export default async function Page() {
  let resources: Resource[] = [];

  try {
    const dir = path.join(process.cwd(), "content/resources");
    const files = await fs.readdir(dir);

    const resourcesData = await Promise.all(
      files
        .filter((file) => file.endsWith(".mdx"))
        .map(async (file) => {
          const slug = file.replace(/\.mdx$/, "");
          const filePath = path.join(dir, file);
          const content = await fs.readFile(filePath, "utf8");
          const { data, content: fileContent } = matter(content);

          // Extract a short description from content if not provided in frontmatter
          let description = data.description || "";
          if (!description && fileContent) {
            description =
              fileContent
                .slice(0, 150)
                .replace(/[#*[\]]/g, "")
                .trim() + "...";
          }

          return {
            slug,
            title: data.title,
            date: data.date,
            team: data.team,
            description,
          };
        })
    );

    // Sort by date (newest first)
    resources = resourcesData.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  } catch (error) {
    console.error("Error loading resources:", error);
  }

  return (
    <main className="relative w-full">
      <div className="fixed inset-0 -mt-13 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/assets/Resources.png"
          alt=""
          width={1920}
          height={1080}
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-white/0 via-white/30 to-white/60" />
      </div>

      <ResourcesHeader />

      <div className="h-[85svh]" />

      <div className="relative z-20 rounded-t-[24px] bg-[#FBFBFB] input">
        <ResourceList resources={resources} />
      </div>
    </main>

  );
}
