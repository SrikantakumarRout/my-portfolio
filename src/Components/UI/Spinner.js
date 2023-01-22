import React from "react";
import { motion } from "framer-motion";

const variants = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0 },
};

export const Spinner = () => {
  return (
    <motion.div
      class="loadingio-spinner-wedges-w210wye48a8"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div class="ldio-oupeg0ju6hq">
        <div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
