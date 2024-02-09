import React from "react";
import img from "../../assets/yu3z5dcoaag21-removebg-preview.png";
const HeroSection = () => {
  return (
    <div className="herosection" id="home">
      <div className="img-div">
        <img src={img} alt="img" id="home-img" />
      </div>
      <div className="home-info">
        <h1>Hair Affair</h1>
        <p>Style Your Hair, Style Your Life</p>
        <div className="btn-div">
          <a className="box" href="#sevices">
            <span ></span>Read More
          </a>
          <a className="box" href="#contact">
            <span ></span>Find Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
