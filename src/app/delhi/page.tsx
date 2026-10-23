import Link from "next/link";
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
];

export default function Delhi() {
  return (
    <>
      <PageHead
        kicker="Delhi"
        title="Delhi"
        lede="Participants will debate on the IITD campus in Hauz Khas and will be accommodated at The Grand, Vasant Kunj. Some of the city's finest neighborhoods and best food sit adjacent to the two."
        facts={[
          { k: "Debating at", v: site.venue },
          { k: "Staying at", v: site.hotel },
          { k: "Airport", v: "Indira Gandhi International (IGI)" },
          { k: "Nearest metro", v: "IIT Delhi, Magenta Line" },
          { k: "Late June", v: "35–40°C, monsoon breaking" },
        ]}
      />
      <SubNav items={sections} />

      <Band id="venue">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <H2>IIT Delhi</H2>
            <Prose className="mt-6">
              <p>
                The Indian Institute of Technology, Delhi sits on a 320-acre campus in the heart of
                New Delhi, home to over eight thousand students. The campus blends green surroundings
                with modern, centrally air-conditioned academic blocks, alongside extensive sporting
                facilities, including an Olympic-size swimming pool.
              </p>
              <p>
                As one of India&apos;s premier institutions, IIT Delhi offers a setting that&apos;s as
                comfortable as it is prestigious, an ideal home for a week of debating.
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
            <H2 sub="The Grand New Delhi, in Vasant Kunj.">
              Accommodation
            </H2>
            <Prose className="mt-6">
              <p>
                Participants will be staying at The Grand New Delhi, located in the enclave of Vasant
                Kunj just 20 minutes from the airport as well as the debate venue. The hotel is
                well-connected to the rest of the city, close to the metro, with ride-hailing
                services available within minutes.
              </p>
              <p>
                We will accommodate participants in twin-sharing rooms. The hotel offers a range of
                facilities for participants to enjoy throughout the tournament: a 24/7 cafe, a bar, a
                25-metre outdoor pool, a 24/7 fitness centre, a luxury spa, room service and
                sprawling grounds to stroll around.
              </p>
              <p>
                The hotel also has an on-call medical officer and can cater to dietary restrictions.
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
              p: "Chandni Chowk, the Jama Masjid and the lanes around them. Loud and crowded, with the best street food in the city.",
            },
            {
              h: "Eating",
              p: "Food from all over India in one city: Punjabi, Mughlai and South Indian everywhere, Tibetan in Majnu ka Tilla, Bengali in CR Park. Vegetarian food is easy to find.",
            },
            {
              h: "Getting about",
              p: "The metro is cheap, air conditioned and reaches most places on this list. You can buy a tourist card at the airport. Ride hailing apps such as Ola, Rapido and Uber are convenient and reliable as well.",
            },
            {
              h: "Pro tip",
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
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <H2>Getting here</H2>
            <Prose className="mt-6 text-cream/88">
              <p>
                <strong>Indira Gandhi International (IGI) Airport, New Delhi</strong> is India&apos;s
                primary international aviation hub and one of the busiest airports in South Asia. The
                airport serves as a major gateway for domestic and international travellers visiting
                India. It operates through three terminals, with Terminal 3 handling most
                international flights and a significant number of domestic services.
              </p>
              <p>Airport pick up and drop shall be facilitated by the organizing committee.</p>
            </Prose>
          </div>
          <div id="visas" className="self-center">
            <H2 sub="Everything you need to get your Indian visa in time.">Visas</H2>
            <Link href="/visa/" className="mt-6 inline-block border border-gold/60 bg-gold/15 px-5 py-2.5 text-[14.5px] text-gold transition-colors duration-150 hover:bg-gold hover:text-ink">
              Read the visa guide
            </Link>
          </div>
        </div>
      </Band>
    </>
  );
}
