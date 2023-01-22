import { animate, motion } from "framer-motion";
import React, { useEffect, useState, useRef } from "react";
import resume from "../Resources/resume.pdf";
import vector from "../Resources/coding.png";
import linked from "../Resources/linked.png";
import git from "../Resources/git.png";
import you from "../Resources/you.png";

const getVariants = (delay = 0) => {
  return {
    initial: {
      opacity: 0,
      x: "-25px",
    },
    animate: {
      opacity: 1,
      x: "0",
      transition: {
        duration: 1,
        delay: delay,
      },
    },
  };
};

export const ContactMe = () => {
  const [intersection, setintersection] = useState(false);
  const interRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setintersection(true);
      }
    });

    observer.observe(interRef.current);

    return () => {};
  }, []);

  return (
    <div className="contact-me" ref={interRef}>
      <div className="contact-heading">
        <h1>{"<Contact Me />"}</h1>
      </div>
      <div className="contact-main">
        <div className="contact-left">
          {intersection && (
            <div className="contact-description">
              <motion.p
                variants={getVariants()}
                initial="initial"
                animate="animate"
              >
                Creative and self taught Front-End Developer with proficiency in
                JavaScript. Highly adept at independent projects, with an
                emphasis on landing page and website development. Passion for
                responsive website design and a firm believer in the mobile
                first approach. Hungry to learn more and more about UI.
              </motion.p>
              <motion.p
                style={{ color: "lightblue" }}
                variants={getVariants(0.2)}
                initial="initial"
                animate="animate"
              >
                Although i'm very familiar with frameworks , my websites are
                handcoded using HTML5, CSS3, SVG & Javascript.{" "}
              </motion.p>
              <motion.p
                style={{ color: "lightblue" }}
                variants={getVariants(0.4)}
                initial="initial"
                animate="animate"
              >
                With a Strong emphasis on "Progressive Enhancement". I look for
                creative ways to push to push the boundaries of website
                front-end code.
              </motion.p>
              <motion.p
                variants={getVariants(0.6)}
                initial="initial"
                animate="animate"
              >
                In a quest for always keeping myself updated , I keep reading
                for new technologies, get inspired and always try to do new
                things.{" "}
              </motion.p>
            </div>
          )}
          <div className="resume-btn">
            <a href={resume} download style={{ color: "lightblue" }}>
              {" "}
              Download Resume
            </a>
          </div>

          {intersection && (
            <motion.div
              className="links"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              <a
                href="https://www.linkedin.com/in/srikantakumarrout/"
                style={{ margin: "0" }}
                target="_blank"
              >
                <img src={linked} alt="" width={"40px"} />
              </a>
              <a href="https://github.com/SrikantakumarRout" target="_blank">
                <img src={git} alt="" width={"35px"} />
              </a>
              <a
                href="https://youtube.com/@user-mx8bx6ey8n"
                target="_blank"
              >
                <img src={you} alt="" width={"50px"} />
              </a>
            </motion.div>
          )}
        </div>
        <div className="contact-right">
          {intersection && (
            <motion.img
              src={vector}
              alt=""
              width={"400px"}
              initial={{ y: "20px", opacity: 0 }}
              animate={{ y: "0", opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            />
          )}
        </div>
      </div>
    </div>
  );
};
