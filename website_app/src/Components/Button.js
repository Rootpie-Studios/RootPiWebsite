import React from 'react';
import '../css/button.css';

function Button(props) {
  return (
    <button className="button" style={{ backgroundColor: props.color, color: props.textColor }} onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;