import Link from "next/link";
import { PageHead, Band, SubNav, H2, Prose, Pending } from "@/components/Shell";
import InterestForm from "@/components/InterestForm";

export const metadata = {
  title: "Register",
  description:
    "How registration for India Australs 2027 will work: the steps, the fee, who can enter, judges, scholarships and equity.",
};

const sections = [
  { id: "how", label: "How it works" },
  { id: "who", label: "Who can enter" },
  { id: "money", label: "Fees and scholarships" },
  { id: "judges", label: "Bringing a judge" },
  { id: "equity", label: "Equity" },
  { id: "notify", label: "Get the date" },
];

const steps = [
  ["We announce the dates", "We publish when registration opens and closes on this site, and every regional advisor passes it on the same day."],
  ["Your university registers its teams and judges", "One representative signs up all of the university's teams and judges. Individuals cannot register on their own. Invited adjudicators apply separately."],
  ["You pay, and we confirm", "We confirm your place once your payment arrives."],
  ["You fill in your details", "After confirmation we ask for each person's dietary, access and room-sharing needs."],
];

export default function Register() {
  return (
    <>
      <PageHead
        kicker="Register"
        title="Registration is not open yet"
        lede="The fee and who can enter are below. We will announce the registration dates and payment details here when they are set."
        facts={[
          { k: "Status", v: "Not open" },
          { k: "Opens", v: "To be announced" },
          { k: "Fee", v: "USD 630 per person" },
          { k: "Who may enter", v: "Universities in the Asia Pacific" },
          { k: "Who signs up", v: "Your university" },
          { k: "Teams per university", v: "No cap" },
        ]}
      />
      <SubNav items={sections} />

      <Band id="how">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <H2 sub="Four steps, from the announcement to the tournament.">How this will work</H2>
          <ol className="border-t border-ink/15">
            {steps.map(([h, p], i) => (
              <li key={h} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/15 py-4">
                <span className="datum pt-1 text-[12.5px] text-navy">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[1.15rem]">{h}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-[1.66] text-ink/82">{p}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Band>

      <Band id="who" tone="cream">
        <H2 sub="Every university in the Asia Pacific may register. Historically that has meant Australia, New Zealand and the rest of Asia.">
          Eligibility
        </H2>
        <div className="mt-7 max-w-[68ch]">
          <Prose>
            <p>
              Teams of three represent their university, and one person from each university
              registers all of its teams and judges. You do not need to have debated at Australs
              before, and there is no qualifying tournament.
            </p>
            <p>
              Universities from the Middle East and Central Asia usually go to the European
              championship. If yours would rather come to Delhi, register and we will consider your
              entry.
            </p>
            <p>
              There is <strong>no cap</strong> on the number of teams a university can enter.
            </p>
            <p>
              Not sure if your university can enter? Ask your{" "}
              <Link href="/people/">regional advisor</Link>.
            </p>
          </Prose>
        </div>
      </Band>

      <Band id="money">
        <div className="max-w-[68ch]">
          <div>
            <H2 sub="USD 630 per person, and what it covers.">
              Fees and scholarships
            </H2>
            <Prose className="mt-6">
              <p>The registration fee is <strong>USD 630</strong>. It covers:</p>
              <ul className="list-disc space-y-1 pl-5">
                <li>Your room at The Grand New Delhi for the whole tournament</li>
                <li>Pick-up from and drop to the airport</li>
                <li>Buses between The Grand and IIT Delhi every morning and evening</li>
                <li>Five lunches and five dinners</li>
                <li>Entry to all four socials</li>
              </ul>
              <p>
                Anyone planning to attend can apply for a <strong>scholarship</strong>. It can cover
                some or all of the registration fee and part of your travel. A Scholarship Board
                decides who gets one; we will announce its members soon.
              </p>
            </Prose>
          </div>
        </div>
      </Band>

      <Band id="judges" tone="cream">
        <div className="max-w-[68ch]">
          <div>
            <H2 sub="Each university brings judges with its teams.">Judges</H2>
            <Prose className="mt-6">
              <p>
                The rule is <strong>N&minus;1</strong>: a university brings one judge for every
                team after its first. Two teams means one judge, three teams means two.
              </p>
              <p>
                You can also come as an <strong>invited adjudicator</strong>, without a team. Anyone
                in the world can apply, and applications open soon. The adjudication core picks the
                invited adjudicators and decides how much of their costs we cover.
              </p>
              <p>
                We will post the judge briefings and the adjudication guide on the{" "}
                <Link href="/resources/">prep page</Link> before the tournament.
              </p>
            </Prose>
          </div>
        </div>
      </Band>

      <Band id="equity" tone="navy">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <H2 sub="Who to tell if something goes wrong, and what happens next.">
              Equity
            </H2>
            <Prose className="mt-6 text-cream/88">
              <p>
                An equity team, separate from the organising committee and the adjudication core,
                will handle complaints in confidence. We will announce its members and contact
                address closer to the tournament.
              </p>
              <p>
                The equity team will then publish the equity policy. It will say what counts as an
                equity issue, how to raise one, who reads it and what happens next.
              </p>
              <p>
                Dietary, access and room needs go to the organising committee, not the equity team.
                We will ask for them once your registration is confirmed.
              </p>
            </Prose>
          </div>
          <div className="space-y-3 self-center">
            <Pending who="the Equity team">
              Who is on the equity team, and their confidential email.
            </Pending>
            <Pending who="the Equity team">The equity policy, written out in full.</Pending>
          </div>
        </div>
      </Band>

      <Band id="notify">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <H2 sub="How to hear when registration opens.">Get the date</H2>
            <Prose className="mt-6">
              <p>
                We will post the dates here first. Your{" "}
                <Link href="/people/?group=advisor">regional advisor</Link> will also pass them on.
              </p>
            </Prose>
          </div>
          <InterestForm />
        </div>
      </Band>
    </>
  );
}
