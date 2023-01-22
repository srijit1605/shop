import React from "react";
import HeroSlider from "./HeroSlider";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="banner-styles">
      <div className="banner-text-align">
      <div className="bold-banner-text">Winter</div>
      <div className="thin-banner-text">Collection</div>
      </div>
      <HeroSlider />
    </div>
  );
};

export default Hero;
