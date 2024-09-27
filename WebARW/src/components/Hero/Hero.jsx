import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Connect. Learn. Grow</h1>
        <p>
          Students from all undergraduate or graduate programs with an interest
          in growing as a developer are welcome. By joining a GDSC, students
          grow their knowledge in a peer-to-peer learning environment and build
          solutions for local businesses and their community.
        </p>
        <button className="btn">
          Join Us <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
