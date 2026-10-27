import { PageHead, Band, H2, Prose, Pending } from "@/components/Shell";
import VisaChecker from "@/components/VisaChecker";
import { contactEmail } from "@/content/site";

export const metadata = {
  title: "Visa",
  description: "How to get your Indian visa for India Australs 2027.",
};

const portal = "https://indianvisaonline.gov.in/evisa/";
const letterSubject = "Visa invitation letter request";

const steps: { h: string; body: React.ReactNode; pending?: string }[] = [
  {
    h: "Check which visa you need",
    body: "Use the checker above. Which visa you need depends on the country on your passport.",
  },
  {
    h: "Ask us for an invitation letter",
    body: (
      <>
        Write to{" "}
        <a href={`mailto:${contactEmail}?subject=${encodeURIComponent(letterSubject)}`}>{contactEmail}</a>{" "}
        with the subject line &ldquo;{letterSubject}&rdquo;, your full name as on your passport, your
        passport number, your nationality and your university.
      </>
    ),
    pending: "How long an invitation letter takes to arrive.",
  },
  {
    h: "Apply online",
    body: (
      <>
        Apply only on the Government of India&apos;s official site,{" "}
        <a href={portal} target="_blank" rel="noopener noreferrer">
          indianvisaonline.gov.in
        </a>
        . Other sites that offer to apply for you charge extra fees.
      </>
    ),
  },
  {
    h: "Carry it with you",
    body: "Print your visa approval and the invitation letter, and carry both with your passport when you fly.",
  },
];

export default function Visa() {
  return (
    <>
      <PageHead
        kicker="Visa"
        title="Getting your visa"
        lede="Start early. Visa rules differ by country, and some take weeks. If you get stuck at any step, write to us."
        facts={[
          { k: "Apply at", v: "indianvisaonline.gov.in", href: portal },
          { k: "Invitation letters", v: contactEmail, href: `mailto:${contactEmail}?subject=${encodeURIComponent(letterSubject)}` },
        ]}
      />

      <Band>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="rail text-navy">Visa support</p>
            <H2>We help you through it</H2>
            <Prose className="mt-6">
              <p>
                Visas are one of the biggest barriers to taking part in an international
                championship. The organising committee is working ahead of time on the process for
                each country our participants come from, and will issue an invitation letter to
                every registered participant who needs one.
              </p>
              <p>
                Stuck at any step? Write to{" "}
                <a href={`mailto:${contactEmail}?subject=${encodeURIComponent("Visa support")}`}>{contactEmail}</a>{" "}
                with &ldquo;Visa support&rdquo; in the subject line.
              </p>
            </Prose>
          </div>
          <div className="self-start">
            <H2 sub="Pick the country on your passport.">Do I need a visa for India?</H2>
            <div className="mt-6">
              <VisaChecker />
            </div>
          </div>
        </div>
      </Band>

      <Band>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <H2 sub="Four steps, from checking your visa to landing in Delhi.">How to get your visa</H2>
          <ol className="border-t border-ink/15">
            {steps.map((s, i) => (
              <li key={s.h} className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-ink/15 py-5">
                <span className="datum pt-1 text-[12.5px] text-navy">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-[1.15rem]">{s.h}</h3>
                  <Prose className="mt-1.5 text-[14.5px]">
                    <p>{s.body}</p>
                  </Prose>
                  {s.pending && (
                    <div className="mt-3">
                      <Pending who="the Organising committee">{s.pending}</Pending>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Band>

      <Band tone="navy">
        <div className="max-w-[68ch]">
          <H2>Before you apply</H2>
          <Prose className="mt-6 text-cream/88">
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Your passport should be valid for at least six months from the day you arrive, with two blank pages.</li>
              <li>Keep a recent passport-size photo with a white background, and a scan of your passport&apos;s photo page, ready to upload.</li>
              <li>Book your flights only once your visa is approved, or buy a ticket you can change.</li>
            </ul>
          </Prose>
        </div>
      </Band>
    </>
  );
}
