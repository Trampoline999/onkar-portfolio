import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";

const getTechStyle = (tech) => {
  const name = tech.trim().toLowerCase();
  switch(name) {
    case "react":
      return {
        bg: "bg-[#e3f8ff] dark:bg-[#0e3040]",
        text: "text-[#007399] dark:text-[#33ccff]",
        border: "border-[#b3e6ff]/80 dark:border-[#005c80] border-b-[3px] border-b-[#007399]/30 dark:border-b-[#33ccff]/40"
      };
    case "javascript":
      return {
        bg: "bg-[#fffbeb] dark:bg-[#342410]",
        text: "text-[#854d0e] dark:text-[#fef08a]",
        border: "border-[#fef08a]/80 dark:border-[#713f12] border-b-[3px] border-b-[#854d0e]/30 dark:border-b-[#fef08a]/40"
      };
    case "postgresql":
      return {
        bg: "bg-[#eef2ff] dark:bg-[#1e2238]",
        text: "text-[#3730a3] dark:text-[#c7d2fe]",
        border: "border-[#c7d2fe]/80 dark:border-[#312e81] border-b-[3px] border-b-[#3730a3]/30 dark:border-b-[#c7d2fe]/40"
      };
    case "tailwindcss":
      return {
        bg: "bg-[#e6fffa] dark:bg-[#112d30]",
        text: "text-[#0f766e] dark:text-[#2dd4bf]",
        border: "border-[#99f6e4]/80 dark:border-[#115e59] border-b-[3px] border-b-[#0f766e]/30 dark:border-b-[#2dd4bf]/40"
      };
    case "node.js":
    case "nodejs":
      return {
        bg: "bg-[#f0fdf4] dark:bg-[#14281b]",
        text: "text-[#166534] dark:text-[#86efac]",
        border: "border-[#bbf7d0]/80 dark:border-[#165b33] border-b-[3px] border-b-[#166534]/30 dark:border-b-[#86efac]/40"
      };
    case "express":
      return {
        bg: "bg-[#f4f4f5] dark:bg-[#202023]",
        text: "text-[#18181b] dark:text-[#e4e4e7]",
        border: "border-[#d4d4d8]/80 dark:border-[#3f3f46] border-b-[3px] border-b-[#18181b]/30 dark:border-b-[#e4e4e7]/40"
      };
    case "prisma orm":
    case "prisma":
      return {
        bg: "bg-[#f5f3ff] dark:bg-[#221c38]",
        text: "text-[#5b21b6] dark:text-[#ddd6fe]",
        border: "border-[#ddd6fe]/80 dark:border-[#4c1d95] border-b-[3px] border-b-[#5b21b6]/30 dark:border-b-[#ddd6fe]/40"
      };
    case "python":
      return {
        bg: "bg-[#eff6ff] dark:bg-[#16233a]",
        text: "text-[#1e40af] dark:text-[#bfdbfe]",
        border: "border-[#bfdbfe]/80 dark:border-[#1d4ed8] border-b-[3px] border-b-[#1e40af]/30 dark:border-b-[#bfdbfe]/40"
      };
    case "django":
      return {
        bg: "bg-[#eff8f6] dark:bg-[#0c2a22]",
        text: "text-[#0b5c46] dark:text-[#52d0af]",
        border: "border-[#a7f3d0]/80 dark:border-[#064e3b] border-b-[3px] border-b-[#0b5c46]/30 dark:border-b-[#52d0af]/40"
      };
    case "bootstrap":
      return {
        bg: "bg-[#faf5ff] dark:bg-[#231a34]",
        text: "text-[#6b21a8] dark:text-[#e9d5ff]",
        border: "border-[#e9d5ff]/80 dark:border-[#581c87] border-b-[3px] border-b-[#6b21a8]/30 dark:border-b-[#e9d5ff]/40"
      };
    case "zustand":
      return {
        bg: "bg-[#fff7ed] dark:bg-[#341d10]",
        text: "text-[#c2410c] dark:text-[#fed7aa]",
        border: "border-[#fed7aa]/80 dark:border-[#7c2d12] border-b-[3px] border-b-[#c2410c]/30 dark:border-b-[#fed7aa]/40"
      };
    case "rest apis":
    case "rest api":
      return {
        bg: "bg-[#fff1f2] dark:bg-[#35141c]",
        text: "text-[#be123c] dark:text-[#fecdd3]",
        border: "border-[#fecdd3]/80 dark:border-[#881337] border-b-[3px] border-b-[#be123c]/30 dark:border-b-[#fecdd3]/40"
      };
    case "judge0 api":
    case "judge0":
      return {
        bg: "bg-[#fdf2f8] dark:bg-[#38142a]",
        text: "text-[#be185d] dark:text-[#fbcfe8]",
        border: "border-[#fbcfe8]/80 dark:border-[#831843] border-b-[3px] border-b-[#be185d]/30 dark:border-b-[#fbcfe8]/40"
      };
    default:
      return {
        bg: "bg-[#f4f4f5] dark:bg-[#27272a]",
        text: "text-[#71717a] dark:text-[#a1a1aa]",
        border: "border-[#e4e4e7]/80 dark:border-[#3f3f46] border-b-[3px] border-b-[#71717a]/30 dark:border-b-[#a1a1aa]/40"
      };
  }
};

const ProfileCard = ({
  imageSrc,
  videoSrc,
  name,
  description,
  techstack,
  githubLink,
  reverse = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTechExpanded, setIsTechExpanded] = useState(false);
  return (
    <div 
      className={`group flex flex-col-reverse ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full gap-6 lg:gap-16 bg-white dark:bg-[#1f1f22] rounded-[24px] p-4 sm:p-5 lg:p-8 border border-gray-100 dark:border-zinc-800/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden relative`}
    >

        {/* Text Section */}
        <div className="flex flex-col flex-1 mt-2">
          <div className="flex items-center mb-2 sm:mb-2 md:mb-2 lg:mb-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bricolage font-bold text-gray-900 dark:text-white">
              {name}
            </h2>
          </div>
          <div className="relative mb-5">
            <div className={`text-[14px] sm:text-[16px] font-bricolage antialiased text-gray-600 dark:text-gray-400 [&_strong]:text-gray-900 lg:leading-relaxed dark:[&_strong]:text-white [&_strong]:font-bold ${isExpanded ? "" : "line-clamp-4 lg:line-clamp-none"}`}>
              {description}
            </div>
            
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="lg:hidden text-xs font-semibold text-gray-900 dark:text-white mt-2 flex items-center gap-1 hover:underline"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-semibold rounded-2xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors w-fit mb-6"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" /></svg>
            GitHub
          </a>
          
          {techstack && (
            <div 
              onClick={() => setIsTechExpanded(!isTechExpanded)}
              className={`flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-100 dark:border-zinc-800 transition-all duration-500 ease-in-out cursor-pointer select-none overflow-hidden ${
                isTechExpanded ? "max-h-[300px]" : "max-h-[48px] hover:max-h-[300px]"
              }`}
            >
              {techstack.split(",").map((tech, i) => {
                const style = getTechStyle(tech);
                return (
                  <span 
                    key={i} 
                    className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md border ${style.bg} ${style.text} ${style.border}`}
                  >
                    {tech.trim()}
                  </span>
                );
              })}
            </div>
          )}
        </div>

        {/* Media Section */}
        <div className="w-full lg:w-[45%] shrink-0 rounded-xl overflow-hidden bg-gray-50 dark:bg-zinc-900 flex items-center justify-center border border-gray-100 dark:border-zinc-800 aspect-square">
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
        </div>
      </div>
  );
};

export default ProfileCard;
