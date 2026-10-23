import { PageHead, Band } from "@/components/Shell";
import { people } from "@/content/people";
import { contactEmail } from "@/content/site";

export const metadata = { title: "Contact" };

const mail = (subject: string) =>
  `mailto:${contactEmail}?subject=${encodeURIComponent(`India Australs 2027: ${subject}`)}`;

const convenor = people.find((p) => p.role === "Convenor")!;
const caps = people.filter((p) => p.group === "cap");

const cards = [
  {
    kicker: "General enquiries",
    h: "Organising committee",
    p: "For questions about registration, visas, travel, the hotel or anything else about the championship.",
    line: contactEmail,
    cta: "Email the organising committee",
    subject: "General enquiry",
  },
  {
    kicker: "Partnerships",
    h: "Sponsors & institutions",
    p: "Brands, universities and organisations looking to support India Australs 2027.",
    cta: "Write to us about partnering",
    subject: "Partnerships",
  },
  {
    kicker: "Convenor",
    h: convenor.name,
    p: `${convenor.country} · Convenor, India Australs 2027`,
    cta: "Contact the organising committee",
    subject: "For the Convenor",
  },
  {
    kicker: "Chief Adjudication Panel",
    h: caps.map((c) => c.name.split(" ")[0]).join(" · "),
    p: caps.map((c) => c.country).join(" · "),
    cta: "Contact the organising committee",
    subject: "For the Chief Adjudication Panel",
  },
];

export default function Contact() {
  return (
    <>
      <PageHead
        kicker="Contact"
        title="Let's talk"
        lede="Questions about the championship, registration, visas, or how to support India Australs 2027? The organising committee wants to hear from you."
      />

      <Band>
        <div className="grid gap-px border border-ink/15 bg-ink/15 sm:grid-cols-2">
          {cards.map((c) => (
            <div key={c.kicker} className="flex flex-col bg-paper p-6">
              <p className="rail text-navy">{c.kicker}</p>
              <h2 className="mt-2 text-[1.45rem]">{c.h}</h2>
              <p className="mt-2 text-[14.5px] leading-[1.66] text-ink/82">{c.p}</p>
              {c.line && (
                <a href={`mailto:${contactEmail}`} className="datum mt-3 text-[14px] text-navy">
                  {c.line}
                </a>
              )}
              <a
                href={mail(c.subject)}
                className="mt-auto inline-block self-start border-b border-navy/40 pb-0.5 pt-5 text-[14px] text-navy hover:border-navy"
              >
                {c.cta} →
              </a>
            </div>
          ))}
        </div>
      </Band>

      <Band tone="navy">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[46ch] text-[1.15rem] leading-[1.6] text-cream/90">
            One address reaches the whole team. We reply to every email.
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="border border-gold/60 bg-gold/15 px-6 py-3 text-[15px] text-gold transition-colors duration-150 hover:bg-gold hover:text-ink"
          >
            Email {contactEmail}
          </a>
        </div>
      </Band>
    </>
  );
}
