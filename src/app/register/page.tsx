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
  { id: "notify", label: "Hear about it first" },
];

const steps = [
  ["Leave your details", "Name, email, university. That is all we hold until registration opens, and it is all we will ever hold without asking."],
  ["We tell you the day it opens", "In the same message: the fee, what it covers, who may enter and how long you have. You will not have to chase four announcements to work out whether you can come."],
  ["Your university registers its teams and judges", "There are no individual registrations. One representative signs up for every team and judge slot the university wants. Invited adjudicators apply separately."],
  ["You pay, and we confirm", "Once payment lands we confirm your place, and only then does your account exist. Confirmation carries your sign-in details."],
  ["Your own page opens", "Every form you still owe us, with its deadline, in one list. No more hunting through five emails and a spreadsheet you cannot open."],
];

export default function Register() {
  return (
    <>
      <PageHead
        kicker="Register"
        title="Registration is not open yet"
        lede="When it opens, it opens complete. Fee, eligibility, deadlines and judge requirements go up together, so you can decide in one sitting instead of four. Leave an email and you hear before anyone announces it anywhere else."
        facts={[
          { k: "Status", v: "Not open" },
          { k: "Opens", v: "To be announced" },
          { k: "Fee", v: "USD 630 per person" },
          { k: "Who may enter", v: "Universities in the Asia Pacific" },
          { k: "Who signs up", v: "Your university" },
        ]}
      />
      <SubNav items={sections} />

      <Band id="how">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <H2 sub="Five steps, from today to your first round.">How this will work</H2>
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
        <div className="mt-7 grid gap-8 lg:grid-cols-2">
          <Prose>
            <p>
              It is a university tournament, debated in teams of three. A representative of each
              university signs up for its team and judge slots; there are no individual
              registrations. You do not need to have debated Australs before, and there is no
              qualification tournament to get through.
            </p>
            <p>
              Institutions from the Middle East and Central Asia often compete at the European
              championship because it is closer. If yours would rather come to Delhi, register: we
              look at entries from those regions one by one.
            </p>
            <p>
              If you are unsure whether your circuit is in scope, ask your{" "}
              <Link href="/people/">regional advisor</Link>. They will know before we publish it.
            </p>
          </Prose>
          <div className="space-y-3">
            <Pending who="Sayiram and the adjudication core">
              The cap on teams per university. It depends on how many registrations come in, and
              the constitution is being checked.
            </Pending>
            <Pending who="Org Comm">The day registration opens and the day it closes.</Pending>
          </div>
        </div>
      </Band>

      <Band id="money">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <H2 sub="USD 630 per person, and here is exactly what it buys.">
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
                There is a <strong>scholarship</strong>, and anyone planning to attend may apply.
                It can waive part or all of the registration fee and contribute to travel.
                Allocations are made by a Scholarship Board, which will be set up and announced
                shortly.
              </p>
            </Prose>
          </div>
          <div className="space-y-3 self-center">
            <Pending who="Org Comm">
              How people pay, and the payment deadlines. These come out with the registration
              dates.
            </Pending>
            <Pending who="Org Comm">Who sits on the Scholarship Board.</Pending>
          </div>
        </div>
      </Band>

      <Band id="judges" tone="cream">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <H2 sub="Australs runs on the judges teams bring with them.">Judges</H2>
            <Prose className="mt-6">
              <p>
                Universities bring judges alongside their teams. The rule is expected to be{" "}
                <strong>N&minus;1</strong>: one judge for every team after the first. Pranav
                Kagalkar, Ally Pitt and Sunghyun Park are confirming it.
              </p>
              <p>
                You can also come as an <strong>invited adjudicator</strong>, with no team attached.
                Applications go out soon and anyone, from anywhere in the world, may apply. The
                adjudication core alone assesses them, and decides how much subsidy each selected
                adjudicator receives.
              </p>
              <p>
                Judge briefings, the adjudication guide and feedback expectations will all be
                published on the <Link href="/resources/">prep page</Link> before the tournament.
              </p>
            </Prose>
          </div>
          <div className="space-y-3 self-center">
            <Pending who="the adjudication core">
              Confirming the judge rule is N&minus;1.
            </Pending>
          </div>
        </div>
      </Band>

      <Band id="equity" tone="navy">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <H2 sub="Every tournament says it takes equity seriously. What matters is whether you know who to tell, and what happens after you do.">
              Equity
            </H2>
            <Prose className="mt-6 text-cream/88">
              <p>
                There will be an equity team with its own confidential contact, independent of the
                organising committee and the adjudication core. The team is announced closer to the
                championship.
              </p>
              <p>
                Once chosen, the equity team publishes the equity policy, with input from the
                adjudication core and the organising committee: what counts, how to raise
                something, who reads it and what happens next.
              </p>
              <p>
                The organising committee releases a participant handbook closer to the dates.
              </p>
              <p>
                Dietary, accessibility and accommodation needs are asked for on a form once your
                registration is confirmed, and they go to the organising committee rather than the
                equity team.
              </p>
            </Prose>
          </div>
          <div className="space-y-3 self-center">
            <Pending who="the Equity team">
              Who sits on the equity team, and the confidential address to reach them.
            </Pending>
            <Pending who="the Equity team">The equity policy, written out in full.</Pending>
            <Pending who="Org Comm">The participant handbook.</Pending>
          </div>
        </div>
      </Band>

      <Band id="notify">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <H2 sub="One message, the day it opens. Nothing else, ever.">Get the date</H2>
            <Prose className="mt-6">
              <p>
                We will not send you a newsletter, and we will not pass your address to anyone. When
                registration opens you get one email with everything in it. If you would rather hear
                it from a person, your{" "}
                <Link href="/people/?group=advisor">regional advisor</Link> will know at the same
                time we do.
              </p>
            </Prose>
          </div>
          <InterestForm />
        </div>
      </Band>
    </>
  );
}
