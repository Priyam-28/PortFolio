/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import SpacemanCanvas from "../spaceman/Spaceman";
import Position from "../position/Position";
import StarsCanvas from "../Stars/Stars";

const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="parallax" ref={ref}>
      <motion.div className="spaceman">
        <SpacemanCanvas />
      </motion.div>
      <div className="description">
        <motion.h1 style={{ y: yText }} className="name">
          Hi, I am Priyam <br />
          <Position/>
        </motion.h1>
      </div>
      <StarsCanvas className='stars'/>
      <motion.div className="mountains"></motion.div>
      <motion.div className="mountains2" style={{ y: yBg }}></motion.div>
      <motion.div className="planets" style={{ y: yBg }}></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  );
};

export default Parallax;
