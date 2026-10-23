/**
 * Press coverage of India Australs 2027, newest first. Add one line per
 * article and the "In the news" page picks it up; nothing else to change.
 */
export type Coverage = {
  outlet: string;
  headline: string;
  url: string;
  /** As printed, e.g. "14 October 2026". Leave out if the post shows none. */
  date?: string;
  /** Optional cover image in public/img/media/, without the extension. */
  image?: string;
};

export const coverage: Coverage[] = [
  {
    outlet: "Dinamalar",
    headline: "India to host Australs 2027 university debating championship in New Delhi",
    url: "https://www.dinamalar.com/news/kalvimalar-news-en/india-to-host-australs-2027-university-debating-championship-in-new-delhi/61766",
    date: "22 September 2026",
    image: "dinamalar",
  },
  {
    outlet: "Guwahati Plus",
    headline: "India to Host Australs 2027 University Debating Championship",
    url: "https://www.guwahatiplus.com/buzz/india-to-host-australs-2027-university-debating-championship",
    date: "22 September 2026",
    image: "guwahati",
  },
  {
    outlet: "Passionate in Marketing",
    headline: "India to Host Australs 2027 at IIT Delhi",
    url: "https://www.passionateinmarketing.com/india-to-host-australs-2027-bringing-asia-pacifics-leading-university-debating-championship-to-new-delhi/",
    date: "22 September 2026",
    image: "pim",
  },
  {
    outlet: "Business News This Week",
    headline: "India to Host Australs 2027, Bringing Asia-Pacific's Leading University Debating Championship to New Delhi",
    url: "https://businessnewsthisweek.com/news/india-to-host-australs-2027-bringing-asia-pacifics-leading-university-debating-championship-to-new-delhi/",
    date: "22 September 2026",
    image: "newsinpics",
  },
  {
    outlet: "Meditation Affinity",
    headline: "India to Host Australs 2027, Bringing Asia-Pacific's Leading University Debating Championship to New Delhi",
    url: "https://meditationaffinity.com/news/india-to-host-australs-2027-bringing-asia-pacifics-leading-university-debating-championship-to-new-delhi/",
    date: "22 September 2026",
    image: "newsinpics",
  },
  {
    outlet: "News Desk Reports (Facebook)",
    headline: "India to host Australs 2027 university debating championship",
    url: "https://www.facebook.com/NewsDeskReports/posts/india-to-host-australs-2027-university-debating-championshipindia-will-host-aust/122205241808825890/",
  },
];
