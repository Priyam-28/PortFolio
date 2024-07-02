/* eslint-disable react/prop-types */
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FaCode } from "react-icons/fa";

const items = [
  {
    id: 1,
    title: "Instagram Clone",
    img: "instagram1.png",
    desc: "Created an Instagram Clone using React for the frontend, Firestore for database management, and Firebase Zustand for state management. The app mimics core Instagram functionalities like posting, liking, and commenting, with real-time updates and user authentication for a seamless social media experience.",
    url:"https://insta-clone-kappa-pearl.vercel.app/",
    code:"https://github.com/Priyam-28/InstaClone"
  },
  {
    id: 2,
    title: "Task Topia",
    img: "tasktopia.png",
    desc: "Built a comprehensive task management application using Firebase for real-time database capabilities and Next.js for a fast and responsive front-end. The app allows users to create, prioritize, and track tasks with dynamic updates across devices. Features include user authentication, task categorization, and intuitive UI/UX design for enhanced productivity and collaboration.",
    url:"https://tasktopia-jy1l-qbgd7nlgx-priyams-projects-da13d4ec.vercel.app/",
    code:"https://github.com/Priyam-28/Tasktopia"
  },
  {
    id: 3,
    title: "2D Mapping Bot",
    img: "mapping.jpg",
    desc: "Developed a 2D mapping robot integrating Arduino for hardware control, Python for real-time data processing, and ultrasonic sensors for accurate spatial mapping. The bot autonomously navigates and maps its surroundings, employing sensor data to create detailed 2D maps, enhancing navigation and obstacle avoidance capabilities.",
    code:"https://github.com/Priyam-28/Room-Mapping-Vehicle"
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section id="projects">
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          
          <div className="buttonContainer">
              <a href={item.url} className="demoButton">See Demo</a>
              <a href={item.code} className="codeLink"><FaCode /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
