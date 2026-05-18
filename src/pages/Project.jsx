import ProfileCard from "../customComp/ProjectCard";
import hospital from "../assets/images/hp.jpg";
import guy from "../assets/images/guy.webm";
import { GitHubCalendar } from 'react-github-calendar';
import { useRef, useEffect } from "react";

import projectSticker from "../assets/images/project.svg";

const Project = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;
    
    const observer = new ResizeObserver(() => {
      if (scrollRef.current) {
        // Scroll to the far right to show latest contributions
        scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
      }
    });
    
    if (scrollRef.current.firstElementChild) {
      observer.observe(scrollRef.current.firstElementChild);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="projects" className="flex w-full flex-col justify-center my-20 px-4 sm:px-6 md:px-8 lg:px-8">
      <h1 className="font-instrument-spaced tracking-wide font-bold text-black dark:text-white text-5xl sm:text-6xl lg:text-7xl text-center mt-10 mb-20 sm:mb-24 lg:mb-30">
        <span className="relative inline-flex items-center justify-center gap-3 sm:gap-5">
          <span className="underline decoration-wavy underline-offset-20 decoration-gray-900 dark:decoration-gray-200">
            Projects
          </span>
          <img 
            src={projectSticker} 
            alt="project sticker" 
            className="w-9 h-9 sm:w-11 sm:h-11 md:w-13 md:h-13 lg:w-14 lg:h-14 bg-white border-[2.5px] border-white rounded-lg shadow-[0_4px_10px_rgba(0,0,0,0.15)] object-contain pointer-events-none select-none transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:scale-120 hover:rotate-[25deg] rotate-[15deg] shrink-0"
          />
        </span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto w-full items-start">
         <ProfileCard
          videoSrc={guy}
          name="Codewar"
          description={
            <>
              <strong>Codewar</strong> is a <strong>full-stack coding platform</strong> built with the MERN stack that allows users to write and execute code in <strong>real-time</strong> using the <strong>Judge0 API</strong>. It features authentication, problem categorization, difficulty filters, and playlist management backed by <strong>PostgreSQL</strong> and <strong>Prisma ORM</strong>. <strong>Global state</strong> is handled efficiently with <strong>Zustand</strong>, ensuring smooth user experience across all components. The UI is built with <strong>TailwindCSS</strong> and <strong>DaisyUI</strong> for a clean, responsive, and intuitive interface.
            </>
          }
          techstack="PostgreSQL, JavaScript, REST APIs, Zustand, TailwindCSS, Express, React, Node.js, Prisma ORM, Judge0 API"
          githubLink="https://github.com/Trampoline999/codewar"
        />
        <ProfileCard
          imageSrc={hospital}
          name="Hospital Management"
          description={
            <>
              A <strong>centralized healthcare platform</strong> that connects patients, doctors, and hospitals under one unified system. It supports <strong>patient registration</strong>, <strong>appointment scheduling</strong>, and <strong>Electronic Health Record (EHR) management</strong> for streamlined clinical workflows. <strong>Admin panels</strong> provide hospital management capabilities along with <strong>statistical dashboards</strong> for <strong>data-driven decisions</strong>. Future modules are planned for blood bank tracking and real-time bed availability monitoring.
            </>
          }
          techstack="Python, Django, PostgreSQL, JavaScript, REST APIs, Bootstrap, HTML Templates"
          githubLink="https://github.com/Trampoline999/hospital_management_system"
        />      
      </div>

      <div className="flex flex-col items-center justify-center mt-24 sm:mt-32 w-full max-w-7xl mx-auto">
        <h2 className="font-bricolage font-semibold text-black  dark:text-white text-3xl sm:text-4xl lg:text-5xl mb-12 sm:mb-16">
          GitHub Contributions
        </h2>
        <div ref={scrollRef} className="w-full flex justify-center p-6 sm:p-10 bg-[#fafafa]  border-1 border-[#f0f0f0] dark:border-zinc-600 dark:bg-zinc-800 rounded-[28px] shadow-sm overflow-x-auto">
          <div className="min-w-fit">
            <GitHubCalendar 
              username="Trampoline999" 
              blockSize={14}
              blockMargin={6}
              fontSize={14}
              colorScheme="light"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
