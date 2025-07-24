import React from "react";
import Hero from "./Hero";
import bg from "../assets/gourmet-meal-plate-served-on-restaurant-table-2022-10-11-22-.jpg";
import GrandText from "./GrandText";
import {
  text,
  info,
  container,
  img,
  textTwo,
  imgOne,
  imgTwo,
  infoTwo,
  imgThree,
} from "./AAbout.module.css";
import NormalText from "./NormalText";
import TitleText from "./TitleText";
import GoodVibesHeading from "./GoodVibesHeading";
const AAbout = () => {
  return (
    <div>
      <Hero bg={bg} style={{ height: "80vh" }}>
        <TitleText>Flavor Meets Flame</TitleText>
        <GrandText>About Us</GrandText>
      </Hero>
      <div className={text}>
        <GrandText
          style={{
            maxWidth: "1000px",
            fontWeight: "300",
            margin: "auto",
            lineHeight: "1.1",
          }}
          sp={true}>
          We believe that every steak has a story, and we take great pride in
          ensuring that each one we serve is a testament to the culinary craft.
        </GrandText>
        <NormalText>
          At our restaurant, we serve only the finest steaks, sourced from the
          best local farms. Our steaks are dry-aged for at least 28 days, which
          enhances their flavor. Our steaks are cooked to perfection over a
          wood-fired grill. This gives them a unique smoky flavor that is sure
          to tantalize your taste buds.
        </NormalText>
      </div>
      <div className={info}>
        <GoodVibesHeading
          brown={"Dry-aged steaks"}
          largeOne={"perfect steak"}
          largeTwo={"for every occasion"}></GoodVibesHeading>
        <div className={container}>
          <div className={img}>
            <div className={imgOne}></div>
            <div className={imgTwo}></div>
          </div>
          <div className={textTwo}>
            <TitleText style={{ color: "#fff" }}>
              The service was also excellent. Our server was very attentive and
              friendly, and he made sure that we had everything we needed.
            </TitleText>
            <NormalText>
              Our ambiance is designed to envelop you in an atmosphere of warmth
              and sophistication, setting the stage for a memorable meal.
              Immerse yourself in the cozy, inviting ambiance as our attentive
              staff cater to your every need, making your visit a true culinary
              journey.
            </NormalText>
            <NormalText style={{ margin: "16px 0" }}>
              Whether you’re celebrating a special occasion, enjoying a romantic
              dinner for two, or simply satisfying your craving for the perfect
              steak, Grand Restaurant promises an unforgettable gastronomic
              adventure. Join us and discover the epitome of steakhouse
              excellence.
            </NormalText>
          </div>
        </div>
      </div>
      <div className={infoTwo}>
        <GoodVibesHeading
          brown={"Seared to Perfection"}
          largeOne={"Crafting Steak"}
          largeTwo={"Of Excellence One Bite at a Time"}></GoodVibesHeading>
        <div className={container}>
          <div className={img}>
            <div className={imgThree}></div>
          </div>
          <div className={textTwo}>
            <TitleText style={{ color: "#000" }}>
              We believe that every steak has a story, and we take great pride
              in ensuring that each one we serve is a testament to the culinary
              craft.
            </TitleText>
            <NormalText>
              Our skilled chefs, the maestros behind our kitchen, meticulously
              prepare each steak, taking care to season, sear, and grill to
              perfection. It’s this delicate balance of expertise and passion
              that brings out the rich, smoky flavors and tender juiciness that
              make our steaks truly exceptional.
            </NormalText>
            <NormalText style={{ margin: "16px 0" }}>
              But we’re more than just steaks; we’re a symphony of flavors.
              Complement your steak with an array of thoughtfully curated sides,
              from velvety mashed potatoes to vibrant, crisp salads. Our
              extensive wine and cocktail selection will further elevate your
              dining experience, offering the perfect pairing for your chosen
              steak.
            </NormalText>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AAbout;
