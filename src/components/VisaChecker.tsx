"use client";

import { useState } from "react";
import { byCountry } from "@/content/visa";

export default function VisaChecker() {
  const [pick, setPick] = useState("");
  const hit = byCountry.find((r) => r.country === pick);

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
        {byCountry.map((r) => (
          <option key={r.country}>{r.country}</option>
        ))}
      </select>
      <div aria-live="polite" className="mt-4 min-h-[3.5rem]">
        {hit && (
          <>
            <p className="text-[1.1rem] text-navy">{hit.route}</p>
            <p className="mt-1 text-[14.5px] leading-[1.66] text-ink/82">
              {hit.detail}{" "}
              {hit.link && (
                <a href={hit.link} target="_blank" rel="noopener noreferrer" className="border-b border-navy/40 text-navy">
                  More information
                </a>
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
