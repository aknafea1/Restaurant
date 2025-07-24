import React from "react";
import { about, text,img } from "./About.module.css";
import Button from "./Button";
import TitleText from "./TitleText";
const About = () => {
  return (
    <div className={about}>
      <div className={text}>
        <TitleText>simply irresistible</TitleText>
        <h2>Steak <br /> cooked to<br /> perfection</h2>
        <p>
          Welcome to Grand Restaurant steak, the home of the best steak in town.
          We serve only the finest cuts of meat, dry-aged for at least 28 days
          to enhance their flavor and tenderness. Our steaks are cooked to
          perfection over a wood-fired grill, giving them a unique smoky flavor
          that is sure to tantalize your taste buds.
        </p>
        <Button style={{padding:'16px'}}> learn more</Button>
      </div>
      <div className={img}></div>
    </div>
  );
};

export default About;
