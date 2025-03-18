import React from "react";
import "../css/cardproject.css";

function CardProject(props) {
  return (
    <div
      className="card-project"
      style={{
        color: props.textColor,
        width: props.width,
      }}
    >
      <div className="card-header">
        {props.images && <div className="img">{props.images}</div>}
      </div>
      <div className="card-content">
        <div className="text-content">{props.children}</div>
      </div>
    </div>
  );
}

export default CardProject;
