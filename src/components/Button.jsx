import React from "react";
import { btn, outer } from "./Button.module.css";
const Button = ({ onClick, children, style, outLined }) => {
  return (
    <button
      className={`${outLined?outer:btn}`}
      onClick={onClick}
      style={{ ...style }}>
      {children}
    </button>
  );
};

export default Button;
