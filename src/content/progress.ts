export type Item = { what: string; note?: string; owner?: string; area?: string };
export type Group = {
  key: string;
  title: string;
  blurb: string;
  tone: "done" | "waiting" | "later";
  items: Item[];
};

export const updated = "23 October 2026";

export const groups: Group[] = [
  {
    key: "live",
    title: "Live now",
    tone: "done",
    blurb: "You can do all of this on the site today.",
    items: [
      { what: "Read what the tournament is, when it runs and where" },
      {
        what: "See everyone on the team, with their record under their photo",
        note: "The Chief Adjudication Panel, the tabulation team, the organising committee and the advisors",
      },
      {
        what: "See the eighteen countries our advisors cover on a map",
        note: "Filter by region; each country lists its advisor",
      },
      {
        what: "Read a guide to Delhi",
        note: "The venue, the hotel, places to visit and getting here",
      },
      { what: "Read how registration will work, who can enter and the judge rule" },
      {
        what: "See what we have not decided yet, on the page it belongs to",
        note: "Each gap names the person who will answer it",
      },
      { what: "Email the tournament about anything, from one page" },
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
        area: "Visa",
        what: "Which visa to apply for, and the steps",
        note: "The visa page shows the outline until the instructions come in",
        owner: "Organising committee",
      },
      {
        area: "Visa",
        what: "How to ask for an invitation letter, and how long it takes",
        owner: "Organising committee",
      },
      {
        area: "In the news",
        what: "Links to the coverage so far",
        note: "The page is built; it lists each article once we have the links",
        owner: "Organising committee",
      },
      {
        area: "People",
        what: "A short bio for each chief adjudicator, tab and organising committee member",
        note: "Cards show each person's record until then",
        owner: "Organising committee",
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
