import React, { useState, useEffect, useRef } from "react";

export const ProjectHeadingContent = () => {
  const [scroll, setscroll] = useState(0);
  const [intersecting, setintersecting] = useState(false);

  const handelScroll = () => {
    setscroll((window.scrollY / 10) * 1.5);
  };

  const elemRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entry) => {
      if (entry[0].isIntersecting) {
        setintersecting(true);
      } else {
        setintersecting(false);
      }
    });

    if (intersecting) {
      window.addEventListener("scroll", handelScroll);
    }

    observer.observe(elemRef.current);

    return () => {
      window.removeEventListener("scroll", handelScroll);
    };
  }, [intersecting]);

  return (
    <div className="project-content-head" ref={elemRef}>
      <span style={{ left: `${scroll}px` }} className="font-second">
        {" Show me what you've got !".repeat(10)}
      </span>
      <span
        className="font-first"
        style={{ left: `${-scroll}px`, color: "black", marginLeft: "500px" }}
      >
        {"< PROJECTS /> ".repeat(20)}
      </span>
    </div>
  );
};
