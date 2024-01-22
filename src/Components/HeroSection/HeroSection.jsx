import React from "react";
import img from "../../assets/yu3z5dcoaag21-removebg-preview.png";
const HeroSection = () => {
  return (
    <div className="herosection" id="home">
      <div className="img-div">
        <img src={img} alt="img" id="home-img" />
      </div>
      <div className="home-info">
        <h1>Hair Salon</h1>
        <p>Style Your Hair, Style Your Life</p>
        <div className="btn-div">
          <a Href="#">
            <span></span>Read More
          </a>
          <a Href="#">
            <span></span>Find Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
