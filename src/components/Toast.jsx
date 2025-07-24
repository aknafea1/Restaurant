import React, { useState } from "react";
import { toast, exit } from "./Toast.module.css";
const Toast = ({ children }) => {
  const [toasttoggler, toggleToast] = useState(true);
  return (
    <div
      className={`${toast} ${toasttoggler ? "enter" : exit}`}
      onAnimationEnd={() => setTimeout(() => toggleToast(false), 1500)}>
      {children}
    </div>
  );
};

export default Toast;
