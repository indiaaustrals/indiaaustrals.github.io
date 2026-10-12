import { PageHead, Band, H2 } from "@/components/Shell";
import PersonCard from "@/components/PersonCard";
import { people, regions } from "@/content/people";

export const metadata = { title: "The people" };

const by = (g: string) => people.filter((p) => p.group === g);

export default function People() {
  return (
    <>
      <PageHead
        kicker="People"
        title="The people"
        lede="Thirty-three people: three chief adjudicators, two on the tab, seven organisers, two senior advisors and nineteen regional advisors. Click anyone to see their record."
        facts={[
          { k: "Adjudication core", v: "Three" },
          { k: "Tab team", v: "Two" },
          { k: "Organising committee", v: "Seven" },
          { k: "Senior advisors", v: "Two" },
          { k: "Regional advisors", v: "Nineteen, in five regions" },
        ]}
      />

      <Band>
        <H2 sub="They set the motions, brief the judges and decide how the break works. Between them they have judged finals at Worlds, Australs, ABP and UADC.">
          Adjudication core
        </H2>
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {by("cap").map((p) => (
            <PersonCard key={p.slug} p={p} size="lg" />
          ))}
        </div>
      </Band>

      <Band tone="cream">
        <H2 sub="They make the draw for every round, allocate the judges and keep the rounds on time.">
          Tab team
        </H2>
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {by("tab").map((p) => (
            <PersonCard key={p.slug} p={p} size="md" />
          ))}
        </div>
      </Band>

      <Band>
        <H2 sub="Write to them about registration, rooms, food and anything else that is not a debate.">
          Organising committee
        </H2>
        <div className="mt-8 grid gap-7 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {by("oc").map((p) => (
            <PersonCard key={p.slug} p={p} size="md" />
          ))}
        </div>

        <div className="mt-12">
          <H2 sub="Two people with long experience of running large tournaments in India.">
            Senior advisors
          </H2>
          <div className="mt-8 grid gap-7 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {by("senior").map((p) => (
              <PersonCard key={p.slug} p={p} size="md" />
            ))}
          </div>
        </div>
      </Band>

      <Band tone="navy">
        <H2 sub="Each region Australs draws from has at least one advisor. If you debate in one of these countries, your advisor is the person to ask first.">
          Advisors
        </H2>
        <div className="mt-8 space-y-10">
          {regions.map((r) => (
            <div key={r}>
              <h3 className="rail border-b border-cream/20 pb-2.5 text-gold">{r}</h3>
              <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                {people
                  .filter((p) => p.group === "advisor" && p.region === r)
                  .map((p) => (
                    <PersonCard key={p.slug} p={p} size="sm" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Band>
    </>
  );
}
