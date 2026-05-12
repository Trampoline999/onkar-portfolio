import SplitText from "../../components/SplitText";
import bgImage from "../assets/images/bgImage.png";
import { Player } from '@lottiefiles/react-lottie-player';
import mac from "../assets/images/mac.json";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden ">
      {/* Layer 3 — hero text */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-full text-center px-6 sm:px-10 ">
        <Player
          src={mac}
          className="w-60 sm:w-60 md:w-72 lg:w-80 object-contain -my-4 sm:-my-8"
          autoplay
          loop
          // Optional: add mouse-following physics for fun
          style={{ transform: "perspective(2000px) rotateY(0deg) rotateX(0deg)" }}
        />
        <p
          className="text-[10px] sm:text-xs tracking-widest uppercase mb-3 sm:mb-4 text-black dark:text-gray-50 px-2 py-2 rounded-lg"
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          Available for work
        </p>

        <SplitText
          text="Onkar Chougule"
          className="font-instrument-spaced tracking-wide text-4xl sm:text-3xl md:text-6xl lg:text-8xl font-bold text-black dark:text-gray-100 mb-3 sm:mb-5 leading-tight"
        />
        <p className="text-xs sm:text-base md:text-l max-w-[260px] sm:max-w-sm md:max-w-md text-neutral-700 dark:text-neutral-300 tracking-wide leading-tight font-sans">
          I love building things that work beautifully — clean code, smooth
          interactions, and products that feel alive.
        </p>
        <div className="mt-8 w-full max-w-md">
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-3">
            <input
              type="email"
              placeholder="enter your mail"
              className="w-full sm:w-1/2 rounded-lg border border-black/20 dark:border-white/20 bg-black/5 dark:bg-white/10 px-3 py-2 text-sm text-black dark:text-white placeholder:text-black/50 dark:placeholder:text-white/50 outline-none backdrop-blur-sm"
            />
            <button className="w-full sm:w-auto rounded-lg border border-black/20 dark:border-white/20 bg-black/10 dark:bg-white/15 px-4 py-2 text-xs sm:text-sm font-semibold tracking-wider text-black dark:text-white backdrop-blur-sm transition hover:bg-black/20 dark:hover:bg-white/25">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
