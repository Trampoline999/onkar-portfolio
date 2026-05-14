import { useRef } from "react";
import learning from "../assets/images/learning.webm";
import fr32Video from "../assets/images/fr32.webm";
import handVideo from "../assets/images/hand.webm";
import guyVideo from "../assets/images/sidhuWithAudio.webm";
import { ChevronRight, ChevronLeft } from "lucide-react";

const CARDS = [
  {
    id: 1,
    category: "Logo",
    title: "Animated\n Inflated Logo.",
    video: fr32Video, // 2. Use the imported variable, not a string
  },
  {
    id: 2,
    category: "Product",
    title: "Calenders for \nGood Habits Club.",
    video: handVideo,
  },
  {
    id: 3,
    category: "Designing",
    title: "Vibing\n With Moosewala.",
    video: guyVideo,
  },
  {
    id: 3,
    category: "Product",
    title: "Sharing \n and Networking.",
    video: learning,
  },
];

const Carousel = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex flex-col justify-center pt-14 pb-2 overflow-visible">
      <div
        ref={scrollContainerRef}
        className="flex gap-4 md:gap-6 px-6 md:px-12 overflow-x-auto snap-x snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <style>{`div::-webkit-scrollbar { display: none; }`}</style>

        {CARDS.map((card) => (
          <div
            key={card.id}
            className="relative w-[85vw] sm:w-[380px] md:w-[420px] h-[550px] md:h-[650px] shrink-0 rounded-[32px] overflow-hidden snap-start border-6 border-white dark:border-zinc-800"
          >
            <video
              src={card.video}
              autoPlay
              loop
              muted
              playsInline
              // Important: Ensure the video covers the container
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 left-0 w-full p-8 md:p-8 z-20 bg-gradient-to-t from-black/40 via-black/5 to-transparent">
              <p className="text-white/90 text-sm md:text-base font-medium mb-3 tracking-wide drop-shadow-lg">
                {card.category}
              </p>
              <h2 className="text-white text-2xl md:text-[32px] font-bricolage font-semibold leading-[1] whitespace-pre-line tracking-tight drop-shadow-2xl">
                {card.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end mt-12 px-6 md:px-12">
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
          >
            <ChevronLeft className="w-6 h-6 text-black dark:text-gray-300" strokeWidth={3}/>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
            style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
          >
            <ChevronRight className="w-6 h-6 text-black dark:text-gray-300" strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
