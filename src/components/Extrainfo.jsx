import React from "react";
import {
  extra,
  info,
  img,
  showcase,
  floating,
  imgone,
  imgtwo,
  imgthree,
  text,
} from "./Extrainfo.module.css";
import img1 from "../assets/grilled-beef-steak-2021-08-26-16-31-42-utc-610x610.jpg";
import img2 from "../assets/download.jpg";
import img3 from "../assets/modern-restaurant-dish-veal-tartare-with-quail-eg-2022-12-16.jpg";
import TitleText from "./TitleText";
import GrandText from "./GrandText";
import { Link } from "react-router-dom";
import GoodVibesHeading from "./GoodVibesHeading";
const Extrainfo = () => {
  return (
    <div className={extra}>
      <GoodVibesHeading
        brown={"Dry-aged steaks"}
        largeOne={"perfect steak"}
        largeTwo={"for every occasion"}
        para={
          "We are the perfect place to come for a special occasion dinner or a casual meal with friends."
        }></GoodVibesHeading>
      <div className={info}>
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h2>Your Culinary Journey Begins Here</h2>
          <p>
            Our ambiance is designed to envelop you in an atmosphere of warmth
            and sophistication, setting the stage for a memorable meal. Immerse
            yourself in the cozy, inviting ambiance as our attentive staff cater
            to your every need, making your visit a true culinary journey.
          </p>
          <Link to="/">view our menus</Link>
        </div>
        <div className={img}></div>
      </div>
      <div className={showcase}>
        <img src={img1} className={`${floating} ${imgone}`} alt="" />
        <img src={img2} className={`${floating} ${imgtwo}`} />
        <img src={img3} className={`${floating} ${imgthree}`} />
        <div className={text}>
          <TitleText>Taste the Tradition</TitleText>
          <GrandText>Satisfy Your Cravings</GrandText>
        </div>
      </div>
    </div>
  );
};

export default Extrainfo;
