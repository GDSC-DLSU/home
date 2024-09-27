import React from "react";
import "./Gallery.css";
import image_1 from "../../assets/devfest.jpg";
import image_2 from "../../assets/frontier.jpg";
import image_3 from "../../assets/xmas.jpg";
import image_4 from "../../assets/gtron.jpg";
import white_arrow from "../../assets/white-arrow.png";

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="images">
        <img src={image_1} alt="" />
        <img src={image_2} alt="" />
        <img src={image_3} alt="" />
        <img src={image_4} alt="" />
      </div>
      <button className="btn dark-btn">
        View More <img src={white_arrow} alt="" />
      </button>
    </div>
  );
};

export default Gallery;
