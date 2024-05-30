import React from "react";

function Button(props) {
  return (
    <button
      className="bg-white rounded-md text-black font-bold px-4 py-2 shadow-lg hover:bg-black border hover:text-white transition-colors duration-100 ease-in-out"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default Button;
