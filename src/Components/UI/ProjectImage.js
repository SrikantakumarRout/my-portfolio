import React, { useEffect, useRef } from "react";

export const ProjectImage = ({
  id,
  renderContent,

  images,
}) => {
  const Containerref = useRef();

  useEffect(() => {
    const Observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          renderContent(id);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "20px",
      }
    );

    if (Containerref.current) Observer.observe(Containerref.current);

    return () => {
      if (Containerref.current) Observer.unobserve(Containerref.current);
    };
  }, [Containerref]);

  return (
    <div className="project-image-container" ref={Containerref}>
      {images.map((el) => {
        return (
          <img
            src={el.image}
            alt=""
            width={el.width}
            style={{ transform: el.style, margin: "-10px" }}
            className="project-images"
          />
        );
      })}
    </div>
  );
};
