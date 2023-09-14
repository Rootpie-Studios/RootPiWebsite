import React from "react";
import "../css/card.css";

function Card(props) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: props.color,
        color: props.textColor,
        width: props.width,
      }}
    >
      <div className="card-content">
        <div className="text">{props.children}</div>
        <div className="image-grid">{props.images}</div>
      </div>
    </div>
  );
}

export default Card;
