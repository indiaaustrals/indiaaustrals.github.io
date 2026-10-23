export type Credit = {
  event: string;
  year?: string;
  /** The named edition, where the poster gives one instead of a year. */
  edition?: string;
  role: string;
};

export type Group = "cap" | "tab" | "oc" | "senior" | "advisor";

export type Person = {
  slug: string;
  name: string;
  group: Group;
  role: string;
  country?: string;
  region?: string;
  photo?: string;
  affiliation?: string;
  /** A short paragraph, for people whose record is not a list of tournaments. */
  bio?: string;
  credits: Credit[];
};

export const groupLabel: Record<Group, string> = {
  cap: "Chief Adjudication Panel",
  tab: "Tabulation team",
  oc: "Organising committee",
  senior: "Senior advisor",
  advisor: "Regional advisor",
};

export const people: Person[] = [
  {
    slug: "pranav-kagalkar",
    name: "Pranav Kagalkar",
    group: "cap",
    role: "Chief Adjudicator",
    country: "India",
    region: "South Asia",
    photo: "pranav-kagalkar",
    credits: [
      { event: "wudc", year: "2025", role: "Deputy Chief Adjudicator" },
      { event: "abp", year: "2022", role: "Deputy Chief Adjudicator" },
      { event: "wudc", year: "2021", role: "Finals Judge" },
      { event: "wudc", year: "2022", role: "Finals Judge" },
      { event: "wudc", year: "2023", role: "Finals Judge" },
      { event: "wudc", year: "2026", role: "Finals Judge" },
      { event: "uadc", year: "2023", role: "Finals Chair" },
      { event: "uadc", year: "2025", role: "Finals Chair" },
      { event: "australs", year: "2021", role: "Finals Judge" },
      { event: "australs", year: "2025", role: "Finals Judge" },
      { event: "abp", year: "2023", role: "Finals Judge" },
      { event: "abp", year: "2025", role: "Finals Judge" },
    ],
  },
  {
    slug: "ally-pitt",
    name: "Ally Pitt",
    group: "cap",
    role: "Chief Adjudicator",
    country: "Australia",
    region: "Oceania",
    photo: "ally-pitt",
    credits: [
      { event: "australs", year: "2026", role: "Open Grand Finals Chair" },
      { event: "australs", year: "2025", role: "Grand Finalist, 3rd Best Speaker" },
      { event: "easters", year: "2025", role: "Champion, Best Speaker" },
      { event: "wudc", year: "2024", role: "Quarter Finals Judge" },
      { event: "wudc", year: "2022", role: "Quarter Finalist" },
    ],
  },
  {
    slug: "sunghyun-park",
    name: "Sunghyun Park",
    group: "cap",
    role: "Chief Adjudicator",
    country: "South Korea",
    region: "North East Asia",
    photo: "sunghyun-park",
    credits: [
      { event: "abp", year: "2025", role: "Chief Adjudicator" },
      { event: "neadc", year: "2024", role: "Chief Adjudicator" },
      { event: "abp", year: "2024", role: "EFL Finals Chair, 2nd Best Judge" },
      { event: "australs", year: "2025", role: "Open Grand Finals Panel, 7th Best Judge" },
      { event: "wudc", year: "2025", role: "ESL Semis Judge" },
      { event: "wudc", year: "2026", role: "Open Break, 3rd Best EFL Speaker" },
    ],
  },
  {
    slug: "jemma-griffin",
    name: "Jemma Griffin",
    group: "tab",
    role: "Tab Director",
    country: "Australia",
    region: "Oceania",
    photo: "jemma-griffin",
    credits: [
      { event: "australs", year: "2026", role: "Tab Director" },
      { event: "australs", year: "2024", role: "Tab Team" },
      { event: "australs", year: "2025", role: "Tab Team" },
      { event: "wudc", year: "2026", role: "Tab Team" },
      { event: "wudc", year: "2027", role: "Tab Team" },
      { event: "easters", year: "2025", role: "Tab Director" },
      { event: "easters", year: "2026", role: "Tab Director" },
    ],
  },
  {
    slug: "pranjal-singla",
    name: "Pranjal Singla",
    group: "tab",
    role: "Deputy Tab Director",
    country: "India",
    region: "South Asia",
    photo: "pranjal-singla",
    credits: [
      { event: "nalsar", year: "2024", role: "Tab Director" },
      { event: "cupd", year: "2024", role: "Tab Director" },
      { event: "delhi-debate-open", year: "2024", role: "Tab Director" },
      { event: "delhi-debate-open", year: "2025", role: "Tab Director" },
      { event: "australs", year: "2021", edition: "Nepal", role: "ESL Semi Finalist" },
      { event: "uadc", year: "2022", edition: "Malaysia", role: "Open Double Octofinalist" },
    ],
  },
  {
    slug: "v-sayiram",
    name: "V. Sayiram",
    group: "oc",
    role: "Convenor",
    country: "India",
    region: "South Asia",
    photo: "v-sayiram",
    credits: [
      { event: "abp", edition: "Kuantan", role: "Deputy Chief Adjudicator" },
      { event: "wudc", edition: "Panama", role: "ESL Semifinalist" },
      { event: "india-pre-wudc-fundraiser", year: "2023", role: "Org Team" },
      { event: "the-delhi-debate", year: "2024", role: "Org Team" },
      { event: "dtu-pd", year: "2023", role: "Org Team" },
    ],
  },
  {
    slug: "krishnatara-senthil-kumar",
    name: "Krishnatara Senthil Kumar",
    group: "oc",
    role: "Organising Committee",
    country: "India",
    region: "South Asia",
    affiliation: "Debate Secretary, NUALS",
    photo: "krishnatara-senthil-kumar",
    credits: [
      { event: "nuals-pd", year: "2026", role: "Co-Convenor" },
      { event: "nls-pd", year: "2024", role: "Quarter-Finalist" },
    ],
  },
  {
    slug: "rajat-mukherjee",
    name: "Rajat Mukherjee",
    group: "oc",
    role: "Organising Committee",
    country: "India",
    region: "South Asia",
    photo: "rajat-mukherjee",
    credits: [
      { event: "east-india-pre-abp", year: "2026", role: "Convenor" },
      { event: "east-india-pre-wudc", year: "2025", role: "Co-Convenor" },
      { event: "nitd-pd", year: "2026", role: "Open Champion" },
    ],
  },
  {
    slug: "vani-bhardwaj",
    name: "Vani Bhardwaj",
    group: "oc",
    role: "Organising Committee",
    country: "India",
    region: "South Asia",
    photo: "vani-bhardwaj",
    credits: [
      { event: "abp", year: "2025", role: "Quarter-Finals Panellist" },
      { event: "awgmdc", year: "2025", role: "ESL Finals Panellist" },
      { event: "rmlpd", edition: "X–XIV", role: "Org Comm" },
    ],
  },
  {
    slug: "vansh-chadha",
    name: "Vansh Chadha",
    group: "oc",
    role: "Organising Committee",
    country: "India",
    region: "South Asia",
    photo: "vansh-chadha",
    credits: [
      { event: "australs", year: "2026", role: "Deputy Chief Adjudicator" },
      { event: "uadc", year: "2025", role: "Deputy Chief Adjudicator" },
      { event: "dtu-pd", year: "2023", role: "Convenor" },
    ],
  },
  {
    slug: "shivangi-sharma",
    name: "Shivangi Sharma",
    group: "oc",
    role: "Organising Committee",
    country: "India",
    region: "South Asia",
    photo: "shivangi-sharma",
    credits: [],
  },
  {
    slug: "garvit-gosain",
    name: "Garvit Gosain",
    group: "oc",
    role: "Organising Committee",
    country: "India",
    region: "South Asia",
    photo: "garvit-gosain",
    credits: [],
  },
  {
    slug: "anjali",
    name: "Anjali Tiwary",
    group: "senior",
    role: "Senior Advisor",
    photo: "anjali",
    bio: "An EdTech entrepreneur with more than twenty years in strategy, digital transformation and consulting. She has held leadership roles at GE Capital, Genpact and in the Future Skills ecosystem, and has organised many large tournaments.",
    credits: [],
  },
  {
    slug: "kamal",
    name: "Kamal Kashyap",
    group: "senior",
    role: "Senior Advisor",
    photo: "kamal",
    bio: "Co-founder of the Indian Debating League, with a decade in EdTech. He has pushed for debating to be taught to every student, and has supported Indian teams at the major international tournaments.",
    credits: [],
  },
];

