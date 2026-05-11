import SplitText from "../../components/SplitText";
import bgImage from "../assets/images/bgImage.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen h-screen overflow-hidden">

      {/* Layer 3 — hero text */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 sm:px-10">
        <p
          className="text-[10px] sm:text-xs tracking-widest uppercase mb-3 sm:mb-4 text-gray-50 px-2 py-2 rounded-lg"
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
          className="font-instrument-spaced tracking-wide text-4xl sm:text-3xl md:text-6xl lg:text-8xl font-bold text-gray-100 mb-3 sm:mb-5 leading-tight"
        />
        <p className="text-xs sm:text-base md:text-l max-w-65 sm:max-w-sm md:max-w-md text-neutral-300 tracking-wide leading-tight font-sans">
          I love building things that work beautifully — clean code, smooth
          interactions, and products that feel alive.
        </p>
        <div className="mt-8 w-full max-w-md">
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-3">
            <input
              type="text"
              placeholder="enter your mail"
              className="w-full sm:w-1/2 rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur-sm"
            />
            <button className="w-full sm:w-auto rounded-lg border border-white/20 bg-white/15 px-4 py-2 text-xs sm:text-sm font-semibold tracking-wider text-white backdrop-blur-sm transition hover:bg-white/25">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
