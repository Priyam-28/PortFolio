import { motion } from "framer-motion";
import { Link } from "react-scroll";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Home", "Experience", "Projects", "Contact"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.div key={item} variants={itemVariants}>
          <Link
            to={item.toLowerCase()}
            smooth={true}
            duration={500}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Links;
