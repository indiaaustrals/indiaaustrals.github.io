import Link from "next/link";
import { PageHead, Band, H2, Prose } from "@/components/Shell";
import { site } from "@/content/site";

export const metadata = { title: "Schedule" };

function days() {
  const out: { n: number; weekday: string; date: string }[] = [];
  const start = new Date(`${site.start}T00:00:00Z`);
  const end = new Date(`${site.end}T00:00:00Z`);
  let n = 0;
  for (const d = new Date(start); d <= end; d.setUTCDate(d.getUTCDate() + 1)) {
    n += 1;
    out.push({
      n,
      weekday: d.toLocaleDateString("en-GB", { weekday: "long", timeZone: "UTC" }),
      date: d.toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "UTC" }),
    });
  }
  return out;
}

const willAppear = [
  ["Registration desk", "Where it is and what time it opens each morning"],
  ["Round release", "When each motion goes up and when it debates"],
  ["The break", "When it is announced, and the out-round times"],
  ["Socials", "The opening night, the dinner and the grand final"],
  ["Transport", "Bus times between The Grand and campus, morning and evening"],
];

export default function Schedule() {
  const list = days();
  return (
    <>
      <PageHead
        kicker="Schedule"
        title="The week"
        lede={`The tournament runs ${site.datesLabel}. There are eight preliminary rounds. The tab team is now setting which day each one falls on, so there is nothing here yet we would ask you to book a flight around.`}
        facts={[
          { k: "First day", v: `${list[0].weekday} ${list[0].date}` },
          { k: "Last day", v: `${list[list.length - 1].weekday} ${list[list.length - 1].date}` },
          { k: "Days", v: `${list.length}` },
          { k: "Preliminary rounds", v: "Eight" },
          { k: "Set by", v: "Jemma Griffin and Pranjal Singla", href: "/people/?group=tab" },
        ]}
      />

      <Band>
        <ol className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((d) => (
            <li key={d.n} className="bg-paper p-5">
              <p className="rail text-navy">Day {String(d.n).padStart(2, "0")}</p>
              <p className="mt-2 text-[1.15rem] leading-tight">{d.weekday}</p>
              <p className="datum mt-0.5 text-[13px] text-ink/72">{d.date}</p>
              <p className="mt-3 border-t border-ink/15 pt-2.5 text-[13px] text-ink/72">To be set</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <H2 sub="The day-by-day schedule will be announced closer to the dates of the tournament.">
              Still to come
            </H2>
            <Prose className="mt-6">
              <p>
                Which round falls on which day, the socials and the bus times will all be published
                here once they are set.
              </p>
            </Prose>
            <Link href="/progress/" className="mt-5 inline-block border-b border-navy/40 pb-0.5 text-[14.5px] text-navy hover:border-navy">
              Everything else we are waiting on →
            </Link>
          </div>
          <ul className="border-t border-ink/15 self-start">
            {willAppear.map(([h, p]) => (
              <li key={h} className="grid gap-x-5 border-b border-ink/15 py-3 sm:grid-cols-[minmax(0,11rem)_1fr]">
                <span className="rail pt-1 text-navy">{h}</span>
                <span className="text-[14px] text-ink/82">{p}</span>
              </li>
            ))}
          </ul>
        </div>

      </Band>
    </>
  );
}
