import React from "react";
import { hero, heroText, verticalLine } from "./Hero.module.css";
import GrandText from "./GrandText";
const Hero = ({ style, bg, children }) => {
  return (
    <div className={hero} style={{ ...style, backgroundImage: `url(${bg})` }}>
      <div className={heroText}>
        {children}
        
      </div>
      <div className={verticalLine}></div>
    </div>
  );
};

export default Hero;
