import React from 'react';
import '../css/roundbutton.css';

function RoundButton(props) {
  return (
    <button className="round-button" style={{ backgroundColor: props.color, color: props.textColor }} onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default RoundButton;