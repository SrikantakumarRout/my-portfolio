import React from "react";
import { motion } from "framer-motion";
import logo from "../../Resources/logo.png";


const getAnimation = (delay) => {
  return {
    initial: {
      y: "50px",
      opacity: 0,
    },
    animate: {
      y: "0px",
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        easeIn: [0.34, 1.56, 0.64, 1],
        type: "tween",
        stiffness: 100,
      },
    },
  };
};

export const MainHeader = () => {
  return (
    <motion.div
      className="main-header"
      initial={{ height: "100vh" }}
      animate={{ height: "85vh" }}
      transition={{ duration: 0.9, ease: "easeInOut" }}
    >
      <div className="header-main-text">
      <motion.h1 
         variants={getAnimation(1.3)}
         initial="initial"
         animate="animate"
         style={{ fontWeight: 700, fontSize: "50px", color: "green" }}
        >
         {"Hey, I'm"}
        </motion.h1>
        <motion.h2 
         variants={getAnimation(1.3)}
         initial="initial"
         animate="animate"
         style={{ fontWeight: 700, fontSize: "50px", color: "green" }}
        >
         {"Srikanta kumar Rout"}
        </motion.h2>

        <motion.h3
          variants={getAnimation(1.3)}
          initial="initial"
          animate="animate"
          style={{ fontWeight: 700, fontSize: "30px", color: "red" }}
        >
          {"< Software Developer />"}
        </motion.h3>
      </div>
    </motion.div>
  );
};
