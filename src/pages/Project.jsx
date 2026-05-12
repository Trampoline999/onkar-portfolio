import ProfileCard from "../customComp/ProjectCard";
import hospital from "../assets/images/hp~2.png";
import rocks from "../assets/images/rocks2.png";

const Project = () => {
  return (
    <div className="flex w-full flex-col justify-center my-20 px-4 sm:px-6 md:px-8 lg:px-8">
      <h1 className="font-instrument-spaced tracking-wide font-bold text-white text-5xl sm:text-6xl lg:text-7xl text-center mb-20 sm:mb-24 lg:mb-30">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto justify-items-center w-full">
        <ProfileCard
          imageSrc={hospital}
          name="Hospital Management"
          description="A creative designer passionate about blending nature with modern architecture to craft spaces that breathe.A creative designer passionate about blending nature with modern architecture to craft spaces that breathe."
          techstack="React, Tailwind CSS, Firebase"
        />

        <ProfileCard
          imageSrc={rocks}
          name="Codewar"
          description="A creative designer passionate about blending nature with modern architecture to craft spaces that breathe.A creative designer passionate about blending nature with modern architecture to craft spaces that breathe."
          techstack="React, Vite, JavaScript"
        />
      </div>
    </div>
  );
};

export default Project;
