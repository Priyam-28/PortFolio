import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './position.scss';

const titles = ["Web Developer", "Casual Gamer", "Robotics Enthusiast"];

const Position = () => {
  return (
    <div className="position-container">
      <div className="position-text">
        <span className="fixed-text">I am&nbsp;</span>
        <Typewriter
          words={titles}
          loop={true}
          cursor
          cursorStyle='_'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </div>
    </div>
  );
};

export default Position;
