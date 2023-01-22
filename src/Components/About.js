import React, { useState, useEffect, useRef } from "react";

export const About = () => {
  const [scroll, setscroll] = useState(-50);
  const [intersection, setintersection] = useState(false);
  const [width, setwidth] = useState(false);
  const elem = useRef();

  const handelScroll = () => {
    const scroll = width ? 0.1 : 0.4;
    setscroll(window.scrollY * scroll);
  };

  useEffect(() => {
    if (window.screen.availWidth <= 500) {
      setwidth(true);
    }

    const intersectionObserver = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setintersection(true);
      } else {
        setintersection(false);
      }
    });
    intersectionObserver.observe(elem.current);

    if (intersection) {
      window.addEventListener("scroll", handelScroll);
    }

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, [scroll, intersection]);

  return (
    <div className="about-section" style={{ overflow: "hidden" }} ref={elem}>
      <div className="about-text">
        <div className="about-me" style={{ left: scroll }}>
          ABOUT ME
        </div>
        <div className="about-desc">
          Front end developer who cares deeply about user experience. Serious
          passion for UI design and new technologies
        </div>
      </div>
    </div>
  );
};
