import React from "react";
import { useSelector } from "react-redux";

export const ProjectsContent = ({ data }) => {
  const number = useSelector((state) => state.reducer.scrollNo);

  const content = data[number];

  return (
    <div className="projects-content">
      <div className="project-no">
        <span
          style={{
            color: "lightblue",
          }}
        >
          0
        </span>
        <span>{number + 1}</span>
      </div>
      <div className="project-text">
        <div className="heading" style={{ color: "lightblue" }}>
          {content.title}
        </div>
        <div className="project-description">{content.description}</div>
        <div className="project-link">
          <a href={content.link} target="_blank">
            <button style={{ fontWeight: "500", fontSize: "16px" }}>
              Try It Out!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
