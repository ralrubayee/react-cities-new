import React, { useState } from "react";
import "./styles.css";

import imagesArr from "./imageData.js";
import BigImage from "./BigImage";
import SmallImage from "./SmallImage";

export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
  const [smallImage, setSmallImage] = useState(0);

  const handleClick = (imgUrl, key) => {
    setBigImage(imgUrl);
    setSmallImage(key);
  };

  const images = imagesArr.map((element, index) => {
    return (
      <SmallImage
        src={element.img}
        image={smallImage}
        alt={element.city}
        key={index}
        idx={index}
        handleClick={handleClick}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
          {/* RENDER THE IMAGES ARRAY  */}
          {images}
        </div>
        {/* THE SRC IMAGE URL SHOULD BE SET TO THE VALUE THAT IS STORED IN bigImage */}
        <BigImage image={bigImage} />
      </div>
    </div>
  );
}
