import { useState, useEffect } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from "motion/react";
import mac from "../assets/images/mac.json";
import RetroIcons from "../../components/RetroIcons";
import { TypingAnimation } from "../../components/ui/typing-animation";

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



const casingColorHex = {
  beige: '#ede3d6',
  blue: '#c9ebfc',
  green: '#d1f2c7',
  yellow: '#faf0bf',
  purple: '#e0c9f2',
  pink: '#f7ccdb',
  orange: '#fad9b8'
};

const casingColorBorderHex = {
  beige: '#2b2b2b',
  blue: '#1e3a8a',
  green: '#14532d',
  yellow: '#713f12',
  purple: '#4c1d95',
  pink: '#831843',
  orange: '#7c2d12'
};

const Hero = () => {
  const [currentColor, setCurrentColor] = useState('beige');
  const [prevColor, setPrevColor] = useState('beige');
  const [hasBeenHovered, setHasBeenHovered] = useState(false);

  useEffect(() => {
    let active = true;
    let count = 0;
    const interval = setInterval(() => {
      if (!active) return;

      const playerContainers = document.querySelectorAll('.mac-lottie-player');
      let found = false;
      playerContainers.forEach((container) => {
        const helloGroups = container.querySelectorAll('g[aria-label="hello"]');
        if (helloGroups.length > 0) {
          found = true;
          helloGroups.forEach((group) => {
            // Hide the default hello text paths
            const paths = group.querySelectorAll('path');
            paths.forEach((p) => {
              p.style.display = 'none';
            });

            // Add our custom text if it's not already added
            let textEl = group.querySelector('.custom-screen-text');
            if (!textEl) {
              textEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
              textEl.setAttribute('class', 'custom-screen-text');
              textEl.setAttribute('x', '0');
              textEl.setAttribute('y', '30'); // Centered vertically in lottie coordinates
              textEl.setAttribute('text-anchor', 'middle');
              textEl.setAttribute('fill', '#000000');

              // Sacramento is imported in index.html, with fallbacks to other gorgeous scripts
              textEl.style.fontFamily = '"Sacramento", "Pacifico", "Great Vibes", "Yellowtail", cursive';
              textEl.style.fontSize = '120px';
              textEl.style.fontWeight = '500';
              textEl.textContent = 'onkar';

              group.appendChild(textEl);
            }
          });
        }
      });

      count++;
      // Keep checking up to 2 seconds or until we find it
      if (found || count > 20) {
        clearInterval(interval);
      }
    }, 100);

    return () => {
      active = false;
      clearInterval(interval);
    };
  }, [currentColor, prevColor]);

  const cycleColor = () => {
    setCurrentColor((prev) => {
      setPrevColor(prev);
      const currentIndex = casingColors.indexOf(prev);
      const nextIndex = (currentIndex + 1) % casingColors.length;
      return casingColors[nextIndex];
    });
  };

  return (
    <section id="hero" className="relative min-h-[758px] flex flex-col items-center justify-start overflow-hidden scroll-mt-24">
      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-full text-center px-6 sm:px-10 pt-48 sm:pt-50 lg:pt-50">
        <div className="relative flex items-center justify-center p-4">
          {/* Retro Icons - Standalone Component */}
          <RetroIcons activeColor={currentColor} hasBeenHovered={hasBeenHovered} />

          {/* Mac Player Wrapper with Peel Transition */}
          <div className="relative flex items-center justify-center overflow-hidden rounded-3xl">
            {/* Previous Color Player */}
            {prevColor !== currentColor && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <Player
                  src={getLottieData(prevColor)}
                  className="w-60 sm:w-60 md:w-72 lg:w-80 object-contain pointer-events-none mac-lottie-player"
                  autoplay
                  loop
                  style={{ transform: "perspective(2000px) rotateY(0deg) rotateX(0deg)" }}
                />
              </div>
            )}


            {/* Foreground/New Color Player with clip-path reveal */}
            <motion.div
              key={currentColor}
              initial={hasBeenHovered ? { clipPath: 'polygon(-10% 110%, -10% 110%, -10% 110%, -10% 110%, -10% 110%)' } : false}
              animate={{ clipPath: 'polygon(-10% 110%, -10% -10%, 110% -10%, 110% 110%, -10% 110%)' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 flex items-center justify-center"
            >
              <Player
                src={getLottieData(currentColor)}
                className="w-60 sm:w-60 md:w-72 lg:w-80 object-contain pointer-events-none mac-lottie-player"
                autoplay
                loop
                style={{ transform: "perspective(2000px) rotateY(0deg) rotateX(0deg)" }}
              />
            </motion.div>
          </div>

          {/* Invisible hover overlay to restrict interactive area precisely to the Mac casing */}
          <div
            onMouseEnter={() => {
              cycleColor();
              setHasBeenHovered(true);
            }}
            onClick={cycleColor}
            className="absolute inset-0 m-auto w-32 h-36 sm:w-32 sm:h-36 md:w-40 md:h-44 lg:w-44 lg:h-48 z-30 cursor-pointer bg-transparent rounded-2xl"
          />
        </div>

        {/* Available badge */}
        <div
          className="inline-flex items-center justify-start font-medium gap-1 sm:gap-2 text-[7px] sm:text-[9px] tracking-widest uppercase mb-4 sm:mb-6 text-black dark:text-white px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-lg"
          style={{
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
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

        {/* Static name title */}
        <h1 className="font-monolisa tracking-tighter font-black text-4xl sm:text-4xl md:text-6xl lg:text-7xl text-black dark:text-gray-100 leading-none mb-4 sm:mb-6 select-none whitespace-nowrap">
          Onkar Chougule
        </h1>

        <TypingAnimation
          as="p"
          className="text-xs sm:text-base md:text-l max-w-[260px] sm:max-w-sm md:max-w-md text-neutral-700 dark:text-neutral-300 leading-normal font-geist-pixel block"
          duration={30}
          showCursor={true}
        >
          I love building things that work beautifully — clean code, smooth interactions, and products that feel alive.
        </TypingAnimation>

        {/* CTA */}
        <div className="mt-7 sm:mt-10 lg:mt-12 w-full max-w-md">
          <div className="flex justify-center items-center pb-2">
            <a
              href="mailto:onkarchougule99@gmail.com"
              style={{
                backgroundColor: casingColorHex[currentColor],
                color: '#1e1d1d',
                '--btn-color': casingColorBorderHex[currentColor]
              }}
              className="
                inline-block
                font-bricolage font-black uppercase tracking-widest
                text-[11px] sm:text-sm
                px-5 py-2 sm:px-9 sm:py-3.5
                rounded-[10px] sm:rounded-[12px]
                border-[1.5px] sm:border-[2px] border-[var(--btn-color)]
                shadow-[0_4px_0_0_var(--btn-color)] sm:shadow-[0_6px_0_0_var(--btn-color)]
                hover:translate-y-[1.5px] sm:hover:translate-y-[2px] hover:shadow-[0_2.5px_0_0_var(--btn-color)] sm:hover:shadow-[0_4px_0_0_var(--btn-color)]
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
