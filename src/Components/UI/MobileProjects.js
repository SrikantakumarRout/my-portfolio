import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const MobileProjects = ({ data, number }) => {
  const [intersect, setintersect] = useState(false);
  const elemRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setintersect(true);
      }
    });

    observer.observe(elemRef.current);

    return () => {};
  }, [intersect]);

  const { description, image, link, title } = data;

  return (
    <div className="projects-mobile-container" ref={elemRef}>
      {intersect && (
        <>
          {" "}
          <div className="mobile-image">
            <img src={image} alt="" />
          </div>
          <motion.div
            className="mobile-text-content"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          >
            <p className="mobile-title">
              <p>
                <span>0</span>
                <span className="mobile-number">{number}</span> {title}
              </p>
            </p>

            <p className="mobile-description">{description}</p>
          </motion.div>
          <div className="project-link mobile-link">
            <a href={link} target="_blank">
              <button style={{ fontWeight: "500", fontSize: "16px" }}>
                Try It Out!
              </button>
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileProjects;
