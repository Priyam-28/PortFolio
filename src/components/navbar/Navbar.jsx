import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>
      <div className="wrapper">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="title-logo"
        >
          <span className="title">D S PRIYAM</span>
          <img src="logoface.png" className="logo" alt="Logo" />
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
