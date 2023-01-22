import React, { useState, useEffect } from "react";
import "../css/Hero.css";
import { Spinner } from "./UI/Spinner";
import { motion, AnimatePresence } from "framer-motion";
import { MainHeader } from "./UI/MainHeader";

const Loader = () => {
  return (
    <motion.div
      className="loader-page"
      exit={{ height: "80vh" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Spinner />
    </motion.div>
  );
};

const Hero = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setloading(false);
    }, 1500);

    return () => {
      clearTimeout(timeout);
    };
  }, [loading]);

  return (
    <div className="hero-container">
      <AnimatePresence>{loading ? <Loader /> : <MainHeader />}</AnimatePresence>
    </div>
  );
};

export default Hero;
