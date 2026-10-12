import { PageHead, Band, SubNav, H2, Prose } from "@/components/Shell";
import Carousel from "@/components/Carousel";
import { site } from "@/content/site";

export const metadata = {
  title: "Delhi",
  description:
    "The venue, the hotel, the city, and everything about getting to New Delhi for India Australs 2027.",
};

const sections = [
  { id: "venue", label: "The venue" },
  { id: "stay", label: "Accommodation" },
  { id: "city", label: "The city" },
  { id: "getting-here", label: "Getting here" },
  { id: "visas", label: "Visas" },
  { id: "weather", label: "Weather and kit" },
  { id: "access", label: "Access" },
];

export default function Delhi() {
  return (
    <>
      <PageHead
        kicker="Delhi"
        title="Delhi"
        lede="Debates run on the IIT Delhi campus in Hauz Khas. Teams sleep at The Grand in Vasant Kunj, half an hour west. Between the two sits some of the oldest built fabric in the city, and the best eating in it."
        facts={[
          { k: "Debating at", v: site.venue },
          { k: "Staying at", v: site.hotel },
          { k: "Airport", v: "Indira Gandhi International (DEL)" },
          { k: "Nearest metro", v: "IIT Delhi, Magenta Line" },
          { k: "Late June", v: "35–40°C, monsoon breaking" },
        ]}
      />
      <SubNav items={sections} />

      <Band id="venue">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <H2 sub="The Indian Institute of Technology Delhi, in Hauz Khas. A green, walkable campus with the Qutub Minar a few minutes down the road.">
              IIT Delhi
            </H2>
            <Prose className="mt-6">
              <p>
                Preliminary rounds run in the lecture theatres, which are tiered, air conditioned and
                sized for roughly the audience a debate draws. The opening, the later out-rounds and
                the grand final go in the main auditorium. The registration desk, the draw and the
                briefings all happen in one place so you are not walking the campus looking for your
                room.
              </p>
              <p>
                The <strong>IIT Delhi Debating Society</strong> hosts us. They are the people you
                will see at the desk each morning, and they know the campus better than any map of
                it.
              </p>
              <p>
                Campus sits on the Magenta Line. The <strong>IIT Delhi</strong> metro station is
                at the gate. From there it is around forty minutes to Hauz Khas Village
                on foot or five by auto.
              </p>
            </Prose>
          </div>
          <div className="self-center">
            <Carousel
              label="Photos of IIT Delhi and its debating society"
              slides={[
                { src: "/img/photos/iitd-main-building-2.webp", alt: "The main building at IIT Delhi", credit: "Azanti, CC BY-SA 4.0", creditUrl: "https://commons.wikimedia.org/wiki/File:Indian_Institute_of_Technology_Delhi.jpg" },
                { src: "/img/photos/iitd-front.webp", alt: "The front of the main building at IIT Delhi, with its name in Hindi and English", credit: "Manishontop02, CC BY-SA 4.0", creditUrl: "https://commons.wikimedia.org/wiki/File:Iit_Delhi_main_photo_location.jpg" },
                { src: "/img/photos/iitd-auditorium.webp", alt: "The auditorium at IIT Delhi" },
                { src: "/img/photos/iitd-lecture-hall.webp", alt: "A lecture theatre at IIT Delhi" },
                { src: "/img/photos/iitd-night.webp", alt: "The main building at IIT Delhi lit up at night", credit: "Codenamebazinga, CC BY-SA 4.0", creditUrl: "https://commons.wikimedia.org/wiki/File:IIT_Delhi_at_Night.jpg" },
                { src: "/img/photos/debsoc-1.webp", alt: "Members of the IIT Delhi Debating Society on stage" },
                { src: "/img/photos/debsoc-2.webp", alt: "Members of the IIT Delhi Debating Society in a lecture theatre" },
              ]}
            />
          </div>
        </div>
      </Band>

      <Band id="stay" tone="cream">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="order-2 self-center lg:order-1">
            <Carousel
              label="Photos of The Grand New Delhi"
              slides={[
                { src: "/img/photos/grand-exterior-pool.webp", alt: "The Grand New Delhi seen across the pool and gardens", credit: "The Grand New Delhi", creditUrl: "https://www.thegrandnewdelhi.com/" },
                { src: "/img/photos/grand-lobby.webp", alt: "The lobby at The Grand New Delhi", credit: "The Grand New Delhi", creditUrl: "https://www.thegrandnewdelhi.com/" },
                { src: "/img/photos/grand-atrium-2.webp", alt: "The atrium restaurant at The Grand New Delhi, looking out to the garden", credit: "The Grand New Delhi", creditUrl: "https://www.thegrandnewdelhi.com/" },
                { src: "/img/photos/grand-twin-room.webp", alt: "A twin room at The Grand New Delhi", credit: "The Grand New Delhi", creditUrl: "https://www.thegrandnewdelhi.com/" },
                { src: "/img/photos/grand-pool-2.webp", alt: "The pool at The Grand New Delhi from above", credit: "The Grand New Delhi", creditUrl: "https://www.thegrandnewdelhi.com/" },
                { src: "/img/photos/grand-aerial.webp", alt: "The Grand New Delhi and the green around it in Vasant Kunj, from the air", credit: "The Grand New Delhi", creditUrl: "https://www.thegrandnewdelhi.com/" },
              ]}
            />
          </div>
          <div className="order-1 lg:order-2">
            <H2 sub="The Grand New Delhi, in Vasant Kunj. Twin rooms, a pool, and breakfast in the atrium before the draw goes up.">
              Accommodation
            </H2>
            <Prose className="mt-6">
              <p>
                It is about twenty minutes from the airport and half an hour to campus, longer when
                Delhi is having one of its mornings. Vasant Kunj is quiet, residential and has two
                large malls within walking distance if you have forgotten something.
              </p>
              <p>
                Rooms are twins. Who you share with, how rooms are allocated and whether a night
                either side of the tournament can be added are all things we will ask you about on a
                form once your registration is confirmed.
              </p>
              <p>
                Your room is part of the USD 630 registration fee. So are the buses that run between
                The Grand and IIT Delhi every morning and every evening, and your pick-up from and
                drop to the airport. None of it costs extra.
              </p>
            </Prose>
          </div>
        </div>
      </Band>

      <Band id="city">
        <H2 sub="You will have mornings free and at least one proper evening. Delhi rewards both.">
          The city
        </H2>
        <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              h: "Hauz Khas",
              p: "A thirteenth-century reservoir, a madrasa and a tomb, with a deer park attached and a village of bars and restaurants built up the hill behind it. Ten minutes from campus and the obvious place for a round-two debrief.",
            },
            {
              h: "Qutub Minar",
              p: "The tallest brick minaret in the world, begun in 1193, a few minutes south of campus. Go early, before the heat and the queue.",
            },
            {
              h: "Mehrauli Archaeological Park",
              p: "Next to the Qutub and almost empty by comparison. Tombs, stepwells and a ruined mosque scattered through scrub. The best hour you can spend within walking distance of the venue.",
            },
            {
              h: "Lodhi Gardens",
              p: "Ninety acres of fifteenth-century tombs in a park where the city goes to walk. Twenty minutes north. Pair it with the street art in Lodhi Colony.",
            },
            {
              h: "Humayun's Tomb",
              p: "The Mughal garden tomb the Taj Mahal was built from the idea of. Restored properly, and worth the trip east.",
            },
            {
              h: "Old Delhi",
              p: "Chandni Chowk, Jama Masjid and the lanes around them. Loud, crowded and the best food in the city. Take the Yellow Line to Chandni Chowk rather than driving.",
            },
            {
              h: "Eating",
              p: "Regional India compressed into one city. Punjabi, Mughlai, South Indian, Tibetan in Majnu ka Tilla, Bengali in CR Park. Every kitchen assumes vegetarian first.",
            },
            {
              h: "Getting about",
              p: "The Metro is clean, fast, cheap and air conditioned, and it reaches almost everywhere on this page. Buy a tourist card at the airport. Otherwise use Uber or Ola rather than flagging autos.",
            },
            {
              h: "A warning",
              p: "Late June is genuinely hot and the air is not good. Drink more water than you think you need, carry a bottle into every round, and do not plan a long walk in the middle of the day.",
            },
          ].map((c) => (
            <div key={c.h} className="border-t border-ink/15 pt-4">
              <h3 className="text-[1.2rem]">{c.h}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.68] text-ink/82">{c.p}</p>
            </div>
          ))}
        </div>
      </Band>

      <Band id="getting-here" tone="navy">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <H2 sub="Everything arrives through one airport, and it is a good one.">Getting here</H2>
            <Prose className="mt-6 text-cream/88">
              <p>
                <strong>Indira Gandhi International (DEL)</strong> is the only international airport
                serving Delhi. Terminal 3 takes almost all long-haul and most regional traffic. It
                flies direct from Singapore, Kuala Lumpur, Bangkok, Hong Kong, Seoul, Tokyo,
                Sydney, Melbourne, Colombo, Dhaka and Kathmandu.
              </p>
              <p>
                From the airport to the hotel is about twenty minutes by road. The Airport Express
                metro runs into the centre in twenty, but for Vasant Kunj a car is simpler. Prepaid
                taxi counters sit inside the arrivals hall; Uber and Ola both work and have marked
                pickup zones.
              </p>
              <p>
                If you are coming overland from Nepal or Bangladesh, or by train from elsewhere in
                India, tell us on the arrivals form and we will make sure someone is expecting you.
              </p>
            </Prose>
          </div>
          <div id="visas">
            <H2 sub="Most of the region can apply online. Start early anyway.">Visas</H2>
            <Prose className="mt-6 text-cream/88">
              <p>
                India runs an <strong>e-Visa</strong> scheme that covers most nationalities in this
                tournament&apos;s reach, applied for online before you travel. It is usually granted
                in a few working days, but the window and the documents differ by country, so check
                your own high commission rather than a friend&apos;s experience.
              </p>
              <p>
                Some nationalities need a full visa through a consulate, which takes longer and
                normally wants an invitation letter from the host.
              </p>
            </Prose>
          </div>
        </div>
      </Band>

      <Band id="weather" tone="cream">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <H2 sub="Late June into early July is the turn of the monsoon.">Weather and kit</H2>
          </div>
          <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {[
              ["Heat", "35–40°C in the day, rarely below 28 at night. Humid once the rain arrives."],
              ["Rain", "The monsoon usually breaks over Delhi in the last week of June. Expect sudden, heavy, short downpours rather than all-day drizzle."],
              ["Indoors", "Every debating room and the hotel are air conditioned, and the contrast is sharp. Bring something with sleeves for rounds."],
              ["Clothes", "Light cotton and linen. One set of smart clothes for the final and the dinner. Sandals you do not mind getting wet."],
              ["Carry", "A refillable bottle, sunscreen, an umbrella, and any medication you take. Pharmacies sit on every corner. Your brand may not."],
              ["Power", "230V, Type C, D and M sockets. A universal adapter covers it."],
            ].map(([h, p]) => (
              <div key={h} className="border-t border-ink/15 pt-3.5">
                <h3 className="rail text-navy">{h}</h3>
                <p className="mt-2 text-[14.5px] leading-[1.66] text-ink/82">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </Band>

      <Band id="access">
        <H2 sub="We would rather check this properly than tell you it is fine and be wrong when you arrive.">
          Access
        </H2>
        <Prose className="mt-6">
          <p>
            Both the campus and the hotel have lifts and ramps in places. Neither has been walked
            end to end with a wheelchair, a mobility aid or a support worker in mind, and until that
            is done we are not going to describe either as step-free.
          </p>
        </Prose>
      </Band>
    </>
  );
}
