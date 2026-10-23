import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import RouteMap from "@/components/RouteMap";
import PersonCard from "@/components/PersonCard";
import { Band, H2, Prose } from "@/components/Shell";
import { asset } from "@/lib/asset";
import { people } from "@/content/people";
import { groups as logGroups, counts } from "@/content/progress";

const core = people.filter((p) => p.group === "cap");
const tab = people.filter((p) => p.group === "tab");

export default function Home() {
  return (
    <>
      <Hero />

      <Band tone="navy">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-14">
          <div>
            <H2 sub="Nineteen advisors in eighteen countries are telling their circuits about Delhi. Each dot is one of them.">
              The network
            </H2>
            <Link href="/tournament/#reach" className="mt-5 inline-block border-b border-gold/50 pb-0.5 text-[14.5px] text-gold hover:border-gold">
              More on the tournament
            </Link>
          </div>
          <RouteMap />
        </div>
      </Band>

      <Band tone="cream">
        <H2 sub="Three chief adjudicators from India, Australia and South Korea, and a tab team led by Jemma Griffin, who ran the tab at Australs 2026.">
          The team
        </H2>
        <div className="mt-8 grid gap-7 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {core.concat(tab).map((p) => (
            <PersonCard key={p.slug} p={p} size="md" />
          ))}
        </div>
        <Link href="/people/" className="mt-8 inline-block border-b border-navy/40 pb-0.5 text-[14.5px] text-navy hover:border-navy">
          All thirty-three people
        </Link>
      </Band>

      <Band>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <H2 sub="Australs 2027 will be hosted at IIT Delhi, Hauz Khas.">
              Delhi in late June
            </H2>
            <Prose className="mt-6">
              <p>
                Temperatures at the time shall range between 35 and 40 degrees celsius, with monsoon
                typically breaking over the city during the week. All debating rooms are
                air-conditioned. We recommend participants to carry their own water bottles and
                umbrellas given the weather conditions.
              </p>
            </Prose>
            <ul className="mt-7 border-t border-ink/15">
              {[
                ["The venue", "Lecture theatres and the auditorium at IIT Delhi", "/delhi/#venue"],
                ["Accommodation", "The Grand New Delhi, in Vasant Kunj", "/delhi/#stay"],
                ["The city", "Nine things to do on a free morning", "/delhi/#city"],
                ["Getting here", "The airport, and getting from it to the hotel", "/delhi/#getting-here"],
                ["Visas", "How to get your Indian visa", "/visa/"],
                ["In the news", "Australs 2027 in the press", "/media/"],
              ].map(([h, p, href]) => (
                <li key={h}>
                  <Link href={href} className="rec grid gap-x-5 px-2 py-2.5 sm:grid-cols-[minmax(0,10rem)_1fr]">
                    <span className="text-[14.5px]">{h}</span>
                    <span className="dim text-[13px] opacity-80">{p}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3 self-start">
            <Image src={asset("/img/photos/iitd-main-building-2.webp")} alt="The main building at IIT Delhi" width={1400} height={1050} className="box aspect-[3/4] w-full object-cover p-1" unoptimized />
            <Image src={asset("/img/photos/grand-exterior-pool.webp")} alt="The Grand New Delhi seen across the pool" width={1400} height={933} className="box mt-8 aspect-[3/4] w-full object-cover p-1" unoptimized />
          </div>
        </div>
      </Band>

      <Band tone="navy">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] lg:gap-14">
          <div>
            <H2 sub="These are the things we have not decided yet, each with the name of the person who will answer it.">
              Still open
            </H2>
            <div className="mt-6 flex gap-7">
              {[
                [counts.done, "live"],
                [counts.waiting, "open"],
                [counts.later, "second build"],
              ].map(([n, l]) => (
                <div key={l as string}>
                  <p className="datum text-[2rem] leading-none text-gold">{n as number}</p>
                  <p className="rail mt-1 text-cream/74">{l as string}</p>
                </div>
              ))}
            </div>
            <Link href="/progress/" className="mt-6 inline-block border border-gold/60 bg-gold/15 px-5 py-2.5 text-[14.5px] text-gold transition-colors duration-150 hover:bg-gold hover:text-ink">
              Read the build log
            </Link>
          </div>
          <ul className="border-t border-cream/15 self-start">
            {logGroups[1].items.slice(0, 8).map((i) => (
              <li key={i.what}>
                <Link href="/progress/" className="rec grid gap-x-5 gap-y-0.5 px-2 py-2.5 sm:grid-cols-[1fr_auto] sm:items-baseline">
                  <span className="text-[14px]">{i.what}</span>
                  <span className="accent datum text-[11.5px] text-gold sm:text-right">{i.owner}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Band>
    </>
  );
}
