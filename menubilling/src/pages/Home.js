import React from "react";
import HomeImg from "../images/menu.png";
import { Link } from "react-router-dom";
import {motion} from 'framer-motion';

export default function Home() {
  return (
    <div className="homepage">
      <div className="content">
        <div className="text-content">
          <motion.h1  initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}>Menu Billing Web Application</motion.h1>
          <motion.p initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}>Delicious food for every mood</motion.p>
          <Link to="/menu">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
            //whileHover={{ scale: 1.1, transition: { duration: 0 } }} 
            className="ordernow-btn"
          >
            Order Now
          </motion.button>
          </Link>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.8 }}
          className="image-content"
        >
          <img src={HomeImg} alt="Description of the image" />
        </motion.div>
      </div>
    </div>
  );
}
