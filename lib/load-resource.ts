import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

export async function loadResource(slug: string) {
  const file = path.join(process.cwd(), "content/resources", `${slug}.mdx`);
  const source = await fs.readFile(file, "utf8");
  return matter(source);
}
