/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import SpacemanCanvas from "../spaceman/Spaceman";


const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  



  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background: "linear-gradient(180deg, #011825,#0D3056 )",
      }}
    >
      {/* <motion.h1 style={{ y: yText }}>
        What I Did
      </motion.h1> */}
      <SpacemanCanvas className='spaceman'/>
      <motion.div className="mountains"></motion.div>
      <motion.div className="mountains2"></motion.div>

      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(./planets.png)`,
        }}

      ></motion.div>
      
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  );
};

export default Parallax;
