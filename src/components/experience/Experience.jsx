/* eslint-disable react/prop-types */
  
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";
import { textVariant } from "../../utils/motion";
import "./experience.scss";

const ExperienceCard = ({ experience }) => {
  return (
    
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='experience-icon-container'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='experience-icon'
          />
        </div>
      }
    >
      <div>
        <h3 className='experience-title'>{experience.title}</h3>
        <p className='experience-company' style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className='experience-points'>
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}>
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} id="experience">
        
        <h2>
          Work Experience
        </h2>
      </motion.div>

      <div className='experience-container'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default (Experience);
