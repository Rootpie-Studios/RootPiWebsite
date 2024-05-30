import React from "react";

function Button(props) {
  return (
    <button
      className="bg-white rounded-md text-black font-bold px-5 py-4 shadow-lg hover:bg-black hover:text-white transition-colors duration-100 ease-in-out"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default Button;
