import { PageHead, Band, H2 } from "@/components/Shell";
import PersonCard from "@/components/PersonCard";
import { people, regions, groupLabel } from "@/content/people";

export const metadata = { title: "The people" };

const by = (g: string) => people.filter((p) => p.group === g);

export default function People() {
  return (
    <>
      <PageHead
        kicker="People"
        title="The people"
        lede="India Australs 2027 is led by some of the world's most experienced debaters and adjudicators. They've had experience organizing large-scale tournaments across the nation and have broken records at major tournaments across continents."
      />

      <Band>
        <H2>{groupLabel.cap}</H2>
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {by("cap").map((p) => (
            <PersonCard key={p.slug} p={p} size="lg" creds={6} />
          ))}
        </div>
      </Band>

      <Band tone="cream">
        <H2>{groupLabel.tab}</H2>
        <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {by("tab").map((p) => (
            <PersonCard key={p.slug} p={p} size="md" />
          ))}
        </div>
      </Band>

      <Band>
        <H2>{groupLabel.oc}</H2>
        <div className="mt-8 grid gap-7 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {by("oc").map((p) => (
            <PersonCard key={p.slug} p={p} size="md" />
          ))}
        </div>

        <div className="mt-12">
          <H2>Senior advisors</H2>
          <div className="mt-8 grid gap-7 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {by("senior").map((p) => (
              <PersonCard key={p.slug} p={p} size="md" />
            ))}
          </div>
        </div>
      </Band>

      <Band tone="navy">
        <H2>Advisors</H2>
        <div className="mt-8 space-y-10">
          {regions.map((r) => (
            <div key={r}>
              <h3 className="rail border-b border-cream/20 pb-2.5 text-gold">{r}</h3>
              <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
                {people
                  .filter((p) => p.group === "advisor" && p.region === r)
                  .map((p) => (
                    <PersonCard key={p.slug} p={p} size="sm" creds={3} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Band>
    </>
  );
}
