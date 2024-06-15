import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './position.scss';

const titles = ["Web Developer", "Casual Gamer", "Robotics Enthusiast" ];

const Position = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prevTitle) => (prevTitle + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="position-container">
      <div className="position-text">
        I am&nbsp;
        <AnimatePresence mode='wait'>
          <motion.span
            key={titles[currentTitle]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="title"
          >
            {titles[currentTitle]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Position;
