import Image from "next/image";
import { PageHead, Band, H2, Pending } from "@/components/Shell";
import { asset } from "@/lib/asset";
import { coverage } from "@/content/media";
import { contactEmail } from "@/content/site";

export const metadata = {
  title: "In the news",
  description: "Press coverage of India Australs 2027.",
};

export default function Media() {
  return (
    <>
      <PageHead
        kicker="In the news"
        title="Australs in the news"
        lede="What the press has written about India hosting Australs for the first time."
        facts={[{ k: "Press enquiries", v: contactEmail, href: `mailto:${contactEmail}` }]}
      />

      <Band>
        <H2 count={coverage.length ? `${coverage.length} articles` : undefined}>Coverage</H2>
        {coverage.length ? (
          <ul className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {coverage.map((c) => (
              <li key={c.url}>
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="group block">
                  {c.image && (
                    <div className="border border-ink/25 p-1.5 transition-colors duration-150 group-hover:border-navy">
                      <Image
                        src={asset(`/img/media/${c.image}.webp`)}
                        alt=""
                        width={800}
                        height={500}
                        className="aspect-[8/5] w-full object-cover"
                        unoptimized
                      />
                    </div>
                  )}
                  <p className="rail mt-3 text-navy">
                    {c.outlet} · {c.date}
                  </p>
                  <h3 className="mt-1.5 text-[1.15rem] leading-snug group-hover:text-navy">
                    {c.headline}
                  </h3>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-8 max-w-[68ch]">
            <Pending who="the Organising committee">The links to the coverage so far.</Pending>
          </div>
        )}
      </Band>
    </>
  );
}
