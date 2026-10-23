export const site = {
  name: "India Australs 2027",
  longName: "Australasian Intervarsity Debating Championship 2027",
  city: "New Delhi",
  cityCode: "DEL",
  venue: "IIT Delhi",
  hotel: "The Grand New Delhi",
  start: "2027-06-27",
  end: "2027-07-04",
  datesLabel: "27 June – 4 July 2027",
  partners: ["Indian Debating League", "IIT Delhi Debating Society"],
  buildUpdated: "23 October 2026",
};

export const nav = [
  { href: "/tournament", label: "Tournament" },
  { href: "/people", label: "People" },
  { href: "/delhi", label: "Delhi" },
  { href: "/visa", label: "Visa" },
  { href: "/media", label: "In the news" },
  { href: "/register", label: "Register" },
  { href: "/contact", label: "Contact" },
];

export const footerNav = [
  {
    head: "The tournament",
    links: [
      { href: "/tournament", label: "Australs" },
      { href: "/tournament#organisers", label: "Organisers" },
      { href: "/media", label: "In the news" },
    ],
  },
  {
    head: "Coming to Delhi",
    links: [
      { href: "/delhi#venue", label: "IIT Delhi" },
      { href: "/delhi#stay", label: "Accommodation" },
      { href: "/delhi#city", label: "The city" },
      { href: "/delhi#getting-here", label: "Getting here" },
      { href: "/visa", label: "Visa" },
    ],
  },
  {
    head: "Taking part",
    links: [
      { href: "/register", label: "Register" },
      { href: "/register#judges", label: "Judges" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    head: "People",
    links: [
      { href: "/people", label: "Chief Adjudication Panel" },
      { href: "/people", label: "Tabulation team" },
      { href: "/people", label: "Organising committee" },
      { href: "/people", label: "Advisors" },
    ],
  },
];

/**
 * Where the "tell me when registration opens" form posts.
 * Paste a Google Form's formResponse URL here and the form goes live;
 * leave it blank and the page says so honestly instead of pretending.
 */
export const interestForm = { action: "", nameField: "", emailField: "", instField: "" };
export const contactEmail = "indiaaustrals@indiandebatingleague.com";
