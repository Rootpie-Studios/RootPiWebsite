import React from "react";
import "../css/cardcontact.css";

function CardPortfolio(props) {
  return (
    <div className="cardportfolio">
      <div className="card-content">
        <div className="text">{props.children}</div>
        <div className="text">{props.icons}</div>
      </div>
      <div className="img">{props.images}</div>
    </div>
  );
}

export default CardPortfolio;
