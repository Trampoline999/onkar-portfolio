import { Mail, FileText, ArrowUpRight } from "lucide-react";
import mailImg from "../assets/images/mail.webp";
import linkedinImg from "../assets/images/linkedIn.webp";
import githubImg from "../assets/images/github.webp";
import twitterImg from "../assets/images/twitter.webp";
import resumeImg from "../assets/images/resume.webp";

// FontAwesome Brands SVGs
const FALinkedIn = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 448 512" 
    className={className} 
    fill="currentColor"
  >
    <path d="M100.3 448l-92.9 0 0-299.1 92.9 0 0 299.1zM53.8 108.1C24.1 108.1 0 83.5 0 53.8 0 39.5 5.7 25.9 15.8 15.8s23.8-15.8 38-15.8 27.9 5.7 38 15.8 15.8 23.8 15.8 38c0 29.7-24.1 54.3-53.8 54.3zM447.9 448l-92.7 0 0-145.6c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7l0 148.1-92.8 0 0-299.1 89.1 0 0 40.8 1.3 0c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3l0 164.3-.1 0z"/>
  </svg>
);

const FAGitHub = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 496 512" 
    className={className} 
    fill="currentColor"
  >
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.5 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
  </svg>
);

const FATwitter = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512" 
    className={className} 
    fill="currentColor"
  >
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
  </svg>
);

const contactItems = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "onkarchougule99@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=onkarchougule99@gmail.com",
    colSpan: "col-span-2 md:col-span-3",
    bg: "bg-violet-200 dark:bg-violet-300",
    description: "Drop me a message anytime",
    image: mailImg,
    translateClass: "translate-y-[44%] translate-x-[10%]",
    hoverTranslateClass: "group-hover:translate-y-[36%]",
  },
  {
    id: "linkedin",
    icon: FALinkedIn,
    label: "LinkedIn",
    value: "linkedin.com/in/onkar-chougule01",
    href: "https://www.linkedin.com/in/onkar-chougule01",
    colSpan: "col-span-2 md:col-span-3",
    bg: "bg-sky-200 dark:bg-sky-300",
    description: "Let's connect professionally",
    image: linkedinImg,
  },
  {
    id: "github",
    icon: FAGitHub,
    label: "GitHub",
    value: "github.com/Trampoline999",
    href: "https://github.com/Trampoline999",
    colSpan: "col-span-2 md:col-span-3 lg:col-span-2",
    bg: "bg-zinc-200 dark:bg-zinc-300",
    description: "Check out my open source work",
    image: githubImg,
  },
  {
    id: "twitter",
    icon: FATwitter,
    label: "Twitter / X",
    value: "@onkarchougule99",
    href: "https://twitter.com/onkarchougule99",
    colSpan: "col-span-2 md:col-span-3 lg:col-span-2",
    bg: "bg-emerald-200 dark:bg-emerald-300",
    description: "Thoughts & updates",
    image: twitterImg,
    translateClass: "translate-y-[46%] translate-x-[10%]",
    hoverTranslateClass: "group-hover:translate-y-[38%]",
  },
  {
    id: "resume",
    icon: FileText,
    label: "Resume",
    value: "View My Resume",
    href: "https://drive.google.com/file/d/11scqOdmXEz2XDUm3K97kb0Us0bELQkL5/view?usp=sharing",
    colSpan: "col-span-2 md:col-span-6 lg:col-span-2",
    bg: "bg-amber-200 dark:bg-amber-300",
    description: "Download or view online",
    image: resumeImg,
  },
];

const ContactCard = ({ id, icon: Icon, label, value, href, colSpan, bg, description, image, translateClass, hoverTranslateClass }) => {
  return (
    <a
      id={`contact-${id}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl p-4 sm:p-6 md:rounded-4xl md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${bg} ${colSpan}`}
    >
      {/* Left side text */}
      <div className={`flex flex-col justify-between h-full flex-1 min-w-0 z-10 ${
        image 
          ? "pr-[110px] min-[375px]:pr-[125px] min-[425px]:pr-[140px] sm:pr-[155px] md:pr-[185px] lg:pr-[210px]" 
          : "pr-2"
      }`}>
        {/* Top row */}
        <div className="flex items-start">
          <div className="flex h-7 w-7 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-2xl bg-black/10 dark:bg-black/15 backdrop-blur-sm">
            <Icon className="h-3.5 w-3.5 sm:h-6 sm:w-6 text-gray-900 dark:text-gray-900" strokeWidth={1.8} />
          </div>
        </div>

        {/* Bottom content */}
        <div className="mt-3 sm:mt-8 space-y-0.5 sm:space-y-1">
          <h3 className="text-[9px] sm:text-[12px] font-medium tracking-widest uppercase text-gray-600 dark:text-gray-700">
            {label}
          </h3>
          <p className="font-bricolage text-xs sm:text-base md:text-lg lg:text-xl font-semibold leading-tight text-gray-900 dark:text-gray-900">
            {description}
          </p>
          <p className="font-bricolage text-[10px] text-gray-700 dark:text-gray-800 sm:text-sm truncate">
            {value}
          </p>
        </div>
      </div>

      {/* Absolute Bottom-Right Image Illustration (Responsive, Corner-aligned, and Bottom-clipped) */}
      {image ? (
        <div className={`absolute right-0 bottom-0 w-[130px] min-[375px]:w-[150px] min-[425px]:w-[170px] sm:w-[185px] md:w-[225px] lg:w-[260px] shrink-0 overflow-hidden pointer-events-none transition-transform duration-500 group-hover:scale-105 flex items-end justify-end ${
          translateClass || "translate-y-[25%] translate-x-[10%]"
        } ${
          hoverTranslateClass || "group-hover:translate-y-[20%]"
        }`}>
          <img
            src={image}
            alt={label}
            className="w-full h-auto object-contain object-bottom-right"
          />
        </div>
      ) : null}

      {/* Arrow placed absolute top-right for all screen sizes */}
      <ArrowUpRight
        className="absolute right-3 top-3 sm:right-4 sm:top-4 h-5 w-5 text-gray-700 dark:text-gray-800 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={2}
      />
    </a>
  );
};

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex w-full flex-col items-center my-20 lg:my-30"
    >
      <div className="w-full px-4 sm:px-6 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          {/* Heading */}
          <h2 className="text-black dark:text-gray-100 mb-16 text-center font-instrument text-4xl font-bold tracking-wide sm:text-5xl md:text-6xl lg:text-7xl underline decoration-wavy underline-offset-8 decoration-gray-900 dark:decoration-gray-200">
            Get in Touch
          </h2>

          {/* Bento grid */}
          <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-6 auto-rows-[9rem] sm:auto-rows-[12rem] md:auto-rows-[16rem]">
            {contactItems.map((item) => (
              <ContactCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;