/**
 * Press coverage of India Australs 2027, newest first. Add one line per
 * article and the "In the news" page picks it up; nothing else to change.
 */
export type Coverage = {
  outlet: string;
  headline: string;
  url: string;
  /** As printed, e.g. "14 October 2026". */
  date: string;
  /** Optional cover image in public/img/media/, without the extension. */
  image?: string;
};

export const coverage: Coverage[] = [];
