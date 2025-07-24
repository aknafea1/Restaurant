import React from "react";
import { res } from "./ReservationsContainer.module.css";
import Card from "./Card";
import TitleText from "./TitleText";
import Button from "./Button";
import GrandText from "./GrandText";
import NormalText from "./NormalText";
import Times from "./Times";
const ReservationsContainer = () => {
  return (
    <div className={res}>
      <Card>
        <TitleText
          style={{ fontSize: "25px", fontFamily: "Cormorant Garamond" }}>
          Address
        </TitleText>
        <ul style={{ color: "#FFFFFF" }}>
          <li>+123456789</li>
          <li>Via Serlas 546, 6700 St.</li>
          <li>Moritz, Switzerland</li>
        </ul>
        <Button
          outLined={true}
          style={{ width: "80%", padding: "16px", marginTop: "auto" }}>
          Get Directions
        </Button>
      </Card>
      <Card>
        <TitleText>Taste the Tradition</TitleText>
        <GrandText style={{ fontSize: "30px", maxWidth: "150px" }}>
          Book a Table
        </GrandText>
        <NormalText style={{ opacity: "1" }}>Service *</NormalText>
        <Button
          outLined={true}
          style={{ width: "80%", padding: "16px", marginTop: "auto" }}>
          NEXT
        </Button>
      </Card>
      <Card>
        <TitleText
          style={{ fontSize: "25px", fontFamily: "Cormorant Garamond" }}>
          Opening Hours
        </TitleText>
        <Times></Times>
      </Card>
    </div>
  );
};

export default ReservationsContainer;
