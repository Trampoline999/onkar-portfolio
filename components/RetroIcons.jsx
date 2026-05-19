import React from 'react';
import { motion } from "motion/react";
import constructionCone from "../src/assets/stickericon/construction cone.svg";
import education from "../src/assets/stickericon/education.svg";
import fireFolder from "../src/assets/stickericon/fire folder.svg";
import pencil from "../src/assets/stickericon/pencil.svg";
import project from "../src/assets/stickericon/project.svg";
import technicalSkills from "../src/assets/stickericon/technical-skills.svg";

const RETRO_ICONS = [
  <img src={constructionCone} alt="Construction Cone" className="w-full h-full object-contain" key="cone" />,
  <img src={education} alt="Education" className="w-full h-full object-contain" key="education" />,
  <img src={fireFolder} alt="Fire Folder" className="w-full h-full object-contain" key="folder" />,
  <img src={pencil} alt="Pencil" className="w-full h-full object-contain" key="pencil" />,
  <img src={project} alt="Project" className="w-full h-full object-contain" key="project" />,
  <img src={technicalSkills} alt="Technical Skills" className="w-full h-full object-contain" key="skills" />,
];


const RetroIcons = () => {
  return (
    <>
      {RETRO_ICONS.map((icon, index) => {
        const totalIcons = RETRO_ICONS.length;
        const startAngle = 165;
        const endAngle = 15;
        const angle = startAngle - (index / (totalIcons - 1)) * (startAngle - endAngle);
        const radian = (angle * Math.PI) / 180;
        const radius = "clamp(140px, 18vw, 190px)";

        return (
          <motion.div
            key={`icon-wrapper-${index}`}
            className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 pointer-events-none z-[-1] left-1/2 top-1/2 text-black dark:text-white transition-colors duration-300"
            initial={{ scale: 0.3, x: "-50%", y: "-50%", opacity: 0 }}
            animate={{
              scale: 1,
              x: `calc(-50% + (${Math.cos(radian)} * ${radius}) - 10px)`,
              y: `calc(-50% - (${Math.sin(radian)} * ${radius}))`,
              opacity: 1,
            }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.8 + index * 0.12,
            }}
            style={{
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
          >
            <motion.div
              className="w-full h-full"
              animate={{ 
                y: [0, -12, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.2 + index * 0.12,
              }}
              style={{
                filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.1))",             
              }}
            >
              {icon}
            </motion.div>
          </motion.div>
        );
      })}
    </>
  );
};


export default RetroIcons;
