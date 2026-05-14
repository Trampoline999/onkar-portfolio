import { BentoGrid, BentoCard } from "../customComp/BentoGrid";
import reactIcon from "../assets/icons/React Icon 48.png";
import tailwindIcon from "../assets/icons/Tailwind CSS Icon 48.png";
import viteIcon from "../assets/icons/Vite Icon 48.png";
import expressIcon from "../assets/icons/ExpressJS Icons.png";
import nodeIcon from "../assets/icons/Node.js Icon 48.png";
import jsIcon from "../assets/icons/JavaScript Icon.png";
import tsIcon from "../assets/icons/Typescript Icon 48.png";
import htmlIcon from "../assets/icons/HTML Icons.png";
import cssIcon from "../assets/icons/CSS3 Icon.png";
import langIcon from "../assets/icons/Programming Language Icon.png";
import dockerIcon from "../assets/icons/Docker Icon 48.png";
import figmaIcon from "../assets/icons/Figma Icon 48.png";
import githubIcon from "../assets/icons/Github Icons 48.png";
import gitIcon from "../assets/icons/React Git Icon 48.png";
import postmanIcon from "../assets/icons/Postman Icons 48.png";
import linuxIcon from "../assets/icons/Linux Icons 48.png";
import sshIcon from "../assets/icons/SSH Icons.png";
import npmIcon from "../assets/icons/npm Icons 48.png";
import mysqlIcon from "../assets/icons/MySQL Logo Icon 96.png";
import postgresqlIcon from "../assets/icons/PostgreSQL Icon 48.png";
import sqlIcon from "../assets/icons/SQL Icon 48.png";
import jsonIcon from "../assets/icons/JSON Icon Set.png";
import jsonwebtokenIcon from "../assets/icons/JSON Web Token 48.png";
import mongodbIcon from "../assets/icons/MongoDB Icons.png";

const IconStrip = ({ icons }) => {
  return (
    <div
      className="mt-3 flex max-w-full flex-row flex-wrap gap-1 sm:gap-2 overflow-x-auto pb-1"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`div::-webkit-scrollbar { display: none; }`}</style>

      {icons.map(({ src, alt }) => (
        <div
          key={alt}
          className="h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 shrink-0 overflow-hidden"
        >
          <img src={src} alt={alt} className="h-full w-full object-contain p-1.5" />
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
          <h2 className="text-black dark:text-gray-100 mb-16 text-center font-instrument text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl lg:text-7xl underline decoration-wavy underline-offset-8 decoration-gray-900 dark:decoration-gray-200">
            Technical Skills
          </h2>

          <BentoGrid>
            <BentoCard
              className="md:col-span-4 bg-pink-200 dark:bg-pink-300"             
              title="Frameworks & Libraries"            
              description="React, Express, Tailwind, and Vite — building robust, scalable, and responsive applications."
              footer={<IconStrip icons={[
                { src: reactIcon, alt: "React" },
                { src: tailwindIcon, alt: "Tailwind CSS" },
                { src: viteIcon, alt: "Vite" },
                { src: expressIcon, alt: "Express JS" },
                { src: nodeIcon, alt: "Node.js" }
              ]} />}
            />

            <BentoCard
              className="md:col-span-2 bg-indigo-200 dark:bg-indigo-300"              
              title="Programming Languages"          
              description="JavaScript, TypeScript, HTML, and CSS for structuring and scripting dynamic web experiences."
              footer={<IconStrip icons={[
                { src: jsIcon, alt: "JavaScript" },
                { src: tsIcon, alt: "TypeScript" },
                { src: langIcon, alt: "Programming Languages" },
                { src: sqlIcon, alt: "SQL" },
               
                { src: htmlIcon, alt: "HTML" },
                { src: cssIcon, alt: "CSS" },                
              ]} />}
            />

            <BentoCard
              className="md:col-span-3 bg-orange-200 dark:bg-orange-300"
              title="Tools & Platforms"
              description="Docker, Git, GitHub, Figma, and Linux — modern tooling for streamlined development and collaboration."
              footer={<IconStrip icons={[
                { src: figmaIcon, alt: "Figma" },
                { src: githubIcon, alt: "GitHub" },
                { src: gitIcon, alt: "Git" },
                { src: dockerIcon, alt: "Docker" },
                { src: postmanIcon, alt: "Postman" },
                { src: linuxIcon, alt: "Linux" },
                { src: sshIcon, alt: "SSH" },
                {src:npmIcon, alt: "NPM"},
                {src:jsonwebtokenIcon, alt: "JSON Web Token"},
                { src: jsonIcon, alt: "JSON" }
              ]} />}
            />

            <BentoCard
              className="md:col-span-3 bg-emerald-200 dark:bg-emerald-300"
              title="Database & ORM"
              description="MySQL, PostgreSQL, and SQL — managing data with efficient and reliable database systems."
              footer={<IconStrip icons={[
                
                { src: postgresqlIcon, alt: "PostgreSQL" },
                { src: mysqlIcon, alt: "MySQL" },
                {src:mongodbIcon, alt: "MongoDB"}
                
                
              ]} />}
            />
          </BentoGrid>

          <div id="skills" className="sr-only" />
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;