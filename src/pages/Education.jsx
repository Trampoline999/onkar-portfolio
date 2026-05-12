import Card from "../customComp/Card";
import college from "../assets/images/dypani.mp4";

const Education = () => {
  return (
    <div id="education" className="flex flex-col items-center lg:mt-20">
      <h1 className="text-black dark:text-white text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-wide font-instrument underline decoration-wavy underline-offset-8 decoration-gray-900 dark:decoration-gray-200 py-6 sm:py-10 md:py-14 mb-6 sm:mb-10 md:mb-16">
        Education
      </h1>

      {/* Big Card */}
      <div className="w-full px-4 sm:px-6 md:px-10">
        <div
          className="
            bg-[#fdf5f5]
            rounded-4xl
            shadow-[0_20px_40px_15px_rgba(0,0,0,0.1)]
            w-full mx-auto max-w-7xl
            min-h-[320px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[600px] h-auto
            flex flex-col lg:flex-row
            mb-8 sm:mb-16 md:mb-24
            items-center
            justify-around
            gap-4 
            p-3
            md:p-12 lg:p-14"
        >
          <Card video={college} />

          {/* Text */}
          <div className="flex flex-col text-left gap-2 max-w-2xl sm:items-center md:items-center md:text-center lg:pl-4 lg:items-start lg:text-left">
            <h1 className="text-grey-900 text-lg sm:text-xl md:text-2xl lg:text-4xl font-semibold font-bricolage dark:text-black">
              D.Y Patil College of <br />
              Engineering and Technology
            </h1>
            <p className="font-bricolage text-xs sm:text-sm md:text-l lg:text-lg leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
              consequatur necessitatibus excepturi quis distinctio error autem
              mollitia sequi fugiat debitis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
