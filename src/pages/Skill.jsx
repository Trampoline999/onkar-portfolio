import Carousel from "../customComp/Carousel";
import RotatingText from "../../components/ui/RotatingText";
import designSticker from "../assets/images/design.svg";

const Skill = () => {
  const words = ["Animation", "Renders", "Designs"];
  return (
    <section id="design" className="flex flex-col items-center justify-center w-full py-4 px-4 sm:px-6 md:px-10 lg:px-12">
      <div className="w-full max-w-7xl mx-auto py-16">
        <div className="text-center mb-6 md:mb-8">
          <h1 className="font-instrument-spaced flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide leading-tight md:flex-nowrap md:justify-center">
            <span className="whitespace-nowrap text-black dark:text-gray-100">
              3D Blender
            </span>
            <RotatingText
              texts={words}
              mainClassName="inline-flex flex-nowrap whitespace-nowrap px-4 sm:px-4 md:px-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-black overflow-hidden py-0.5 sm:py-1 md:py-1 rounded-xl"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="inline-flex flex-nowrap overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              rotationInterval={3000}
              splitBy="characters"
              auto
              loop
            />
            <img 
              src={designSticker} 
              alt="design sticker" 
              className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 lg:w-14 lg:h-14 bg-white border-[2.5px] border-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] object-contain pointer-events-none select-none transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-120 hover:rotate-[25deg] rotate-[15deg] shrink-0 ml-1"
            />
          </h1>
          <p className="font-bricolage text-neutral-700 dark:text-neutral-300 text-base md:text-xl mt-8 mb-4 max-w-2xl mx-auto">
            Exploring the intersection of technology and creativity through
            innovative solutions.
          </p>
        </div>
        <Carousel />
      </div>
    </section>
  );
};

export default Skill;