/** Names, countries and records as printed in the bid document's advisor pages. */
const advisors: { name: string; country: string; region: string; affiliation?: string; credits: Credit[] }[] = [
  {
    name: "Aayana Rai Bhojani",
    country: "India",
    region: "South Asia",
    credits: [
      { event: "abp", year: "2023", role: "Deputy Chief Adjudicator" },
      { event: "wudc", year: "2022", role: "Octofinalist" },
    ],
  },
  {
    name: "Daniel Victor",
    country: "Sri Lanka",
    region: "South Asia",
    affiliation: "President, Debaters\u2019 Council of Sri Lanka",
    credits: [
      { event: "wsdc-asia-pacific", year: "2024", role: "Breaking Adjudicator" },
    ],
  },
  {
    name: "Sajid Asbat Khandaker",
    country: "Bangladesh",
    region: "South Asia",
    credits: [
      { event: "wudc", year: "2027", role: "Chief Adjudicator" },
      { event: "wudc", year: "2022", role: "Champion" },
    ],
  },
  {
    name: "Srijan Poudel",
    country: "Nepal",
    region: "South Asia",
    credits: [
      { event: "australs", year: "2022", role: "Deputy Chief Adjudicator" },
      { event: "uadc", year: "2022", role: "Finalist" },
    ],
  },
  {
    name: "Bea Legaspi",
    country: "Philippines",
    region: "South East Asia",
    credits: [
      { event: "australs", year: "2024", role: "Chief Adjudicator" },
      { event: "australs", year: "2022", role: "Finalist" },
    ],
  },
  {
    name: "Ian Dylan Chai",
    country: "Malaysia / Singapore",
    region: "South East Asia",
    credits: [
      { event: "uadc", year: "2025", role: "Champion" },
      { event: "wudc", year: "2026", role: "Quarter-Finalist" },
    ],
  },
  {
    name: "Patrick Cheang",
    country: "Malaysia",
    region: "South East Asia",
    credits: [
      { event: "uadc", year: "2026", role: "4th Best Judge" },
      { event: "uadc", year: "2021", role: "Champion" },
    ],
  },
  {
    name: "Tengku Omar",
    country: "Indonesia",
    region: "South East Asia",
    credits: [
      { event: "australs", year: "2023", role: "Deputy Chief Adjudicator" },
      { event: "abp", year: "2022", role: "Deputy Chief Adjudicator" },
    ],
  },
  {
    name: "Vũ Anh Tuấn",
    country: "Vietnam",
    region: "South East Asia",
    credits: [
      { event: "wsdc", year: "2023", role: "Convenor" },
      { event: "wudc", year: "2024", role: "Tab Director" },
    ],
  },
  {
    name: "Donner Tang",
    country: "Macau",
    region: "North East Asia",
    credits: [
      { event: "neadc", year: "2023", role: "Finalist" },
      { event: "uadc", year: "2025", role: "Finals Judge" },
    ],
  },
  {
    name: "Minami Matsushima",
    country: "Japan",
    region: "North East Asia",
    credits: [
      { event: "australs", year: "2026", role: "Chief Adjudicator" },
      { event: "australs", year: "2024", role: "Finals Chair" },
    ],
  },
  {
    name: "Ricky Jin",
    country: "China",
    region: "North East Asia",
    credits: [
      { event: "uadc", year: "2026", role: "Deputy Chief Adjudicator" },
      { event: "abp", year: "2023", role: "Finalist" },
    ],
  },
  {
    name: "Youngwoo Park",
    country: "South Korea",
    region: "North East Asia",
    credits: [
      { event: "wudc", year: "2027", role: "Deputy Chief Adjudicator" },
      { event: "australs", year: "2024", role: "Deputy Chief Adjudicator" },
    ],
  },
  {
    name: "Aisha O'Malley",
    country: "New Zealand",
    region: "Oceania",
    credits: [
      { event: "australs", year: "2025", role: "Chief Adjudicator" },
      { event: "nz-3v3", year: "2023", role: "Champion" },
    ],
  },
  {
    name: "Jordyn Gibson",
    country: "Australia",
    region: "Oceania",
    credits: [
      { event: "australs", year: "2026", role: "Chief Adjudicator" },
      { event: "wudc", year: "2026", role: "Quarter-Finalist" },
    ],
  },
  {
    name: "Kat Cheng",
    country: "Australia",
    region: "Oceania",
    credits: [
      { event: "wudc", year: "2025", role: "Deputy Chief Adjudicator" },
      { event: "australs", year: "2022", role: "Deputy Chief Adjudicator" },
    ],
  },
  {
    name: "Jane Mentzinger",
    country: "USA",
    region: "Beyond Australasia",
    credits: [
      { event: "wudc", year: "2027", role: "Chief Adjudicator" },
      { event: "wudc", year: "2025", role: "Deputy Chief Adjudicator" },
    ],
  },
  {
    name: "Juanita Hincapié Restrepo",
    country: "Colombia",
    region: "Beyond Australasia",
    credits: [
      { event: "wudc", year: "2025", role: "Chief Adjudicator" },
      { event: "wudc", year: "2022", role: "Deputy Chief Adjudicator" },
    ],
  },
  {
    name: "Marta Vasić",
    country: "Serbia",
    region: "Beyond Australasia",
    credits: [
      { event: "wudc", year: "2026", role: "Chief Adjudicator" },
      { event: "wudc", year: "2025", role: "Deputy Chief Adjudicator" },
    ],
  },
];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

for (const a of advisors) {
  const slug = slugify(a.name);
  people.push({ ...a, slug, group: "advisor", role: "Regional Advisor", photo: slug });
}

export const personBySlug = Object.fromEntries(people.map((p) => [p.slug, p]));

export const regions = [
  "South Asia",
  "South East Asia",
  "North East Asia",
  "Oceania",
  "Beyond Australasia",
];

/** Everyone who holds a credit at a given tournament, newest year first. */
export function peopleAtEvent(slug: string) {
  return people
    .flatMap((p) => p.credits.filter((c) => c.event === slug).map((c) => ({ person: p, credit: c })))
    .sort((a, b) => (b.credit.year ?? "0").localeCompare(a.credit.year ?? "0"));
}

export const creditCount = people.reduce((n, p) => n + p.credits.length, 0);
