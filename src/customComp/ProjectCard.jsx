import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const GitHubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current"
    aria-hidden="true"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ProfileCard = ({
  imageSrc,
  videoSrc,
  name = "Project Name",
  description = "A creative designer passionate about blending nature with modern architecture to craft spaces that breathe.",
  techstack = "React, Tailwind CSS, JavaScript",
  githubLink = "#",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const descRef = useRef(null);
  const descMeasureRef = useRef(null);
  const techRef = useRef(null);
  const [descHeight, setDescHeight] = useState(0);
  const [techHeight, setTechHeight] = useState(0);

  useEffect(() => {
    if (!descMeasureRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setDescHeight(entry.target.scrollHeight);
      }
    });
    observer.observe(descMeasureRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!techRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setTechHeight(entry.target.scrollHeight);
      }
    });
    observer.observe(techRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="group w-full bg-zinc-100 border-1 border-[#f0f0f0] dark:bg-zinc-800 dark:border-zinc-600 rounded-[28px] p-2.5 flex flex-col gap-3 shadow-sm transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-2 hover:shadow-xl cursor-pointer">
      {/* Image / Video */}
      <div
        className="relative w-full rounded-[20px] overflow-hidden shrink-0"
        style={{ aspectRatio: "1/1" }}
      >
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        )}

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/40 to-transparent" />
      </div>

      {/* Info Row */}
      <div className="flex flex-col gap-3 px-2 pb-2 flex-1 justify-between">
        <div className="flex flex-col gap-2">

          {/* Name + Chevron toggle row */}
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center justify-between cursor-pointer select-none group/title"
          >
            <h2 className="font-bricolage text-[17px] sm:text-[19px] font-bold text-gray-900 dark:text-gray-100 leading-tight transition-colors duration-300 group-hover/title:text-black dark:group-hover/title:text-white">
              {name}
            </h2>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              aria-label={isExpanded ? "Collapse description" : "Expand description"}
              className="flex-shrink-0 ml-2 flex items-center justify-center h-7 w-7 rounded-full bg-gray-200 dark:bg-zinc-700 hover:bg-gray-300 dark:hover:bg-zinc-600 transition-all duration-300 hover:scale-110 active:scale-95 shadow-sm hover:shadow-md"
            >
              <ChevronDown
                className={`h-4 w-4 text-gray-600 dark:text-gray-300 transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                  isExpanded ? "rotate-180" : "rotate-0"
                }`}
                strokeWidth={2.5}
              />
            </button>
          </div>

          {/* Description */}
          <div className="relative">
            {/* Invisible clone to measure the exact full scrollHeight */}
            <p
              ref={descMeasureRef}
              className="absolute top-0 left-0 right-0 invisible pointer-events-none text-[12px] sm:text-[13px] leading-relaxed"
              aria-hidden="true"
            >
              {description}
            </p>

            <div
              style={{
                maxHeight: isExpanded ? `${descHeight}px` : undefined,
              }}
              className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                isExpanded ? "" : "max-h-[3.65rem] sm:max-h-[3.96rem]"
              }`}
            >
              <p
                ref={descRef}
                className={`text-[12px] sm:text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed ${
                  isExpanded ? "" : "line-clamp-3"
                }`}
              >
                {description}
              </p>
            </div>
            {/* Fade overlay when collapsed and text is long */}
            {descHeight > 65 && (
              <div
                className={`absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-zinc-100 dark:from-zinc-800 to-transparent pointer-events-none transition-opacity duration-500 ease-in-out ${
                  isExpanded ? "opacity-0" : "opacity-100"
                }`}
              />
            )}
          </div>

          {/* Tech stack tags */}
          {techstack ? (
            <div className="relative mt-1">
              <div
                style={{
                  maxHeight: isExpanded ? `${techHeight}px` : undefined,
                }}
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  isExpanded ? "" : "max-h-[20px] sm:max-h-[28px]"
                }`}
              >
                <div
                  ref={techRef}
                  className="flex flex-wrap gap-1.5 sm:gap-2"
                >
                  {techstack.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-full bg-gray-200/80 dark:bg-zinc-700 border border-gray-300/50 dark:border-zinc-600 text-gray-600 dark:text-gray-300 px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] font-medium tracking-wide whitespace-nowrap"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* GitHub Animated Button */}
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-auto w-fit overflow-hidden inline-flex items-center gap-2 bg-gray-900 dark:bg-gray-950 text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-[11px] sm:text-[13px] font-medium tracking-wide transition-all duration-300 hover:bg-gray-700 dark:hover:bg-gray-800 hover:shadow-lg hover:shadow-gray-900/30 hover:-translate-y-0.5 group"
        >
          {/* Shine sweep on hover */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out pointer-events-none" />
          <GitHubIcon />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
