import React, { useState, useEffect } from "react";
import "./button.css";

const AwesomeButton = ({ variant, children }) => {
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (variant) {
      if (variant === "primary") {
        setColor("#0077ff");
      } else if (variant === "secondary") {
        setColor("#ff0062");
      } else if (variant === "success") {
        setColor("#0f8000");
      } else {
        setColor("#949393");
      }
    }
  }, [variant]);

  return (
    <button
      className="buttonComponent"
      style={{
        backgroundColor: color,
      }}
    >
      {children.toUpperCase()}
    </button>
  );
};

export default AwesomeButton;
