import React from "react";

function Button(props) {
  return (
    <button
      className="font-sans bg-blue-600 text-white rounded-lg border-none shadow-md px-5 py-2.5 mx-auto text-base font-medium cursor-pointer hover:bg-blue-700 transition-colors duration-200"
      style={{ backgroundColor: props.color, color: props.textColor }}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default Button;
