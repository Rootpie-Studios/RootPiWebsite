import React from 'react';
import '../css/card.css';

function Card(props) {
  return <div className="card" style={{ backgroundColor: props.color, color: props.textColor }} >{props.children}</div>;
}

export default Card;