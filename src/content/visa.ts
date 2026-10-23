/**
 * The visa page reads everything country-specific from here. Fill these in
 * from the organising committee's instructions; while they are empty the page
 * shows a "Not settled" note in their place instead of guessing.
 */

/** The "at a glance" tiles, e.g. { h: "e-Visa", p: "Most of Asia Pacific applies online ..." }. */
export const atAGlance: { h: string; p: string }[] = [];

/**
 * The "Do I need a visa?" checker. One row per passport country.
 * `route` is the short answer shown in bold; `detail` is the sentence under it.
 */
export const byCountry: { country: string; route: string; detail: string; link?: string }[] = [];
