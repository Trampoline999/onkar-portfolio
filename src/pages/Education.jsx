import { useState, useEffect } from "react";
import Card from "../customComp/Card";
import college from "../assets/images/dypani.webm";

import { TextReveal } from "../../components/ui/text-reveal";

/** Watches the `dark` class on <html> and re-renders on change */
function useDarkMode() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

const Education = () => {
  const isDark = useDarkMode();

  // Light: soft pastels — Dark: deep saturated tones
  const c = {
    blue:   isDark ? "#1d4ed8" : "#95c8f3",  // blue-700   vs pastel-blue
    orange: isDark ? "#c2410c" : "#ff9a00",  // orange-700 vs amber
    green:  isDark ? "#15803d" : "#b9f5a0",  // green-700  vs pastel-green
  };

  return (
    <div id="education" className="flex flex-col items-center mt-25 md:mt-30 lg:mt-16 w-full">
      <h1 className="text-black dark:text-white text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-wide font-instrument underline decoration-wavy underline-offset-8 decoration-gray-900 dark:decoration-gray-200 py-6 sm:py-10 md:py-14 mb-6 sm:mb-10 md:mb-16">
        Education
      </h1>

      {/* Big Card */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-12">
        <div
          className="
            bg-gray-50 dark:bg-zinc-800
            border border-zinc-200/60 dark:border-zinc-800/80
            rounded-[32px] sm:rounded-[32px]
            shadow-[0_15px_45px_-15px_rgba(0,0,0,0.06)] dark:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.5)]
            w-full mx-auto max-w-[1440px]
            flex flex-col lg:flex-row
            items-center
            gap-8 sm:gap-12 lg:gap-32
            p-4 sm:p-4 md:p-6 lg:p-10
            mb-8 sm:mb-16 md:mb-24
            transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]
            hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]
"
        >
          <Card video={college} className="w-full max-w-[360px] md:max-w-full aspect-video md:aspect-[21/9] lg:max-w-[360px] lg:h-[560px] lg:aspect-auto rounded-[20px]" />

          {/* Text */}
          <div className="flex flex-col text-left md:text-center lg:text-left items-start md:items-center lg:items-start max-w-2xl flex-1">
            
            <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl md:text-4xl font-extrabold font-bricolage leading-tight">
              D.Y Patil College of <br className="hidden sm:inline" />
              Engineering and Technology
            </h2>

            <div className="w-full">
              <TextReveal>
                {[
                  { text: "A", className: "" },
                  { text: "four-year", className: "" },
                  { text: "Computer Science & Engineering", className: "inline-flex px-1 py-[0.5px] rounded-md bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-300 tracking-tight" },
                  { text: "journey", className: "" },
                  { text: "at", className: "" },
                  { text: "D.Y.", className: "" },
                  { text: "Patil", className: "" },
                  { text: "College", className: "" },
                  { text: "of", className: "" },
                  { text: "Engineering", className: "" },
                  { text: "&", className: "" },
                  { text: "Technology,", className: "" },
                  { text: "Kolhapur,", className: "" },
                  { text: "completed", className: "" },
                  { text: "between", className: "" },
                  { text: "2019-2024", className: "inline-flex px-1 py-[0.5px] rounded-md bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300 tracking-tight" },
                  { text: "graduating", className: "" },
                  { text: "with", className: "" },
                  { text: "a", className: "" },
                  { text: "CGPA of 7.76", className: "inline-flex px-1 py-[0.5px] rounded-md bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-300 tracking-tight" },
                  { text: "and", className: "" },
                  { text: "a", className: "" },
                  { text: "passion", className: "" },
                  { text: "for", className: "" },
                  { text: "building", className: "" },
                  { text: "real-world", className: "" },
                  { text: "applications.", className: "" },
                ]}
              </TextReveal>
            </div>

            <a
              href="https://coek.dypgroup.edu.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                w-[85px] text-center
                bg-[#b3e3f9] text-[#155274]
                font-monolisa font-black uppercase
                text-[10px] sm:text-xs
                py-1.5 sm:py-2
                rounded-lg
                border-[1px] sm:border-[1.5px] border-[#1a4469]
                shadow-[0_2.5px_0_0_#1a4469] sm:shadow-[0_4px_0_0_#1a4469]
                hover:translate-y-[1px] sm:hover:translate-y-[1.5px] hover:shadow-[0_1.5px_0_0_#1a4469] sm:hover:shadow-[0_2.5px_0_0_#1a4469]
                active:translate-y-[2.5px] sm:active:translate-y-[4px] active:shadow-none
                transition-all duration-100 ease-out
                select-none
                mt-2.5 sm:mt-3
              "
            >
              College
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
