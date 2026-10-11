export type Item = { what: string; note?: string; owner?: string; area?: string };
export type Group = {
  key: string;
  title: string;
  blurb: string;
  tone: "done" | "waiting" | "later";
  items: Item[];
};

export const updated = "11 October 2026";

export const groups: Group[] = [
  {
    key: "live",
    title: "Live now",
    tone: "done",
    blurb: "Anyone with the link can do all of this today.",
    items: [
      { what: "Read what the tournament is, when it runs and where it is held" },
      {
        what: "Understand how Australs is actually debated, speech by speech",
        note: "Useful if you have only ever debated British Parliamentary",
      },
      {
        what: "See all thirty-three people, and open any of them",
        note: "Judges, organisers and all nineteen regional advisors carry their debating record, taken from the posters and the bid document",
      },
      {
        what: "Read what a regional advisor actually does, and who else covers your region",
      },
      {
        what: "See the eighteen countries our advisors cover, drawn as routes into Delhi",
        note: "Filterable by region, and every country lists its advisor",
      },
      {
        what: "Read a real guide to Delhi",
        note: "The venue, the hotel, nine places worth a free morning, flights, visas, weather and what to pack",
      },
      {
        what: "Understand what hosting an Australs involves, and how the tournament grew since 1975",
      },
      {
        what: "See the fee, everything it covers, and who may enter",
        note: "USD 630: room at The Grand, airport pick-up and drop, daily buses, five lunches, five dinners, four socials",
      },
      { what: "Read how the rounds, motions and the break work" },
      { what: "Read who can apply for a scholarship and what it covers" },
      {
        what: "Find every question we cannot answer yet on the page where you would look for it",
        note: "Marked in place with the name of whoever holds the answer, rather than hidden in a list of questions",
      },
      { what: "Leave a name and an email to be told the day registration opens" },
      { what: "Find who to ask about what, and email the tournament at its own address" },
      { what: "Read all of it on a phone, with a keyboard, or with a screen reader" },
      { what: "Follow this page to see exactly where the website stands" },
    ],
  },
  {
    key: "waiting",
    title: "Waiting on an answer",
    tone: "waiting",
    blurb:
      "Each of these is a blank on the site right now. The page is already built and needs the answer typed in. The name beside it belongs to whoever has it.",
    items: [
      {
        area: "Equity",
        what: "Who sits on the equity team, and the confidential address to reach them",
        owner: "Equity team",
      },
      {
        area: "Equity",
        what: "The equity policy, written out in full",
        note: "Published by the equity team with input from the adjudication core and Org Comm",
        owner: "Equity team",
      },
      {
        area: "People",
        what: "Photos of Shivangi Sharma and Garvit Gosain",
        note: "They are on the site with their initials until then",
        owner: "Shivangi and Garvit",
      },
    ],
  },
  {
    key: "later",
    title: "The second build",
    tone: "later",
    blurb:
      "None of this can sit on a plain website. It needs people to sign in and a place to keep their answers, which is a separate build. It is not started, and it does not need to be until registration opens.",
    items: [
      { what: "Signing in, with a personal page for each team and judge" },
      { what: "The registration form itself, and showing whether payment has landed" },
      { what: "A checklist per team of every form they still owe us, with deadlines" },
      { what: "Separate views for each committee, so people only see their own work" },
      { what: "Confidential handling of equity and grievance cases" },
      { what: "Announcements that go out by email and appear when someone signs in" },
      { what: "Letting the organising committee pull the numbers out into a spreadsheet" },
      { what: "Checking people in on the day with a QR code" },
      { what: "Certificates after the tournament" },
      { what: "Showing the live tab, draws and results on this site" },
    ],
  },
];

export const counts = {
  done: groups.find((g) => g.key === "live")!.items.length,
  waiting: groups.find((g) => g.key === "waiting")!.items.length,
  later: groups.find((g) => g.key === "later")!.items.length,
};
