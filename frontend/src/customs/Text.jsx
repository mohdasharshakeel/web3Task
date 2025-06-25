import { motion } from "framer-motion";
import { useState } from "react";

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

function Text() {
  const text = "ANIMATE WITH SOCKET.IO";
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex flex-wrap justify-center cursor-default"
    >
      {text.split("").map((char, index) =>
        hovered ? (
          <motion.span
            key={index}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={letterVariants}
            className="text-4xl sm:text-5xl font-extrabold text-gray-600"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ) : (
          <span
            key={index}
            className="text-4xl sm:text-5xl font-extrabold text-gray-700"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        )
      )}
    </div>
  );
}

export default Text;
