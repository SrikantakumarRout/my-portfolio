import React from "react";
import MobileProjects from "./UI/MobileProjects";

const MobileVersion = ({ data, images }) => {
  const neWData = data.map((el, i) => {
    return {
      ...el,
      image: images[i],
    };
  });

  return (
    <>
      {neWData.map((el, i) => (
        <MobileProjects key={i} data={el} number={i + 1} />
      ))}
    </>
  );
};

export default MobileVersion;
