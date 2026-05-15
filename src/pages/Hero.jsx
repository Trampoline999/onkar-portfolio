import { Player } from '@lottiefiles/react-lottie-player';
import mac from "../assets/images/mac.json";
import { InteractiveHoverButton } from "../../components/ui/interactive-hover-button"

/* Repeat enough times so the seamless-loop duplicate fills any screen width */
const REPEATS = 8;

const NameStrip = () => (
  <>
    {Array.from({ length: REPEATS }).map((_, i) => (
      <span key={i} className="inline-flex items-center gap-5 sm:gap-10 pr-5 sm:pr-10">
        <span className="font-monolisa tracking-[-0.1em] font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-black dark:text-gray-100 whitespace-nowrap leading-none">
          Onkar Chougule
        </span>
        <span className="text-black/20 dark:text-white/20 text-2xl sm:text-3xl select-none">✦</span>
      </span>
    ))}
  </>
);

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col justify-center overflow-hidden">
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-full text-center px-6 sm:px-10">
        <Player
          src={mac}
          className="w-60 sm:w-60 md:w-72 lg:w-80 object-contain -my-4 sm:-my-8"
          autoplay
          loop
          style={{ transform: "perspective(2000px) rotateY(0deg) rotateX(0deg)" }}
        />

        {/* Available badge */}
        <div
          className="inline-flex items-center gap-1.5 sm:gap-2 text-[8px] sm:text-xs tracking-widest uppercase mb-4 sm:mb-6 text-black dark:text-gray-50 px-2 py-1 sm:px-3 sm:py-2 rounded-full"
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-500" />
          </span>
          Available for work
        </div>

        {/* ── Horizontal looping name marquee ── */}
        <div
          className="w-screen overflow-hidden -mx-6 sm:-mx-10 mb-4 sm:mb-6 py-1"
          style={{
            /* fade edges so the loop feels infinite */
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          }}
        >
          <div className="hero-marquee-track">
            <NameStrip />
            {/* exact duplicate for seamless wrap */}
            <NameStrip />
          </div>
        </div>

        {/* Sub-tagline */}
        <p className="text-xs sm:text-base md:text-l max-w-[260px] sm:max-w-sm md:max-w-md text-neutral-700 dark:text-neutral-300 tracking-wide leading-tight font-sans">
          I love building things that work beautifully — clean code, smooth
          interactions, and products that feel alive.
        </p>

        {/* CTA */}
        <div className="mt-8 w-full max-w-md">
          <div className="flex justify-center items-center">
            <a href="mailto:onkarchougule99@gmail.com">
              <InteractiveHoverButton className="rounded-lg border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/15 px-6 py-2 text-xs sm:text-sm font-semibold tracking-wider text-black dark:text-white backdrop-blur-sm transition">
                Email Me
              </InteractiveHoverButton>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
