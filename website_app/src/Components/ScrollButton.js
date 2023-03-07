import React from "react";
import "../css/button.css";

const ScrollButton = () => {
  const handleClick = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return <button onClick={handleClick}>Contact Us</button>;
};

export default ScrollButton;
