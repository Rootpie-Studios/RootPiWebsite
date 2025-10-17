import React from "react";

function RoundButton(props) {
  return (
    <button
      className="bg-blue-600 text-white border-none rounded-full shadow-md p-2.5 m-2.5 text-base cursor-pointer "
      style={{ backgroundColor: props.color, color: props.textColor }}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}

export default RoundButton;
