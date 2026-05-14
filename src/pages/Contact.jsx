import { Mail, Code2, AtSign, Globe, FileText, ArrowUpRight, Link2 } from "lucide-react";

const contactItems = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "onkarchougule99@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&to=onkarchougule99@gmail.com",
    colSpan: "md:col-span-3",
    bg: "bg-violet-200 dark:bg-violet-300",
    description: "Drop me a message anytime",
  },
  {
    id: "linkedin",
    icon: Globe,
    label: "LinkedIn",
    value: "linkedin.com/in/onkarchougule06",
    href: "https://www.linkedin.com/in/onkarchougule06/",
    colSpan: "md:col-span-3",
    bg: "bg-sky-200 dark:bg-sky-300",
    description: "Let's connect professionally",
  },
  {
    id: "github",
    icon: Code2,
    label: "GitHub",
    value: "github.com/Trampoline999",
    href: "https://github.com/Trampoline999",
    colSpan: "md:col-span-2",
    bg: "bg-zinc-200 dark:bg-zinc-300",
    description: "Check out my open source work",
  },
  {
    id: "twitter",
    icon: AtSign,
    label: "Twitter / X",
    value: "@onkarchougule99",
    href: "https://twitter.com/onkarchougule99",
    colSpan: "md:col-span-2",
    bg: "bg-yellow-200 dark:bg-yellow-300",
    description: "Thoughts & updates",
  },
  {
    id: "resume",
    icon: FileText,
    label: "Resume",
    value: "View My Resume",
    href: "https://drive.google.com/file/d/11scqOdmXEz2XDUm3K97kb0Us0bELQkL5/view?usp=sharing",
    colSpan: "md:col-span-2",
    bg: "bg-emerald-200 dark:bg-emerald-300",
    description: "Download or view online",
  },
];

const ContactCard = ({ id, icon: Icon, label, value, href, colSpan, bg, description }) => {
  return (
    <a
      id={`contact-${id}`}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl p-4 sm:p-6 md:rounded-4xl md:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${bg} ${colSpan}`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-xl sm:rounded-2xl bg-black/10 dark:bg-black/15 backdrop-blur-sm">
          <Icon className="h-4 w-4 sm:h-6 sm:w-6 text-gray-900 dark:text-gray-900" strokeWidth={1.8} />
        </div>
        <ArrowUpRight
          className="h-5 w-5 text-gray-700 dark:text-gray-800 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={2}
        />
      </div>

      {/* Bottom content */}
      <div className="mt-4 sm:mt-8 space-y-0.5 sm:space-y-1">
        <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-widest text-gray-600 dark:text-gray-700">
          {label}
        </p>
        <h3 className="font-bricolage text-sm sm:text-xl font-semibold leading-tight text-gray-900 dark:text-gray-900 md:text-2xl">
          {description}
        </h3>
        <p className="font-bricolage text-xs text-gray-700 dark:text-gray-800 sm:text-sm truncate">
          {value}
        </p>
      </div>
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