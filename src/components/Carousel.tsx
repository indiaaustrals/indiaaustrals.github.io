"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

export type Slide = { src: string; alt: string };

export default function Carousel({ slides, label }: { slides: Slide[]; label: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [at, setAt] = useState(0);

  // Keep the dots in step with swipes and scrolls, not just button presses.
  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const onScroll = () => setAt(Math.round(el.scrollLeft / el.clientWidth));
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const n = (i + slides.length) % slides.length;
    el.scrollTo({ left: n * el.clientWidth, behavior: "smooth" });
  };

  return (
    <div className="box p-1" role="region" aria-roledescription="carousel" aria-label={label}>
      <div className="relative">
        <div
          ref={track}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((s, i) => (
            <figure
              key={s.src}
              className="aspect-[4/3] w-full shrink-0 snap-center"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(s.src)} alt={s.alt} className="h-full w-full object-cover" loading="lazy" />
            </figure>
          ))}
        </div>
        {[
          ["Previous photo", -1, "left-2", "‹"],
          ["Next photo", 1, "right-2", "›"],
        ].map(([name, step, side, glyph]) => (
          <button
            key={name as string}
            type="button"
            onClick={() => go(at + (step as number))}
            aria-label={name as string}
            className={`absolute top-1/2 ${side} grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-cream/90 text-[22px] leading-none text-navy shadow hover:bg-cream`}
          >
            {glyph}
          </button>
        ))}
      </div>
      <div className="flex justify-center gap-2 py-2.5">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show photo ${i + 1}`}
            aria-current={i === at}
            className={`h-2 w-2 rounded-full ${i === at ? "bg-navy" : "bg-navy/25 hover:bg-navy/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
