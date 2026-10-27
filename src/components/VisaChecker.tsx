"use client";

import { useId, useMemo, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { countries, eVisa, noVisaNeeded, portalChecked, visaLinks, visaOnArrival } from "@/content/visa";

type Country = (typeof countries)[number];

/** Lower-case and strip accents, so "cote" finds "Côte d'Ivoire". */
const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

function Flag({ code, className = "" }: { code: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={asset(`/flags/${code}.svg`)}
      alt=""
      loading="lazy"
      className={`aspect-[4/3] shrink-0 object-cover shadow-[0_0_0_1px_rgba(20,37,68,0.18)] ${className}`}
    />
  );
}

function Route({ ok, title, note }: { ok: boolean; title: string; note: string }) {
  return (
    <li className="grid grid-cols-[1.75rem_1fr] gap-3 border-b border-ink/12 py-3 last:border-b-0">
      <span
        aria-hidden
        className={`mt-0.5 grid h-6 w-6 place-items-center rounded-full text-[13px] ${
          ok ? "bg-navy text-cream" : "border border-ink/30 text-ink/45"
        }`}
      >
        {ok ? "✓" : "✕"}
      </span>
      <div>
        <p className={`text-[15px] ${ok ? "text-ink" : "text-ink/55"}`}>
          {title}
          <span className="sr-only">{ok ? ": available" : ": not available"}</span>
        </p>
        <p className="mt-0.5 text-[13.5px] leading-[1.55] text-ink/70">{note}</p>
      </div>
    </li>
  );
}

export default function VisaChecker() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const [pick, setPick] = useState<Country | null>(null);
  const listId = useId();
  const listRef = useRef<HTMLUListElement>(null);

  const matches = useMemo(() => {
    const q = fold(query.trim());
    if (!q) return countries;
    // Names that start with what you typed come first, then the rest that contain it.
    const hits = countries.filter((c) => fold(c.name).includes(q));
    return [...hits.filter((c) => fold(c.name).startsWith(q)), ...hits.filter((c) => !fold(c.name).startsWith(q))];
  }, [query]);

  const choose = (c: Country) => {
    setPick(c);
    setQuery(c.name);
    setOpen(false);
  };

  const move = (to: number) => {
    const i = Math.max(0, Math.min(matches.length - 1, to));
    setActive(i);
    listRef.current?.children[i]?.scrollIntoView({ block: "nearest" });
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") { e.preventDefault(); if (!open) setOpen(true); else move(active + 1); }
    else if (e.key === "ArrowUp") { e.preventDefault(); move(active - 1); }
    else if (e.key === "Enter" && open && matches[active]) { e.preventDefault(); choose(matches[active]); }
    else if (e.key === "Escape") setOpen(false);
  };

  const free = pick ? noVisaNeeded.includes(pick.name) : false;
  const online = pick ? eVisa.includes(pick.name) : false;
  const onArrival = pick ? visaOnArrival.includes(pick.name) : false;

  return (
    <div className="box bg-paper">
      <div className="p-5">
        <label htmlFor={`${listId}-input`} className="rail text-ink/70">
          Passport country
        </label>
        <div className="mt-2">
          <div className="flex items-center gap-3 border border-ink/30 bg-paper px-3 focus-within:border-navy">
            {pick && query === pick.name ? (
              <Flag code={pick.flag} className="w-7" />
            ) : (
              <span aria-hidden className="w-7 text-center text-ink/40">⌕</span>
            )}
            <input
              id={`${listId}-input`}
              role="combobox"
              aria-expanded={open}
              aria-controls={listId}
              aria-autocomplete="list"
              aria-activedescendant={open && matches[active] ? `${listId}-${active}` : undefined}
              autoComplete="off"
              placeholder="Type or choose your country"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setOpen(true); setActive(0); }}
              onFocus={() => setOpen(true)}
              onBlur={() => setTimeout(() => setOpen(false), 120)}
              onKeyDown={onKey}
              className="w-full bg-transparent py-2.5 text-[15px] outline-none placeholder:text-ink/45"
            />
          </div>
          {open && (
            <ul
              id={listId}
              ref={listRef}
              role="listbox"
              className="max-h-72 overflow-y-auto border border-t-0 border-ink/30 bg-paper shadow-[0_12px_28px_-12px_rgba(20,37,68,0.35)]"
            >
              {matches.length ? (
                matches.map((c, i) => (
                  <li
                    key={c.name}
                    id={`${listId}-${i}`}
                    role="option"
                    aria-selected={i === active}
                    onMouseDown={(e) => { e.preventDefault(); choose(c); }}
                    onMouseEnter={() => setActive(i)}
                    className={`flex cursor-pointer items-center gap-3 px-3 py-2 text-[14.5px] ${
                      i === active ? "bg-navy text-cream" : "text-ink"
                    }`}
                  >
                    <Flag code={c.flag} className="w-6" />
                    {c.name}
                  </li>
                ))
              ) : (
                <li className="px-3 py-3 text-[14px] text-ink/60">No country by that name. Try another spelling.</li>
              )}
            </ul>
          )}
        </div>
      </div>

      <div aria-live="polite">
        {pick && (
          <div key={pick.name} className="border-t border-ink/15 bg-paper-2 p-5 motion-safe:animate-[visa-in_320ms_cubic-bezier(0.2,0,0,1)]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <Flag code={pick.flag} className="w-20" />
                <div>
                  <p className="rail text-ink/60">Passport</p>
                  <h3 className="text-[1.6rem] leading-tight text-navy">{pick.name}</h3>
                </div>
              </div>
              <div
                className={`shrink-0 -rotate-6 border-2 border-double px-3 py-1.5 text-center font-mono text-[11px] uppercase leading-tight tracking-[0.14em] motion-safe:animate-[visa-stamp_420ms_120ms_cubic-bezier(0.2,0,0,1)_both] ${
                  free ? "border-navy text-navy" : "border-[#9b2c2c] text-[#9b2c2c]"
                }`}
              >
                {free ? <>No visa<br />needed</> : <>Visa<br />needed</>}
              </div>
            </div>

            <p className="mt-5 text-[1.05rem] text-ink">
              {free ? "No, you don't need a visa for India." : "Yes, you need a visa for India."}
            </p>

            {!free && (
              <ul className="mt-3 border-t border-ink/12">
                <Route
                  ok={online}
                  title="e-Visa, online"
                  note={online ? "Apply on the Indian visa portal. This is the easiest route." : "Not open to your passport."}
                />
                <Route
                  ok={onArrival}
                  title="Visa on arrival"
                  note={
                    onArrival
                      ? pick.name === "United Arab Emirates"
                        ? "At Delhi airport, but only if you have held an Indian e-Visa or regular visa before."
                        : "At Delhi airport when you land."
                      : "Not open to your passport."
                  }
                />
                <Route
                  ok
                  title="Regular visa"
                  note={
                    online
                      ? "Also possible, at the Indian embassy or consulate near you."
                      : "Apply at the Indian embassy or consulate near you. Start early."
                  }
                />
              </ul>
            )}

            <div className="mt-5 grid gap-2">
              {visaLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-navy/40 bg-paper px-4 py-2.5 text-[14.5px] text-navy transition-colors hover:bg-navy hover:text-cream"
                >
                  {l.label}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">&rarr;</span>
                </a>
              ))}
            </div>
            <p className="mt-3 text-[12.5px] text-ink/60">
              From the Government of India&apos;s visa portal, checked {portalChecked}. The portal has the final word.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
