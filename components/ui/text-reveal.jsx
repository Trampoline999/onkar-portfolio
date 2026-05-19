import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "../../lib/utils"

export const TextReveal = ({ children, className }) => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 90%", "end center"],
  })

  let tokens = [];

  if (typeof children === "string") {
    tokens = children.split(" ").map(word => ({ text: word, className: "" }));
  } else if (Array.isArray(children)) {
    tokens = children;
  } else {
    throw new Error("TextReveal: children must be a string or array of token objects")
  }

  return (
    <div ref={sectionRef} className={cn("relative z-0", className)}>
      <div className="mx-auto flex w-full items-center bg-transparent py-4">
        <p className="flex flex-wrap items-center gap-y-1 text-sm sm:text-base md:text-[17px] font-sans text-black/20 dark:text-white/20">
          {tokens.map((token, i) => {
            const start = i / tokens.length
            const end = start + 1 / tokens.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]} highlightClass={token.className}>
                {token.text}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
}

const Word = ({ children, progress, range, highlightClass }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className={cn("relative mr-1.5 sm:mr-2", highlightClass)}>
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} className={highlightClass ? "" : "text-gray-800 dark:text-gray-300"}>
        {children}
      </motion.span>
    </span>
  );
}
