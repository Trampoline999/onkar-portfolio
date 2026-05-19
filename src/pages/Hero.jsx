import { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import mac from "../assets/images/mac.json";
import RetroIcons from "../../components/RetroIcons";

const casingColors = ['beige', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange'];

const colorPalettes = {
  beige: {
    highlight: [1.0, 0.95, 0.88],
    base: [0.93, 0.89, 0.84],
    shadow: [0.88, 0.85, 0.81],
    deepShadow: [0.82, 0.79, 0.75],
    grooves: [0.65, 0.63, 0.6]
  },
  blue: {
    highlight: [0.93, 0.97, 1.0],
    base: [0.79, 0.92, 0.99],
    shadow: [0.64, 0.84, 0.96],
    deepShadow: [0.48, 0.72, 0.88],
    grooves: [0.30, 0.49, 0.62]
  },
  green: {
    highlight: [0.94, 0.99, 0.93],
    base: [0.82, 0.95, 0.78],
    shadow: [0.68, 0.88, 0.63],
    deepShadow: [0.52, 0.76, 0.46],
    grooves: [0.33, 0.53, 0.28]
  },
  yellow: {
    highlight: [1.0, 0.99, 0.92],
    base: [0.98, 0.94, 0.75],
    shadow: [0.93, 0.85, 0.58],
    deepShadow: [0.83, 0.72, 0.42],
    grooves: [0.58, 0.48, 0.24]
  },
  purple: {
    highlight: [0.97, 0.94, 0.99],
    base: [0.88, 0.79, 0.95],
    shadow: [0.77, 0.64, 0.88],
    deepShadow: [0.62, 0.48, 0.76],
    grooves: [0.41, 0.29, 0.53]
  },
  pink: {
    highlight: [1.0, 0.94, 0.96],
    base: [0.97, 0.80, 0.86],
    shadow: [0.90, 0.65, 0.74],
    deepShadow: [0.78, 0.49, 0.60],
    grooves: [0.55, 0.30, 0.40]
  },
  orange: {
    highlight: [1.0, 0.96, 0.92],
    base: [0.98, 0.85, 0.72],
    shadow: [0.92, 0.72, 0.54],
    deepShadow: [0.80, 0.56, 0.38],
    grooves: [0.56, 0.36, 0.22]
  }
};

const round = (val) => Math.round(val * 100) / 100;

// Source keys from restored beige/grey mac.json
const sourceKeys = {
  '1, 0.95, 0.88': 'highlight',
  '0.93, 0.89, 0.84': 'base',
  '0.88, 0.85, 0.81': 'shadow',
  '0.82, 0.79, 0.75': 'deepShadow',
  '0.65, 0.63, 0.6': 'grooves'
};

const getTargetColor = (rgbArray, colorName) => {
  if (!Array.isArray(rgbArray) || rgbArray.length < 3) return null;
  const key = rgbArray.slice(0, 3).map(round).join(', ');
  const category = sourceKeys[key];
  if (category) {
    const result = [...colorPalettes[colorName][category]];
    if (rgbArray.length > 3) {
      result.push(rgbArray[3]);
    }
    return result;
  }
  return null;
};

const generateLottieForColor = (baseData, colorName) => {
  const cloned = JSON.parse(JSON.stringify(baseData));
  
  const traverseAndReplace = (obj) => {
    if (!obj || typeof obj !== 'object') return;
    
    if (obj.c && obj.c.k) {
      const k = obj.c.k;
      if (Array.isArray(k) && typeof k[0] === 'number') {
        const mapped = getTargetColor(k, colorName);
        if (mapped) obj.c.k = mapped;
      } else if (Array.isArray(k)) {
        k.forEach((kf) => {
          if (kf.s && Array.isArray(kf.s)) {
            const mapped = getTargetColor(kf.s, colorName);
            if (mapped) kf.s = mapped;
          }
          if (kf.e && Array.isArray(kf.e)) {
            const mapped = getTargetColor(kf.e, colorName);
            if (mapped) kf.e = mapped;
          }
        });
      }
    }
    
    for (let key in obj) {
      traverseAndReplace(obj[key]);
    }
  };
  
  traverseAndReplace(cloned);
  return cloned;
};

// Global cache for pre-built Lottie data objects
const lottieCache = {};

const getLottieData = (colorName) => {
  if (!lottieCache[colorName]) {
    lottieCache[colorName] = generateLottieForColor(mac, colorName);
  }
  return lottieCache[colorName];
};

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
  const [currentColor, setCurrentColor] = useState('beige');

  const cycleColor = () => {
    setCurrentColor((prev) => {
      const currentIndex = casingColors.indexOf(prev);
      const nextIndex = (currentIndex + 1) % casingColors.length;
      return casingColors[nextIndex];
    });
  };

  return (
    <section id="hero" className="relative min-h-[758px] flex flex-col items-center justify-start overflow-hidden scroll-mt-24">
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-full text-center px-6 sm:px-10 pt-48 sm:pt-50 lg:pt-50">
        <div 
          onMouseEnter={cycleColor}
          onClick={cycleColor}
          className="relative flex items-center justify-center cursor-pointer"
        >
          {/* Retro Icons - Standalone Component */}
          <RetroIcons />

          <Player
            src={getLottieData(currentColor)}
            className="w-60 sm:w-60 md:w-72 lg:w-80 object-contain relative z-10 pointer-events-none mac-lottie-player"
            autoplay
            loop
            style={{ transform: "perspective(2000px) rotateY(0deg) rotateX(0deg)" }}
          />
        </div>

        {/* Available badge */}
        <div
          className="inline-flex items-center justify-start gap-1 sm:gap-2 text-[7px] sm:text-[9px] tracking-widest uppercase mb-4 sm:mb-6 text-black dark:text-white px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg"
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
          }}
        >
          <span className="relative flex h-1 w-1 sm:h-1.5 sm:w-1.5">
            <span 
              className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
              style={{ backgroundColor: '#22c55e' }}
            />
            <span 
              className="relative inline-flex h-full w-full rounded-full"
              style={{ backgroundColor: '#22c55e' }}
            />
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
        <p className="text-xs sm:text-base md:text-l max-w-[260px] sm:max-w-sm md:max-w-md text-neutral-700 dark:text-neutral-300 tracking leading-tight tracking-wide font-geist-pixel">
          I love building things that work beautifully — clean code, smooth
          interactions, and products that feel alive.
        </p>

        {/* CTA */}
        <div className="mt-7 sm:mt-10 lg:mt-12 w-full max-w-md">
          <div className="flex justify-center items-center pb-2">
            <a
              href="mailto:onkarchougule99@gmail.com"
              className="
                inline-block
                bg-[#f6f4f1] dark:bg-[#1e1d1d] text-[#1e1d1d] dark:text-[#f6f4f1]
                font-bricolage font-black uppercase tracking-widest
                text-[11px] sm:text-sm
                px-5 py-2 sm:px-9 sm:py-3.5
                rounded-[10px] sm:rounded-[12px]
                border-[1.5px] sm:border-[2px] border-[#2b2b2b] dark:border-[#f6f4f1]
                shadow-[0_4px_0_0_#2b2b2b] sm:shadow-[0_6px_0_0_#2b2b2b] dark:shadow-[0_4px_0_0_#f6f4f1] dark:sm:shadow-[0_6px_0_0_#f6f4f1]
                hover:translate-y-[1.5px] sm:hover:translate-y-[2px] hover:shadow-[0_2.5px_0_0_#2b2b2b] sm:hover:shadow-[0_4px_0_0_#2b2b2b] dark:hover:shadow-[0_2.5px_0_0_#f6f4f1] dark:sm:hover:shadow-[0_4px_0_0_#f6f4f1]
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
