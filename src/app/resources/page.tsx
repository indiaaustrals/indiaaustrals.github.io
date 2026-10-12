import Link from "next/link";
import { PageHead, Band, H2, Prose } from "@/components/Shell";

export const metadata = { title: "Prep and policies" };

const planned = [
  ["Participant handbook", "The format, rules, schedule, venue, and what to do if something goes wrong, in one document.", "Organising committee"],
  ["Equity policy", "What counts as an equity issue, how to raise one, who reads it, and what happens next.", "Equity team"],
  ["Adjudication guide", "How judges at this tournament should weigh arguments, give feedback and fill in a ballot.", "Adjudication core"],
  ["Motions and prep", "Past Australs motions, and general reading to prepare for the rounds.", "Adjudication core"],
  ["Briefing videos", "Short videos from the chief adjudicators for teams new to the Australasian format.", "Adjudication core"],
  ["Travel and visa notes", "Visa requirements by country, arriving at the airport, and what to pack.", "Organising committee"],
];

export default function Resources() {
  return (
    <>
      <PageHead
        kicker="Prep and policies"
        title="Nothing to read yet"
        lede="Everything you need to read before the tournament will go here. Nothing is published yet, so this is what is coming and who is writing it."
        facts={[
          { k: "Documents planned", v: "Six" },
          { k: "Published", v: "None" },
          { k: "Format explained", v: "On the tournament page", href: "/tournament/#format" },
          { k: "Travel notes", v: "Already on the Delhi page", href: "/delhi/#getting-here" },
        ]}
      />
      <Band>
        <ul className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {planned.map(([t, d, who]) => (
            <li key={t} className="bg-paper p-6">
              <h2 className="text-[1.25rem]">{t}</h2>
              <p className="mt-2.5 text-[14px] leading-[1.66] text-ink/82">{d}</p>
              <p className="rail mt-5 border-t border-ink/15 pt-3 text-ink/70">Written by {who}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <H2 sub="Each document will appear here as soon as it is written.">
              In the meantime
            </H2>
          </div>
          <Prose>
            <p>
              Some of it is already on the site: the{" "}
              <Link href="/tournament/#format">format</Link>,{" "}
              <Link href="/delhi/#getting-here">visas and travel</Link>, and{" "}
              <Link href="/delhi/#weather">what to pack</Link>.
            </p>
          </Prose>
        </div>
      </Band>
    </>
  );
}
