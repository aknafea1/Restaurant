import React from "react";
import GrandText from "./GrandText";

const Times = () => {
  return (
    <ul style={{ listStyle: "none" ,color:"#ffffff"}}>
      <li>
        <b>Monday:</b>Closed
      </li>
      <li>
        <b>Tuesday – Friday:</b>11:00 – 14:00, 17:30 – 23:30
      </li>
      <li>
        <b>Saturday:</b>17:30 – 23:30
      </li>
      <li>
        <b>Sunday:</b>11:00 – 14:00, 17:30 – 22:00
      </li>

    </ul>
  );
};

export default Times;
