import React from "react";
import { input } from "./Input.module.css";
const Input = ({
  label = "default",
  caret = "black",
  type = "text",
  onChange,
  value,
  icon,
  name,
  scale = 1,
  style,
}) => {
  let iconC = undefined;
  switch (icon) {
    case "user":
      iconC = <i className="fa-solid fa-user"></i>;
      break;
  }
  return (
    <fieldset
      className={input}
      style={{ width: `${343 * scale + (scale - 1) * 16}px` }}>
      <legend>{label}</legend>

      <input
        name={name || type}
        type={type}
        style={{ ...style, caretColor: caret }}
        onChange={onChange}
        value={value}
      />
      {iconC}
    </fieldset>
  );
};

export default Input;
