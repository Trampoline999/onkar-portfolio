import ProfileCard from "../customComp/ProjectCard";
import hospital from "../assets/images/hp.jpg";
import guy from "../assets/images/guy.webm";
import { GitHubCalendar } from 'react-github-calendar';
import { useRef, useEffect } from "react";

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
      <h1 className="font-instrument-spaced tracking-wide font-bold text-black dark:text-white text-5xl sm:text-6xl lg:text-7xl underline decoration-wavy underline-offset-20 decoration-gray-900 dark:decoration-gray-200 text-center mt-10 mb-20 sm:mb-24 lg:mb-30">
        Projects
      </h1>
      
      <div className="flex flex-col gap-12 lg:gap-20 max-w-full px-0 lg:px-4 xl:px-12 mx-auto w-full items-start">
         <ProfileCard
          videoSrc={guy}
          name="Codewar"
          description={
            <>
              <strong>Codewar</strong> is a <strong>full-stack coding platform</strong> built with the MERN stack that allows users to write and execute code in real-time using the <strong>Judge0 API</strong>. It features authentication, problem categorization, difficulty filters, and playlist management backed by PostgreSQL and Prisma ORM. Global state is handled efficiently with <strong>Zustand</strong>, ensuring smooth user experience across all components. The UI is built with TailwindCSS and DaisyUI for a clean, responsive, and intuitive interface.
            </>
          }
          techstack="PostgreSQL, JavaScript, REST APIs, Zustand, TailwindCSS, Express, React, Node.js, Prisma ORM, Judge0 API"
          githubLink="https://github.com/Trampoline999/codewar"
        />
        <ProfileCard
          reverse={true}
          imageSrc={hospital}
          name="Hospital Management"
          description={
            <>
              A <strong>centralized healthcare platform</strong> that connects patients, doctors, and hospitals under one unified system. It supports <strong>patient registration</strong>, <strong>appointment scheduling</strong>, and <strong>Electronic Health Record (EHR) management</strong> for streamlined clinical workflows. Admin panels provide hospital management capabilities along with statistical dashboards for data-driven decisions. Future modules are planned for blood bank tracking and real-time bed availability monitoring.
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
        <div ref={scrollRef} className="w-full flex justify-center p-6 sm:p-10 bg-gray-100  border-1 border-[#f0f0f0] dark:border-zinc-600 dark:bg-zinc-800 rounded-2xl shadow-sm overflow-x-auto">
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
