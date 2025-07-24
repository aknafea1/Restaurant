import React from "react";
import { footer, links } from "./Footer.module.css";
import logo from "../assets/Logo-1.png";
import Button from "./Button";
import GrandText from "./GrandText";
import Times from "./Times";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={footer}>
      <Link to="/">
        <img src={logo} style={{ width: "150px" }} alt="" />
      </Link>
      <p>
        +123456789 <br /> Via Serlas 546, 6700 St. Moritz, <br /> Switzerland
      </p>
      <h3>Opening Hours</h3>
      <Times></Times>
      <GrandText>Indulge in Steakhouse Bliss</GrandText>
      <hr />
      <Button
        bgColor={"var(--main-color)"}
        style={{ margin: "16px auto", padding: "16px" }}>
        <Link to="/Reservation">Reservation</Link>
      </Button>
      <ul className={links} style={{ flexWrap: "wrap" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Our Menus</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
        <li>
          <Link to="/Reservation">Reservation</Link>
        </li>
      </ul>
      <p style={{ fontSize: "14px", opacity: "0.6" }}>
        Copyright © Grand Restaurant Theme
      </p>
    </div>
  );
};

export default Footer;
