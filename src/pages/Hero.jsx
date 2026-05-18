import { Player } from '@lottiefiles/react-lottie-player';
import mac from "../assets/images/mac.json";
import RetroIcons from "../../components/RetroIcons";

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
    <section id="hero" className="relative min-h-[758px] flex flex-col items-center justify-start overflow-hidden scroll-mt-24">
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-full text-center px-6 sm:px-10 pt-48 sm:pt-50 lg:pt-50">
        <div className="relative flex items-center justify-center">
          {/* Retro Icons - Standalone Component */}
          <RetroIcons />

          <Player
            src={mac}
            className="w-60 sm:w-60 md:w-72 lg:w-80 object-contain relative z-10"
            autoplay
            loop
            style={{ transform: "perspective(2000px) rotateY(0deg) rotateX(0deg)" }}
          />
        </div>

        {/* Available badge */}
        <div
          className="
            inline-flex items-center justify-start gap-1
            bg-[#d6f0be] text-[#2d5128]
            font-bricolage font-black uppercase tracking-widest
            text-[6px] sm:text-[8px]
            px-2.5 py-1 sm:px-3.5 sm:py-1.5
            rounded-[2px] sm:rounded-[6px]
            border-[0.75px] sm:border-[1px] border-[#acc79a]
            shadow-[0_2px_0_0_#acc79a]
            hover:translate-y-[-0.5px] hover:shadow-[0_2.5px_0_0_#acc79a]
            transition-all duration-100 ease-out
            mb-4 sm:mb-6
            select-none
          "
        >
          <span className="relative flex h-1 w-1 sm:h-1.2 sm:w-1.2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-lg bg-[#4fa13f] opacity-75" />
            <span className="relative inline-flex h-1 w-1 sm:h-1.2 sm:w-1.2 rounded-lg bg-[#3d8330]" />
          </span>
          Available for work
        </div>

        {/* ── Horizontal looping name marquee ── */}
        <div
          className="w-screen overflow-hidden -mx-6 sm:-mx-10 mb-4 sm:mb-6 py-2"
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
        <div className="mt-4 sm:mt-8 w-full max-w-md">
          <div className="flex justify-center items-center pb-2">
            <a
              href="mailto:onkarchougule99@gmail.com"
              className="
                inline-block
                bg-[#f4dfbe] text-[#6b3719]
                font-bricolage font-black uppercase tracking-widest
                text-[11px] sm:text-sm
                px-5 py-2 sm:px-9 sm:py-3.5
                rounded-[10px] sm:rounded-[12px]
                border-[1.5px] sm:border-[2px] border-[#c6ad8a]
                shadow-[0_4px_0_0_#c6ad8a] sm:shadow-[0_6px_0_0_#c6ad8a]
                hover:translate-y-[1.5px] sm:hover:translate-y-[2px] hover:shadow-[0_2.5px_0_0_#c6ad8a] sm:hover:shadow-[0_4px_0_0_#c6ad8a]
                active:translate-y-[4px] sm:active:translate-y-[6px] active:shadow-none
                transition-all duration-100 ease-out
                select-none
              "
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
