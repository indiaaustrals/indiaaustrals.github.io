import Link from "next/link";
import Image from "next/image";
import { PageHead, Band, SubNav, H2, Prose } from "@/components/Shell";
import RouteMap from "@/components/RouteMap";
import { asset } from "@/lib/asset";
import { site } from "@/content/site";
import { people } from "@/content/people";

export const metadata = { title: "The tournament" };

const sections = [
  { id: "what", label: "Australs" },
  { id: "reach", label: "The network" },
  { id: "organisers", label: "Organisers" },
];

export default function Tournament() {
  const caps = people.filter((p) => p.group === "cap");
  return (
    <>
      <PageHead
        kicker="The tournament"
        title="The tournament"
        lede="Since 1975, Australs or the Australasian Intervarsity Debating Championship, has been held every year at universities across Australasia and Asia. In 2027, it comes to India for the first time, hosted at IIT Delhi."
        facts={[
          { k: "Dates", v: site.datesLabel },
          { k: "Venue", v: `${site.venue}, ${site.city}`, href: "/delhi/#venue" },
        ]}
      />
      <SubNav items={sections} />

      <Band id="what">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <H2>Australs</H2>
            <Prose className="mt-6">
              <p>
                <a href="https://en.wikipedia.org/wiki/Australasian_Intervarsity_Debating_Championships">
                  <strong>The Australasian Intervarsity Debating Championships</strong>
                </a>{" "}
                (also known as &lsquo;Australs&rsquo;) is an annual debating championship for
                university teams from across the Asia Pacific region. It is the world&apos;s second
                largest debating tournament, after the{" "}
                <a href="https://en.wikipedia.org/wiki/World_Universities_Debating_Championship">
                  <strong>World Universities Debating Championship</strong>
                </a>{" "}
                (WUDC).
              </p>
              <p>
                It consists of eight preliminary rounds and the best performing teams proceed to the
                knockout rounds.
              </p>
              <p>
                The <strong>Indian Debating League</strong>, in conjunction with the{" "}
                <strong>IIT Delhi Debating Society</strong> is hosting the championship.
              </p>
            </Prose>
          </div>
          <div className="grid grid-cols-2 gap-3 self-start">
            <Image src={asset("/img/cards/idl.webp")} alt="The Indian Debating League at a closing ceremony" width={760} height={950} className="box w-full p-1" unoptimized />
            <Image src={asset("/img/cards/venue-debsoc.webp")} alt="The IIT Delhi Debating Society" width={760} height={950} className="box mt-8 w-full p-1" unoptimized />
          </div>
        </div>
      </Band>

      <Band id="reach" tone="navy">
        <H2 sub="Nineteen advisors in eighteen countries, across five regions. You can register from anywhere in the Asia Pacific, with or without an advisor in your country.">
          The network
        </H2>
        <div className="mt-8 min-w-0">
          <RouteMap />
        </div>
      </Band>

      <Band id="organisers" tone="cream">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <H2 sub="Two organisations run it together.">Organisers</H2>
            <Prose className="mt-6">
              <p>
                <strong>The Indian Debating League</strong> runs debating across Indian universities
                and schools, and has partnered with the Harvard College Debating Union on tournaments
                in India.
              </p>
              <p>
                <strong>The IIT Delhi Debating Society</strong> hosts the tournament on campus and
                runs the day-to-day: the desk, the rooms and the socials.
              </p>
            </Prose>
            <Link href="/people/" className="mt-6 inline-block border-b border-navy/40 pb-0.5 text-[14.5px] text-navy hover:border-navy">
              All thirty-three people
            </Link>
          </div>
          <ul className="border-t border-ink/15 self-start">
            {caps.concat(people.filter((p) => p.group === "tab")).map((p) => (
              <li key={p.slug}>
                <div className="grid gap-x-4 border-b border-ink/15 px-2 py-3 sm:grid-cols-[1fr_1fr_7.5rem] sm:items-baseline">
                  <span className="text-[14.5px]">{p.name}</span>
                  <span className="dim text-[13px] opacity-80">{p.role}</span>
                  <span className="dim datum text-[11.5px] opacity-74 sm:text-right">{p.country}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Band>
    </>
  );
}
