import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Hero from "./Hero";
import TitleText from "./TitleText";
import GrandText from "./GrandText";
import bg from "../assets/download.jpg"
import ReservationsContainer from "./ReservationsContainer";
const Reservation = () => {
  return (
    <>
      <Hero bg={bg} style={{height:"90vh"}}>
        <TitleText>From the Grill to Your Plate</TitleText>
        <GrandText>Reservations</GrandText>
      </Hero>
      <ReservationsContainer></ReservationsContainer>
    </>
  );
};

export default Reservation;
