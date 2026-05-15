import React from 'react';
import { motion } from "motion/react";

// Import retro icons
import codingIcon from "../src/assets/retroicons/Coding-Apps-Websites-Programming-Browser--Streamline-Pixel.svg";
import brushIcon from "../src/assets/retroicons/Color Brush Paint Icon.svg";
import cassetteIcon from "../src/assets/retroicons/Computers-Devices-Electronics-Tape-Cassette--Streamline-Pixel.svg";
import cdIcon from "../src/assets/retroicons/Computers-Devices-Electronicscd-Disk--Streamline-Pixel.svg";
import folderIcon from "../src/assets/retroicons/Content-Files-Folder-Open--Streamline-Pixel.svg";
import internetIcon from "../src/assets/retroicons/Internet-Network-Www--Streamline-Pixel.svg";

const RETRO_ICONS = [
  codingIcon,
  brushIcon,
  cassetteIcon,
  cdIcon,
  folderIcon,
  internetIcon,
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
        const radius = "clamp(100px, 30vw, 180px)";

        return (
          <motion.div
            key={`float-${index}`}
            className="absolute w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 pointer-events-none z-[-1] left-1/2 top-1/2 "
            initial={{ scale: 0, x: "-50%", y: "-50%", opacity: 0 }}
            animate={{
              scale: 1,
              x: `calc(-50% + (${Math.cos(radian)} * ${radius}) - 10px)`,
              y: `calc(-50% - (${Math.sin(radian)} * ${radius}))`,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2 + index * 0.1,
            }}
          >
            <motion.img
              src={icon}
              alt={`retro-icon-${index}`}
              className="w-full h-full object-contain"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              style={{
                filter: "drop-shadow(0 10px 15px rgba(0,0,0,0.1))",             
              }}
            />
          </motion.div>
        );
      })}
    </>
  );
};

export default RetroIcons;
