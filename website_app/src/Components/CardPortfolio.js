import React from 'react';
import '../css/cardportfolio.css';

function CardPortfolio(props) {
  return (
    <div className="cardportfolio" style={{ 
      backgroundColor: props.color, 
      color: props.textColor, 
      width: props.width,
    }}>
      <div className="card-content">
        <div className="text">{props.children}</div>
        <div className="text">{props.icons}</div>
      </div>
      <div className="img">{props.images}</div>
    </div>
  );
}

export default CardPortfolio;