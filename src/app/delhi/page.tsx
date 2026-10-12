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
        lede="You debate on the IIT Delhi campus in Hauz Khas and stay at The Grand in Vasant Kunj, half an hour away. Some of the city's oldest monuments and best food are between the two."
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
            <H2 sub="The Indian Institute of Technology Delhi, in Hauz Khas. A green campus you can walk end to end.">
              IIT Delhi
            </H2>
            <Prose className="mt-6">
              <p>
                Preliminary rounds run in the lecture theatres, which are tiered and air conditioned.
                The opening ceremony, the later knockout rounds and the grand final are in the main
                auditorium. The registration desk, the draw and the briefings are all in one place.
              </p>
              <p>
                The <strong>IIT Delhi Debating Society</strong> hosts the tournament. Its members run
                the desk each morning, so ask them if you get lost.
              </p>
              <p>
                The <strong>IIT Delhi</strong> metro station, on the Magenta Line, is at the gate.
                Hauz Khas Village is about twenty-five minutes away on foot, or five by auto.
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
            <H2 sub="The Grand New Delhi, in Vasant Kunj. Twin rooms, a pool and a garden.">
              Accommodation
            </H2>
            <Prose className="mt-6">
              <p>
                The hotel is about twenty minutes from the airport and half an hour from campus,
                longer in heavy traffic. Vasant Kunj is a quiet residential area with two large malls
                in walking distance.
              </p>
              <p>
                Rooms are twins. Once your registration is confirmed, we will ask who you want to
                share with and whether you need extra nights before or after the tournament.
              </p>
              <p>
                The USD 630 registration fee covers your room, the airport pick-up and drop, and the
                buses between The Grand and IIT Delhi every morning and evening.
              </p>
            </Prose>
          </div>
        </div>
      </Band>

      <Band id="city">
        <H2 sub="Where to go if you have a free morning or evening.">
          The city
        </H2>
        <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              h: "Hauz Khas",
              p: "A medieval reservoir, a madrasa and a tomb, next to a deer park and a village full of bars and restaurants. Five minutes from campus by auto, and the usual place to go after rounds.",
            },
            {
              h: "Qutub Minar",
              p: "The tallest brick minaret in the world, begun in 1193. About fifteen minutes south of campus by road. Go early to beat the heat and the queue.",
            },
            {
              h: "Mehrauli Archaeological Park",
              p: "Next to the Qutub Minar and far quieter. Tombs, stepwells and a ruined mosque spread through open scrubland.",
            },
            {
              h: "Lodhi Gardens",
              p: "A ninety-acre park with fifteenth-century tombs, where Delhi goes for a walk. Twenty minutes north of campus. The street art in Lodhi Colony is next door.",
            },
            {
              h: "Humayun's Tomb",
              p: "The Mughal garden tomb that inspired the Taj Mahal, well restored and worth the trip east.",
            },
            {
              h: "Old Delhi",
              p: "Chandni Chowk, the Jama Masjid and the lanes around them. Loud and crowded, with the best street food in the city. Take the Yellow Line metro to Chandni Chowk; driving there is slow.",
            },
            {
              h: "Eating",
              p: "Food from all over India in one city: Punjabi, Mughlai and South Indian everywhere, Tibetan in Majnu ka Tilla, Bengali in CR Park. Vegetarian food is easy to find.",
            },
            {
              h: "Getting about",
              p: "The metro is cheap, air conditioned and reaches most places on this list. You can buy a tourist card at the airport. For everything else, use Uber or Ola instead of hailing an auto.",
            },
            {
              h: "A warning",
              p: "Late June is very hot. Drink more water than you think you need, and avoid long walks in the middle of the day.",
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
            <H2 sub="Fly into Indira Gandhi International. We pick you up from there.">Getting here</H2>
            <Prose className="mt-6 text-cream/88">
              <p>
                <strong>Indira Gandhi International (DEL)</strong> is Delhi&apos;s main airport.
                It has direct flights from Singapore, Kuala Lumpur, Bangkok, Hong Kong, Tokyo, Sydney,
                Melbourne, Colombo, Dhaka and Kathmandu.
              </p>
              <p>
                Airport pick-up and drop are included in your fee. The hotel is about twenty minutes
                from the airport by road.
              </p>
              <p>
                If you are coming overland from Nepal or Bangladesh, or by train from elsewhere in
                India, tell us when you register and we will arrange to meet you.
              </p>
            </Prose>
          </div>
          <div id="visas">
            <H2 sub="Most of the region can apply online. Apply early.">Visas</H2>
            <Prose className="mt-6 text-cream/88">
              <p>
                Most nationalities at this tournament can get an Indian <strong>e-Visa</strong>{" "}
                online before they travel. It usually takes a few working days, but the rules differ
                by country, so check with the Indian high commission in yours.
              </p>
              <p>
                Some nationalities need a regular visa from a consulate. That takes longer and
                usually needs an invitation letter from us.
              </p>
            </Prose>
          </div>
        </div>
      </Band>

      <Band id="weather" tone="cream">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <H2 sub="The monsoon usually arrives during the tournament.">Weather and kit</H2>
          </div>
          <div className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {[
              ["Heat", "35–40°C in the day and rarely below 28°C at night. Humid once the rain starts."],
              ["Rain", "The monsoon usually reaches Delhi in the last week of June. Expect short, heavy downpours."],
              ["Indoors", "The debating rooms and the hotel are air conditioned and can feel cold. Bring a layer for rounds."],
              ["Clothes", "Light cotton or linen, one smart outfit for the final and the dinner, and sandals you can get wet."],
              ["Carry", "A refillable bottle, sunscreen, an umbrella and any medicines you take. Pharmacies are everywhere, but they may not stock your brand."],
              ["Power", "230V, with Type C, D and M sockets. A universal adapter works."],
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
        <H2 sub="What we know so far about getting around the venue and the hotel.">
          Access
        </H2>
        <Prose className="mt-6">
          <p>
            The campus and the hotel both have lifts and ramps in places. We have not yet checked
            either fully for step-free access, so we will not call them step-free. If you have
            access needs, email us and we will tell you what we know.
          </p>
        </Prose>
      </Band>
    </>
  );
}
