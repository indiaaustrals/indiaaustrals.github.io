export type Item = { what: string; note?: string; owner?: string; area?: string };
export type Group = {
  key: string;
  title: string;
  blurb: string;
  tone: "done" | "waiting" | "later";
  items: Item[];
};

export const updated = "12 October 2026";

export const groups: Group[] = [
  {
    key: "live",
    title: "Live now",
    tone: "done",
    blurb: "You can do all of this on the site today.",
    items: [
      { what: "Read what the tournament is, when it runs and where" },
      {
        what: "Learn how the Australasian format works, speech by speech",
        note: "For anyone who has only debated British Parliamentary",
      },
      {
        what: "See all thirty-three people on the team",
        note: "Each judge, organiser and regional advisor has a page with their debating record from the posters and bid document",
      },
      {
        what: "Find your regional advisor and what they do",
      },
      {
        what: "See the eighteen countries our advisors cover on a map",
        note: "Filter by region; each country lists its advisor",
      },
      {
        what: "Read a guide to Delhi",
        note: "The venue, the hotel, nine places to visit, flights, visas, weather and what to pack",
      },
      {
        what: "Read how Australs has grown since 1975",
      },
      {
        what: "See the fee, what it covers, and who can enter",
        note: "USD 630: room at The Grand, airport pick-up and drop, daily buses, five lunches, five dinners, four socials",
      },
      { what: "Read how the rounds, motions and breaks work" },
      { what: "Read who can apply for a scholarship" },
      {
        what: "See what we have not decided yet, on the page it belongs to",
        note: "Each gap names the person who will answer it",
      },
            { what: "Find who to ask about what, and email the tournament" },
      { what: "Use the site on a phone, with a keyboard or with a screen reader" },
      { what: "Check this page to see where the website stands" },
    ],
  },
  {
    key: "waiting",
    title: "Waiting on an answer",
    tone: "waiting",
    blurb:
      "Each of these is a gap on the site. The name next to it is the person who has the answer.",
    items: [
      {
        area: "Equity",
        what: "Who is on the equity team, and their confidential email",
        owner: "Equity team",
      },
      {
        area: "Equity",
        what: "The equity policy, written out in full",
        note: "The equity team writes it, with input from the adjudication core and organising committee",
        owner: "Equity team",
      },
      {
        area: "People",
        what: "A photo of Garvit Gosain",
        note: "The card shows initials until then",
        owner: "Garvit",
      },
    ],
  },
  {
    key: "later",
    title: "The second build",
    tone: "later",
    blurb:
      "These need sign-in and a database, so they are a separate build. Work starts closer to registration.",
    items: [
      { what: "Sign-in, with a page for each team and judge" },
      { what: "The registration form, with payment status" },
      { what: "A checklist of forms and deadlines for each team" },
      { what: "A separate view for each committee" },
      { what: "Confidential handling of equity and grievance cases" },
      { what: "Announcements by email and on sign-in" },
      { what: "Spreadsheet exports for the organising committee" },
      { what: "QR code check-in on the day" },
      { what: "Certificates after the tournament" },
      { what: "The live tab, draws and results on this site" },
    ],
  },
];

export const counts = {
  done: groups.find((g) => g.key === "live")!.items.length,
  waiting: groups.find((g) => g.key === "waiting")!.items.length,
  later: groups.find((g) => g.key === "later")!.items.length,
};
