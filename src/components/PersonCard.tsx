import Image from "next/image";
import { asset } from "@/lib/asset";
import type { Person } from "@/content/people";
import { eventBySlug } from "@/content/events";

/** "2025 Panama WUDC — Tab Team": when, where, what, then the role. */
function creditLine(c: Person["credits"][number]) {
  const head = [c.year, c.edition, eventBySlug[c.event]?.name ?? c.event].filter(Boolean).join(" ");
  return `${head} — ${c.role}`;
}

export default function PersonCard({
  p,
  size = "md",
  creds = 4,
}: {
  p: Person;
  size?: "lg" | "md" | "sm";
  /** How many credits to list under the photo. 0 hides them. */
  creds?: number;
}) {
  const type = {
    lg: { name: "text-[1.35rem]", meta: "text-[13.5px]", pad: "p-2" },
    md: { name: "text-[1.1rem]", meta: "text-[12.5px]", pad: "p-1.5" },
    sm: { name: "text-[0.98rem]", meta: "text-[12px]", pad: "p-1.5" },
  }[size];
  // Advisors get their record only; everyone else gets a bio too, where we have one.
  const bio = p.group === "advisor" ? undefined : p.bio;
  const shown = p.credits.slice(0, creds);

  return (
    <div>
      <div className={`border border-current/25 ${type.pad}`}>
        {p.photo ? (
          <Image
            src={asset(`/img/portraits/${p.photo}.webp`)}
            alt={p.name}
            width={520}
            height={650}
            className="aspect-[4/5] w-full object-cover"
            unoptimized
          />
        ) : (
          <div className="flex aspect-[4/5] w-full items-center justify-center bg-current/10">
            <span className="display text-[2rem] opacity-55">{p.name[0]}</span>
          </div>
        )}
      </div>
      {p.group !== "advisor" && <p className="rail mt-3 opacity-70">{p.role}</p>}
      <h3 className={`mt-1 leading-tight ${type.name}`} style={{ fontFamily: "var(--font-display)" }}>
        {p.name}
      </h3>
      {p.country && <p className={`mt-0.5 opacity-70 ${type.meta}`}>{p.country}</p>}
      {bio && <p className={`mt-2 leading-[1.55] opacity-85 ${type.meta}`}>{bio}</p>}
      {shown.length > 0 && (
        <ul className={`mt-2 space-y-0.5 border-t border-current/15 pt-2 leading-[1.45] opacity-80 ${type.meta}`}>
          {shown.map((c, i) => (
            <li key={i}>{creditLine(c)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
