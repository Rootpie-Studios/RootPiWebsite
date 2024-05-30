import React from "react";

function Card(props) {
  return (
    <div
      className={`rounded-lg shadow-lg p-8 mx-2 my-8 flex items-center transition-shadow duration-300 ease-in-out bg-white`}
      style={{
        backgroundColor: props.color,
        color: props.textColor,
        width: props.width,
      }}
    >
      <div className="grid grid-cols-1 gap-4 overflow-auto">
        <div className="text">{props.children}</div>
        <div className="grid grid-cols-auto-fit gap-4">{props.images}</div>
      </div>
    </div>
  );
}

export default Card;
