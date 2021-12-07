import React from "react";

const SmallImage = ({ city, src, image, handleClick, idx }) => {
  return (
    <img
      src={src}
      className={`thumb ${idx === image ? "selected" : ""}`}
      alt={city}
      onClick={() => handleClick(src, idx)}
    />
  );
};

export default SmallImage;