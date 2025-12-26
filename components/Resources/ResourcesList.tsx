import Link from "next/link";
import Wrapper from "@/components/Wrapper";

interface Resource {
  title: string;
  description: string;
  slug: string;
  date: string;
  team: string;
}

interface ResourceListProps {
  resources: Resource[];
}

export function ResourceList({ resources }: ResourceListProps) {
  return (
    <Wrapper>
      <section className="relative flex justify-center">
        {/* Sheet container */}
        <div className="relative -top-8 w-full max-w-180 space-y-5 sm:px-0">
          {resources.map((article) => (
            <Link
              key={article.slug}
              href={`/resources/${article.slug}`}
              className="block"
            >
              <article className="rounded-2xl input shadow-hover p-6 bg-white">
                <h3 className="paragraph text-center sm:text-left">
                  {article.title}
                </h3>

                <p className="mt-2 mini-text text-wrap">
                  {article.description}
                </p>

                <div className="input-label text-[#333] mt-3 text-center sm:text-left">
                  By {article.team} · {article.date}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </Wrapper>
  );
}
