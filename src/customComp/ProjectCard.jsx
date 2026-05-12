import { useState } from "react";

const ProfileCard = ({
  imageSrc,
  videoSrc,
  name = "Project Name",
  description = "A creative designer passionate about blending nature with modern architecture to craft spaces that breathe.",
  techstack = "React, Tailwind CSS, JavaScript",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full bg-[#f0f0f0] rounded-[28px] p-2.5 flex flex-col gap-3 shadow-sm">
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
        <div 
          className="flex flex-col gap-2 cursor-pointer group"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <h2 className="font-bricolage text-[17px] sm:text-[19px] font-bold text-gray-900 leading-tight transition-colors group-hover:text-black">
            {name}
          </h2>
          <p className={`text-[12px] sm:text-[13px] text-gray-500 leading-relaxed transition-all duration-300 ${isExpanded ? "" : "line-clamp-3"}`}>
            {description}
          </p>
          {techstack ? (
            <div className={`flex flex-wrap gap-1.5 sm:gap-2 mt-1 transition-all duration-300 ${isExpanded ? "" : "max-h-[20px] sm:max-h-[28px] overflow-hidden"}`}>
              {techstack.split(",").map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-gray-200/80 border border-gray-300/50 text-gray-600 px-2 py-0.5 sm:px-3 sm:py-1 text-[9px] sm:text-[11px] font-medium tracking-wide whitespace-nowrap"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          ) : null}

        </div>

        {/* GitHub Pill Button */}
        <a
          href="#"
          className="inline-flex tracking-wide items-center justify-center gap-2 bg-gray-900 text-white px-4 py-1.5 text-[11px] sm:px-6 sm:py-2 sm:text-[13px] rounded-full font-medium hover:bg-gray-800 transition-colors w-fit mt-auto"
        >
          <span>Github</span>
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
