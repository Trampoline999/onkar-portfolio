import React, { useState } from "react";
import img1 from "../assets/images/srled2.png";
import img2 from "../assets/images/ddfs.png";
import img3 from "../assets/images/ghc.png";
import img4 from "../assets/images/fined23.png";
import img5 from "../assets/images/fr33.png";
import vid1 from "../assets/images/box.mp4";
import vid2 from "../assets/images/learning.mp4";
import img6 from "../assets/images/bba.png"

const MEDIA = [img6,img1,img2, vid1, img3, img4, vid2, img5];

const HangingCard = ({ src, index, onHoverStart, onHoverEnd }) => {
  // Add slight alternating rotation to make them look naturally hanging
  const rotation = index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[3deg]";
  const isVideo = typeof src === "string" && src.match(/\.(mp4|webm|ogg|mov)/i);

  return (
    
    <div 
      className={`relative flex flex-col items-center group transition-transform duration-700 ease-in-out hover:scale-110 hover:z-50 shrink-0 mx-4 sm:mx-8 md:mx-12 origin-top ${rotation} hover:rotate-0`}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      onTouchStart={onHoverStart}
      onTouchEnd={onHoverEnd}
    >
      {/* The string/wire connecting piece */}
      <div className="w-[2px] h-6 bg-gray-400 dark:bg-gray-500" />
      
      {/* The green clip */}
      <div className="z-10 w-4 sm:w-5 h-6 sm:h-8 bg-[#10b981] rounded-sm shadow-md flex items-start justify-center pt-1.5 -mb-3 sm:-mb-4">
        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-white/60" />
      </div>

      {/* The Polaroid Card */}
      <div className="bg-white dark:bg-gray-100 p-2 sm:p-3 pb-6 sm:pb-8 rounded-xl shadow-xl border border-gray-100 dark:border-gray-200 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] aspect-[4/3] flex flex-col">
        <div className="w-full flex-1 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-200 relative">
          {isVideo ? (
            <video 
              src={src} 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <img 
              src={src} 
              alt="Showcase" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>
      </div>
    </div>
  );
};

const Showcase = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="showcase" className="relative w-full py-10 sm:py-32 overflow-hidden flex flex-col justify-center items-center">
      
      <h1 className="font-instrument-spaced tracking-wide font-bold text-black dark:text-white text-5xl sm:text-6xl lg:text-7xl underline decoration-wavy underline-offset-10 decoration-gray-900 dark:decoration-gray-200 text-center mb-16 sm:mb-24 lg:mb-32">
        Showcase
      </h1>

      {/* Main Container */}
      <div className="w-full max-w-[100vw] relative pt-10">
        
        {/* Horizontal Wire Line */}
        <div className="absolute top-[40px] left-0 w-full h-[2px] bg-gray-300 dark:bg-gray-600 z-0" />



        {/* Scrolling Track */}
        <div 
          className="animate-hanging-marquee mt-0"
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {/* First Set of Cards */}
          <div className="flex shrink-0 px-4 items-start">
            {MEDIA.map((src, idx) => (
              <HangingCard 
                key={`set1-${idx}`} 
                src={src} 
                index={idx} 
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
              />
            ))}
          </div>
          {/* Second Duplicate Set for Seamless Loop */}
          <div className="flex shrink-0 px-4 items-start">
            {MEDIA.map((src, idx) => (
              <HangingCard 
                key={`set2-${idx}`} 
                src={src} 
                index={idx} 
                onHoverStart={() => setIsPaused(true)}
                onHoverEnd={() => setIsPaused(false)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Showcase;