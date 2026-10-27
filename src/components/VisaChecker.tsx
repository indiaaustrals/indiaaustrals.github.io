"use client";

import { useState } from "react";
import { countries, noVisaNeeded, visaLinks } from "@/content/visa";

export default function VisaChecker() {
  const [pick, setPick] = useState("");
  const free = noVisaNeeded.includes(pick);

  return (
    <div className="box p-5">
      <label htmlFor="passport" className="rail text-ink/70">
        Passport country
      </label>
      <select
        id="passport"
        value={pick}
        onChange={(e) => setPick(e.target.value)}
        className="mt-2 block w-full border border-ink/30 bg-paper px-3 py-2.5 text-[15px]"
      >
        <option value="">Choose your country</option>
        {countries.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>
      <div aria-live="polite" className="mt-4 min-h-[3.5rem]">
        {pick && (
          <>
            <p className="text-[1.1rem] text-navy">
              {free ? "No, you don't need a visa for India." : "Yes, you need a visa for India."}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {visaLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-navy/40 px-4 py-2.5 text-[14.5px] text-navy hover:bg-navy hover:text-cream"
                >
                  {l.label} &rarr;
                </a>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
