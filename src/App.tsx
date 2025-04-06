import { MapPin } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import DeepSolv from "./assets/clients/deep-solv.png";
import SIGN3 from "./assets/clients/sign3.png";
import TruEstate from "./assets/clients/true-estate.png";
import DeepSolvBg from "./assets/clients/deep-solv.webp";
import SIGN3Bg from "./assets/clients/sign3.webp";
import TruEstateBg from "./assets/clients/true-estate.webp";

import { HiMapPin } from "react-icons/hi2";
import WhatsappIcon from "./assets/misc/whatsapp-logo.png";

function App() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const autoScrollInterval: any = useRef(null);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const startAutoScroll = useCallback(() => {
    if (!emblaApi) return;

    // Clear any existing interval
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
    }

    // Set new interval
    autoScrollInterval.current = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 2000); // Adjust timing as needed (3000ms = 3 seconds)
  }, [emblaApi]);

  const resetAutoScroll = useCallback(() => {
    startAutoScroll();
  }, [startAutoScroll]);
  useEffect(() => {
    if (!emblaApi) return;

    const handlePointerDown = () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };

    emblaApi.on("select", updateButtons);
    emblaApi.on("pointerDown", handlePointerDown);

    updateButtons();
    startAutoScroll();

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
      emblaApi.off("select", updateButtons);
      emblaApi.off("pointerDown", handlePointerDown);
    };
  }, [emblaApi, updateButtons, startAutoScroll]);

  return (
    <div className="w-full bg-black">
      <div className="min-h-screen bg-black mx-auto text-white max-w-7xl">
        {/* Header */}
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-Archivo">Unwind</h1>
          <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full font-Outfit">
            <img src={WhatsappIcon} className="w-7" alt="" />
            Chat With Us
          </button>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-8xl font-bold mb-6 font-Archivo">
            Craft Memorable
            <br />
            Corporate Experiences!
          </h2>
          <p className="text-gray-400 max-w-5xl mx-auto mb-8 font-Outfit text-xl">
            Your one-stop solution for corporate offsites, retreats, and
            meetings—offering transport,
            <br /> experiences, accommodation, workspaces, persnalised gifts and
            F&B, while saving up to 30%.
          </p>
          <button className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded-full mx-auto font-Outfit">
            <img src={WhatsappIcon} className="w-7" alt="" />
            Chat With Us
          </button>
        </section>

        {/* Client Gallery */}
        <section className="container mx-auto px-4 py-12 font-Outfit">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-3 relative h-[500px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <video
                src="./video.webm" // Replace with the actual path to your video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            {/* Right column with 3 images */}
            <div className="col-span-12 md:col-span-9 grid grid-rows-2 gap-4">
              <div className="relative h-[245px] rounded-2xl overflow-hidden ">
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <img
                  src={TruEstateBg}
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
                    src={DeepSolvBg}
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
                    src={SIGN3Bg}
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
                      <div className="absolute bottom-0 left-0 text-center right-0 bg-gradient-to-t from-black/90 to-transparent px-6">
                        <h3 className="text-2xl  font-bold mb-2 font-Archivo">
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
              onClick={() => {
                emblaApi && emblaApi.scrollPrev();
                resetAutoScroll();
              }}
              className={`absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full transition-opacity ${
                canScrollPrev ? "opacity-100" : "opacity-50"
              }`}
              disabled={!canScrollPrev}
            >
              <FaChevronLeft size={24} />
            </button>

            {/* Right Arrow Button */}
            <button
              onClick={() => {
                emblaApi && emblaApi.scrollNext();
                resetAutoScroll();
              }}
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
        <footer className="container mx-auto px-4 py-8 mt-20 text-center overflow-hidden relative">
          <p className="text-gray-400">© ALL RIGHTS RESERVED, UNWIND</p>
          <h2 className="text-9xl font-bold mt- relative top-20">Unwind</h2>
        </footer>
      </div>
    </div>
  );
}

const features = [
  {
    title: "All-In-One Solution",
    description:
      "Find everything you need in one place—accommodation, F&B, activities, and transportation.",
  },
  {
    title: "Budget & Cost Optimization",
    description:
      "Benefit from expert guidance, unbeatable group rates, exclusive offers, that can save you up to 30%.",
  },
  {
    title: "Flexible Payment & Transparency",
    description:
      "Enjoy Transparent pricing for all the line items & customizable payment plans.",
  },
  {
    title: "Tailored Packages",
    description:
      "Experience fully customized itineraries—from luxury resorts to offbeat destinations—designed to fit your exact needs.",
  },
  {
    title: "Hassle-Free Planning",
    description:
      "We manage every detail, from vendor coordination to client liaison, ensuring you enjoy a completely stress-free retreat.",
  },
  {
    title: "Curated Venue Selection",
    description:
      "Quickly discover ideal locations with our personalized venue recommendations.",
  },
];

import PlayArena from "./assets/experiences/play-arena.webp";
import Wonderla from "./assets/experiences/wonderla.webp";
import Bannerghatta from "./assets/experiences/bannerghatta.webp";
import NandiTrek from "./assets/experiences/nandi-trek.webp";
import Camping from "./assets/experiences/camping.webp";
import Movie from "./assets/experiences/movie.webp";
import CocktailsGames from "./assets/experiences/cocktails.webp";
import PokerNight from "./assets/experiences/pocker-night.webp";
import TeamOlympics from "./assets/experiences/team-olympics.webp";
import PrivateMusicPerformance from "./assets/experiences/music.webp";
import MichelinStar1 from "./assets/experiences/michelin-star.webp";
import MichelinStar2 from "./assets/experiences/michelin-star2.webp";
import BarbecueBonfire from "./assets/experiences/barbecue-bonfire.webp";
import SilentDJ from "./assets/experiences/silent-DJ.webp";
import GoKarting from "./assets/experiences/go-karting.webp";
import { useCallback, useEffect, useRef, useState } from "react";
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
    title: "Private Music Performance",
    activities: "10+",
    image: PrivateMusicPerformance,
  },
  {
    title: "Michelin star private chef experience",
    activities: "10+",
    image: MichelinStar1,
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
    title: "Michelin star private chef experience",
    activities: "10+",
    image: MichelinStar2,
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
  {
    title: "Go Karting",
    activities: "10+",
    image: GoKarting,
  },
];

export default App;
