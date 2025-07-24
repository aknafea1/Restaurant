import React from "react";
import { heading } from "./GoodVibesHeading.module.css";
const GoodVibesHeading = ({ brown, largeOne, largeTwo, para }) => {
  return (
    <div className={heading}>
      <h3>{brown}</h3>
      <h2>
        {largeOne} <br /> <span>{largeTwo}</span>
      </h2>
      <p>{para}</p>
    </div>
  );
};

export default GoodVibesHeading;
