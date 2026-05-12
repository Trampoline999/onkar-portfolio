import { BentoCard, BentoGrid } from "../customComp/BentoGrid";
import reactIcon from "../assets/icons/icons8-react-100.png";
import tailwindIcon from "../assets/icons/icons8-tailwind-css-100.png";
import jsIcon from "../assets/icons/icons8-javascript-100.png";
import cssIcon from "../assets/icons/icons8-css-100.png";
import dockerIcon from "../assets/icons/icons8-docker-100.png";
import vscodeIcon from "../assets/icons/icons8-visual-studio-code-100.png";
import npm from "../assets/icons/icons8-npm-100.png";
import java from "../assets/icons/icons8-java-100.png";


const IconStrip = ({ icons }) => {
  return (
    <div
      className="mt-5 flex max-w-full flex-row flex-wrap gap-3 overflow-x-auto pb-1"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>

      {icons.map(({ src, alt }) => (
        <div
          key={alt}
          className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border-4 border-white bg-white/30 backdrop-blur-sm"
        >
          <img src={src} alt={alt} className="h-full w-full object-contain p-2" />
        </div>
      ))}
    </div>
  );
};

const TechnicalSkills = () => {
  return (
    <section id="skills" className="flex w-full flex-col items-center my-20 lg:my-30">
      <div className="w-full px-4 sm:px-6 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-black dark:text-gray-100 mb-16 text-center font-instrument text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl lg:text-7xl">
            Technical Skills
          </h2>

          <BentoGrid>
            <BentoCard
              className="md:col-span-4 bg-pink-300 dark:bg-pink-100"             
              title="Frontend"            
              description="React, Tailwind, shadcn/ui — clean layouts, strong typography, and reusable components."
              footer={<IconStrip icons={[{ src: reactIcon, alt: "React" },, { src: cssIcon, alt: "CSS" }, { src: tailwindIcon, alt: "Tailwind CSS" }]} />}
            />

            <BentoCard
              className="md:col-span-2 bg-indigo-300 dark:bg-indigo-100"              
              title="Programming"          
              description="GSAP + Motion for delightful micro-interactions and scroll-based storytelling."
              footer={<IconStrip icons={[{ src: jsIcon, alt: "JavaScript" },{ src: java, alt: "java" }]} />}
            />

            <BentoCard
              className="md:col-span-3 bg-orange-300 dark:bg-orange-100"
              
              title="Frameworks"
             
              description="ShaderGradient, React Three Fiber, camera-controls — performant, interactive scenes."
              footer={<IconStrip icons={[{ src: reactIcon, alt: "React" }, { src: jsIcon, alt: "JavaScript" }]} />}
            />

            <BentoCard
              className="md:col-span-3 bg-emerald-300 dark:bg-emerald-100"
          
              title="Backend"
              description="Vite + ESLint, component-driven workflows, and consistent UI primitives."
              footer={<IconStrip icons={[{ src: npm, alt: "npm" },{ src: dockerIcon, alt: "Docker" }, { src: vscodeIcon, alt: "VS Code" }]} />}
            />
          </BentoGrid>

          <div id="skills" className="sr-only" />
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;