import { PageHead, Band, SubNav, H2, Prose } from "@/components/Shell";
import { contactEmail } from "@/content/site";

export const metadata = {
  title: "Register",
  description:
    "How registration for India Australs 2027 will work: the steps, who can enter and judges.",
};

const sections = [
  { id: "how", label: "How it works" },
  { id: "who", label: "Who can enter" },
  { id: "judges", label: "Bringing a judge" },
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
              There is <strong>no cap</strong> on the number of teams a university can enter.
            </p>
            <p>
              Not sure if your university can enter? Write to us at{" "}
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
            </p>
          </Prose>
        </div>
      </Band>

      <Band id="judges">
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
                in the world can apply, and applications open soon. The Chief Adjudication Panel picks the
                invited adjudicators and decides how much of their costs we cover.
              </p>
            </Prose>
          </div>
        </div>
      </Band>

    </>
  );
}
