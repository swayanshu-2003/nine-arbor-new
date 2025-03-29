import { MapPin, MessageSquare } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import DeepSolv from "./assets/clients/deep-solv.png";
import SIGN3 from "./assets/clients/sign3.png";
import TruEstate from "./assets/clients/true-estate.png";
import PlayIcon from "./assets/clients/play.png";
import Group from "./assets/clients/group.png";

import { HiMapPin } from "react-icons/hi2";
import WhatsappIcon from "./assets/misc/whatsapp-logo.png";

function App() {
  // const [emblaRef] = useEmblaCarousel({ loop: true });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateButtons);
    updateButtons();
  }, [emblaApi, updateButtons]);

  return (
    <div className="w-full bg-black">
      <div className="min-h-screen bg-black mx-auto text-white max-w-7xl">
        {/* Header */}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-Archivo">Nine Arbor</h1>
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-Outfit">
            <MessageSquare size={20} />
            Chat With Us
          </button>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-6xl font-bold mb-6 font-Archivo">
            Craft Memorable
            <br />
            Corporate Experiences!
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8 font-Outfit">
            Your one-stop solution for corporate offsites, retreats, and
            meetings—offering transport, experiences, accommodation, workspaces,
            personalized gifts and F&B, while saving up to 30%.
          </p>
          <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full mx-auto font-Outfit">
            <MessageSquare size={20} />
            Chat With Us
          </button>
        </section>

        {/* Client Gallery */}
        <section className="container mx-auto px-4 py-12 font-Outfit">
          <div className="grid grid-cols-12 gap-4">
            {/* Large left image */}
            <div className="col-span-12 md:col-span-3 relative h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <img
                src={Group}
                alt="Corporate Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/40  p-4 rounded-2xl cursor-pointer">
                  <img src={PlayIcon} alt="" className="w-8 h-9" />
                </div>
              </div>
            </div>

            {/* Right column with 3 images */}
            <div className="col-span-12 md:col-span-9 grid grid-rows-2 gap-4">
              <div className="relative h-[245px] rounded-2xl overflow-hidden ">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <img
                  src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
                  alt="TruEstate Team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4  px-4 py-2 rounded-full flex flex-col items-start gap-2 font-bold">
                  <img src={TruEstate} alt="" className="w-32" />
                  <div className="flex items-center gap-1.5">
                    <MapPin size={16} />
                    <span>Bangalore</span>
                  </div>
                </div>
              </div>
              <div className="w-full grid grid-cols-2 gap-4">
                <div className="relative h-[245px] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                    alt="deepsolv Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4  px-4 py-2 rounded-full flex flex-col items-start gap-2 font-bold">
                    <img src={DeepSolv} alt="" className="w-32" />
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} />
                      <span>Bangalore</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-[245px] rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                  <img
                    src="https://images.unsplash.com/photo-1517048676732-d65bc937f952"
                    alt="SIGN3 Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4  px-4 py-2 rounded-full flex flex-col items-start gap-2 font-bold">
                    <img src={SIGN3} alt="" className="w-32" />
                    <div className="flex items-center gap-1.5">
                      <MapPin size={16} />
                      <span>Bangalore</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold mb-16 text-center font-Archivo">
            Why Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-zinc-900 p-6 rounded-2xl">
                <div className="bg-[#1F1F1F] p-2 rounded-md w-fit mb-4">
                  <HiMapPin className="" size={25} />
                </div>

                <h3 className="text-xl font-bold mb-3 font-Archivo">
                  {feature.title}
                </h3>
                <p className="text-gray-400 font-Outfit">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <div className="w-full flex items-center justify-center">
          <button className="rounded-full min-w-20 bg-white font-Archivo px-4 py-2 flex items-center gap-2 text-black">
            <img src={WhatsappIcon} className="w-7" alt="" />
            Chat With Us
          </button>
        </div>
        {/* Experiences Section with Carousel */}
        <section className="container mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold mb-16 text-center font-Archivo">
            Handpicked experiences
          </h2>
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_25%] px-2"
                  >
                    <div className="relative h-96 rounded-2xl overflow-hidden group">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                        <h3 className="text-xl font-bold mb-2 font-Archivo">
                          {exp.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Arrow Button */}
            <button
              onClick={() => emblaApi && emblaApi.scrollPrev()}
              className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full transition-opacity ${
                canScrollPrev ? "opacity-100" : "opacity-50"
              }`}
              disabled={!canScrollPrev}
            >
              <FaChevronLeft size={24} />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={() => emblaApi && emblaApi.scrollNext()}
              className={`absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full transition-opacity ${
                canScrollNext ? "opacity-100" : "opacity-50"
              }`}
              disabled={!canScrollNext}
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </section>
        <div className="w-full flex items-center justify-center">
          <button className="rounded-full min-w-20 bg-white font-Archivo px-4 py-2 flex items-center gap-2 text-black">
            <img src={WhatsappIcon} className="w-7" alt="" />
            Chat With Us
          </button>
        </div>

        {/* Footer */}
        <footer className="container mx-auto px-4 py-8 mt-20 text-center">
          <p className="text-gray-400 mb-8">
            © ALL RIGHTS RESERVED, NINE ARBOR
          </p>
          <h2 className="text-4xl font-bold">Nine Arbor</h2>
        </footer>
      </div>
    </div>
  );
}

const features = [
  {
    title: "All-In-One Solution",
    description:
      "Find Everything You Need In One Place—Accommodation, F&B, Activities, And Transportation.",
  },
  {
    title: "Budget & Cost Optimization",
    description:
      "Benefit From Expert Guidance, Unbeatable Group Rates, Exclusive Offers, That Can Save You Up To 30%.",
  },
  {
    title: "Flexible Payment & Transparency",
    description:
      "Enjoy Transparent Pricing For All The Line Items & Customizable Payment Plans.",
  },
  {
    title: "Tailored Packages",
    description:
      "Experience Fully Customized Itineraries—From Luxury Resorts To Offbeat Destinations—Designed To Fit Your Exact Needs.",
  },
  {
    title: "Hassle-Free Planning",
    description:
      "We Manage Every Detail, From Vendor Coordination To Client Liaison, Ensuring You Enjoy A Completely Stress-Free Retreat.",
  },
  {
    title: "Curated Venue Selection",
    description:
      "Quickly Discover Ideal Locations With Our Personalized Venue Recommendations.",
  },
];

import PlayArena from "./assets/clients/play-arena.png";
import Wonderla from "./assets/clients/wonderla.png";
import Bannerghatta from "./assets/clients/bannerghatta.png";
import NandiTrek from "./assets/clients/nandi-trek.png";
import Camping from "./assets/clients/camping.png";
import Movie from "./assets/clients/movie.png";
import CocktailsGames from "./assets/clients/cocktails.png";
import PokerNight from "./assets/clients/poker-night.png";
import TeamOlympics from "./assets/clients/team-olympics.png";
import PrivateMusicPerformance from "./assets/clients/music.png";
import MichelinStar from "./assets/clients/michelin-star.png";
import BarbecueBonfire from "./assets/clients/barbecue-bonfire.png";
import SilentDJ from "./assets/clients/silent-DJ.png";
import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const experiences = [
  {
    title: "Play Arena",
    activities: "10+",
    image: PlayArena,
  },
  {
    title: "Wonderla Amusement parks",
    activities: "10+",
    image: Wonderla,
  },
  {
    title: "Bannerghatta National Park",
    activities: "10+",
    image: Bannerghatta,
  },
  {
    title: " Nandi Trek",
    activities: "10+",
    image: NandiTrek,
  },

  {
    title: "Camping",
    activities: "10+",
    image: Camping,
  },
  {
    title: "Ourdoor Movie Screening",
    activities: "10+",
    image: Movie,
  },
  {
    title: "Cocktails & Games",
    activities: "10+",
    image: CocktailsGames,
  },
  {
    title: "Poker Night",
    activities: "10+",
    image: PokerNight,
  },
  {
    title: "Team Olympics",
    activities: "10+",
    image: TeamOlympics,
  },
  {
    title: "Private Music Performance",
    activities: "10+",
    image: PrivateMusicPerformance,
  },
  {
    title: "Michelin star private chef experience",
    activities: "10+",
    image: MichelinStar,
  },
  {
    title: "Barbecue & Bonfire",
    activities: "10+",
    image: BarbecueBonfire,
  },
  {
    title: "Silent DJ",
    activities: "10+",
    image: SilentDJ,
  },
];

export default App;
