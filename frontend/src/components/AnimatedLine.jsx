import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

function AnimatedLine({ isPaused }) {
  const controls = useAnimation();

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        width: ['0vw', '90vw', '90vw', '0vw'],
        height: ['100px', '100px', '0px'],
        opacity: [1, 1, 0],
        transition: {
          duration: 2,
          ease: 'easeInOut',
          times: [0, 0.5, 1],
          repeat: Infinity
        }
      });
    } else {
      controls.stop(); // ⏸️ pause at current frame
    }
  }, [isPaused, controls]);

  return (
    <motion.div
      className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-[80vw] max-w-[700px] z-50 pointer-events-none"
      style={{ transformOrigin: 'top' }}
      animate={controls}
      initial={{ width: '0vw', height: '100px', opacity: 1 }}
    >
      <div className="relative w-full h-full">
        {/* 🎨 Top solid gradient line */}
        <div className="absolute top-0 left-0 w-full h-[6px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-10" />

        {/* 💫 Bottom glow gradient */}
        <div className="absolute top-[6px] left-0 w-full h-[94px] bg-gradient-to-t from-white/80 via-white/30 to-transparent blur-[30px] z-0" />
      </div>
    </motion.div>
  );
}

export default AnimatedLine;
