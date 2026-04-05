import React from "react";

function Button(props) {
  return (
    <button
      className="font-sans bg-primary text-white rounded-lg border-none px-7 py-3 text-sm font-semibold cursor-pointer hover:bg-primary-dark transition-colors duration-200 shadow-lg shadow-primary/20"
      style={{ backgroundColor: props.color, color: props.textColor }}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default Button;
