import Link from "next/link";
import Image from "next/image";
import { PageHead, Band, SubNav, H2, Prose } from "@/components/Shell";
import RouteMap from "@/components/RouteMap";
import { asset } from "@/lib/asset";
import { site } from "@/content/site";
import { people } from "@/content/people";
import { events } from "@/content/events";

export const metadata = { title: "The tournament" };

const sections = [
  { id: "what", label: "Australs" },
  { id: "history", label: "Since 1975" },
  { id: "format", label: "The format" },
  { id: "rounds", label: "Rounds and the break" },
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
        lede="Australs has run every year since 1975, hosted by universities across Australasia and Asia. In 2027 it comes to New Delhi, the first time India has hosted it."
        facts={[
          { k: "Dates", v: site.datesLabel },
          { k: "Venue", v: `${site.venue}, ${site.city}`, href: "/delhi/#venue" },
          { k: "Format", v: "Australasian, three a side" },
          { k: "Speech length", v: "8 minutes, 4-minute reply" },
          { k: "Preliminary rounds", v: "Eight" },
          { k: "Adjudication core", v: caps.map((c) => c.name).join(", "), href: "/people/?group=cap" },
        ]}
      />
      <SubNav items={sections} />

      <Band id="what">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <H2 sub="The university debating championship of Australasia and Asia, held every year since 1975.">
              Australs
            </H2>
            <Prose className="mt-6">
              <p>
                Teams of three come from across Australasia, South Asia and East Asia. They debate
                eight preliminary rounds over a week, and the best teams go through knockout rounds
                to a grand final.
              </p>
              <p>
                It has been to Sydney, Manila, Kuala Lumpur, Auckland, Kathmandu and Kuantan, but
                never to India. The <strong>Indian Debating League</strong> and the{" "}
                <strong>IIT Delhi Debating Society</strong> are hosting it. The three chief
                adjudicators come from India, Australia and South Korea.
              </p>
              <p>
                Between them they have judged Worlds finals, chaired a UADC final and run the
                Australs tab. Each person&apos;s record is on{" "}
                <Link href="/people/">their own page</Link>.
              </p>
            </Prose>
          </div>
          <div className="grid grid-cols-2 gap-3 self-start">
            <Image src={asset("/img/cards/idl.webp")} alt="The Indian Debating League at a closing ceremony" width={760} height={950} className="box w-full p-1" unoptimized />
            <Image src={asset("/img/cards/venue-debsoc.webp")} alt="The IIT Delhi Debating Society" width={760} height={950} className="box mt-8 w-full p-1" unoptimized />
          </div>
        </div>
      </Band>

      <Band id="history" tone="cream">
        <H2 sub="A different host each year, chosen by bid.">
          Since 1975
        </H2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <Prose>
            <p>
              Australs started as a tournament for Australia and New Zealand. Over five decades
              universities from Indonesia, the Philippines, Malaysia, Singapore, Japan, Korea, India,
              Sri Lanka, Bangladesh and Nepal joined.
            </p>
            <p>
              That is why the tournament has more than one break. Teams debating in a second or
              foreign language (ESL and EFL) compete in the open rankings and also against each
              other.
            </p>
            <p>
              A debating society bids to host, and the winner has about two years to prepare. Delhi
              won the bid for 2027.
            </p>
          </Prose>
          <div className="box h-fit">
            <p className="rail border-b border-ink/15 px-4 py-2.5 text-ink/72">What hosting means</p>
            {[
              ["Two years", "From winning the bid to the first round"],
              ["One venue", "Every round on the IIT Delhi campus"],
              ["One hotel", "The whole field under a single roof"],
              ["Five regions", "Advisors working their own circuits"],
              ["Eight days", "Rounds, out-rounds, socials and a final"],
            ].map(([k, v]) => (
              <div key={k} className="flex items-baseline gap-4 border-b border-ink/15 px-4 py-2.5 last:border-0">
                <span className="datum w-[5.5rem] shrink-0 text-[12.5px] text-navy">{k}</span>
                <span className="text-[14px] text-ink/85">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </Band>

      <Band id="format">
        <H2 sub="Read this if you have only debated British Parliamentary.">
          The format
        </H2>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_1fr]">
          <Prose>
            <p>
              Australs uses the <strong>Australasian format</strong>: two teams of three,
              Affirmative against Negative. There are six eight-minute speeches, alternating sides,
              then a four-minute <strong>reply</strong> from each team, given by its first or second
              speaker. The Negative replies first.
            </p>
            <p>
              With only two teams in the room, you answer the other side directly. Your case builds
              across three speakers, and the reply speech sums up the debate without adding new
              arguments.
            </p>
            <p>
              Every motion is released thirty minutes before the round. See{" "}
              <Link href="#rounds">rounds and the break</Link>.
            </p>
          </Prose>
          <div>
            <div className="box">
              <p className="rail border-b border-ink/15 px-4 py-2.5 text-ink/70">A round, in order</p>
              <ol>
                {[
                  ["1st Affirmative", "8 min", "Defines the motion and opens the case"],
                  ["1st Negative", "8 min", "Answers the definition, opens the opposing case"],
                  ["2nd Affirmative", "8 min", "Rebuts, extends"],
                  ["2nd Negative", "8 min", "Rebuts, extends"],
                  ["3rd Affirmative", "8 min", "Rebuttal, no new matter"],
                  ["3rd Negative", "8 min", "Rebuttal, no new matter"],
                  ["Negative reply", "4 min", "Weighs the debate. 1st or 2nd speaker"],
                  ["Affirmative reply", "4 min", "Weighs the debate, last word"],
                ].map(([who, len, what]) => (
                  <li key={who} className="grid grid-cols-[1fr_auto] gap-x-4 border-b border-ink/15 px-4 py-2.5 last:border-0">
                    <span className="text-[14px]">{who}</span>
                    <span className="datum text-[12px] text-navy">{len}</span>
                    <span className="col-span-2 text-[13px] text-ink/75">{what}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Band>

      <Band id="rounds">
        <div className="max-w-[68ch]">
          <div>
            <H2 sub="Eight preliminary rounds, then knockout rounds for the teams that break.">
              Rounds and the break
            </H2>
            <Prose className="mt-6">
              <p>
                There are <strong>eight preliminary rounds</strong>. Each motion comes out thirty
                minutes before the round: you get five minutes to choose a motion and twenty-five to
                prepare. We release no motions in advance.
              </p>
              <p>
                There will be an <strong>Open break</strong>. We will also run ESL and EFL breaks if
                enough teams hold each language status to meet the constitution&apos;s minimum. A
                Language Team decides each team&apos;s status, and you can apply for one closer to
                the tournament.
              </p>
              <p>
                We will post the day-by-day schedule on the{" "}
                <Link href="/schedule/">schedule</Link> page closer to the tournament.
              </p>
            </Prose>
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
                <Link href={`/people/${p.slug}/`} className="rec grid gap-x-4 px-2 py-3 sm:grid-cols-[1fr_1fr_auto] sm:items-baseline">
                  <span className="text-[14.5px]">{p.name}</span>
                  <span className="dim text-[13px] opacity-80">{p.role}</span>
                  <span className="dim datum text-[11.5px] opacity-74 sm:text-right">{p.country}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Band>
    </>
  );
}
