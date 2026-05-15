import { useState, useEffect } from "react";
import Card from "../customComp/Card";
import college from "../assets/images/dypani.webm";
import { Highlighter } from "../../components/ui/highlighter";

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
    <div id="education" className="flex flex-col items-center md:mt-30 lg:mt-16">
      <h1 className="text-black dark:text-white text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-wide font-instrument underline decoration-wavy underline-offset-8 decoration-gray-900 dark:decoration-gray-200 py-6 sm:py-10 md:py-14 mb-6 sm:mb-10 md:mb-16">
        Education
      </h1>

      {/* Big Card */}
      <div className="w-full px-4 sm:px-6 md:px-10">
        <div
          className="
            bg-[#e9ece9] dark:bg-zinc-800
            border-1
            rounded-[28px]
            border-gray-100
            shadow-[0_20px_40px_15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_15px_rgba(0,0,0,0.1)]
            dark:border-zinc-600
            w-full mx-auto max-w-7xl
            min-h-[320px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[600px] h-auto
            flex flex-col lg:flex-row
            mb-8 sm:mb-16 md:mb-24
            items-center
            justify-around
            gap-4 
            p-4
            md:p-12 lg:p-14"
        >
          <Card video={college} />

          {/* Text */}
          <div className="flex flex-col text-left gap-2 max-w-2xl sm:items-center md:items-center md:text-center  lg:items-start lg:text-left">
            <h1 className="text-gray-900 dark:text-gray-100 text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold font-bricolage">
              D.Y Patil College of <br />
              Engineering and Technology
            </h1>
            <p className="font-sans pb-2 text-xs sm:text-sm md:text-l lg:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              A four-year <Highlighter action="highlight" color={c.blue}>
                Computer Science &amp; Engineering
              </Highlighter>{" "}journey at D.Y. Patil College of Engineering &amp; Technology, Kolhapur, completed between{" "}
              <Highlighter action="underline" color={c.orange}>2019-2024</Highlighter>{" "}graduating with a{" "}
              <Highlighter action="highlight" color={c.green}>CGPA of 7.76</Highlighter> and a passion for building real-world applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
