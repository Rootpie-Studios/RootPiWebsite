import React from "react";

function CardProject(props) {
  const defaultClasses =
    "bg-white rounded-2xl shadow-md p-8 my-8 mx-auto flex flex-col relative border border-gray-50 md:p-6";
  const className = props.className || defaultClasses;

  return (
    <div
      className={className}
      style={{
        color: props.textColor,
        width: props.width,
      }}
    >
      {props.images && props.images}
      <div className="flex-1 flex flex-col">{props.children}</div>
    </div>
  );
}

export default CardProject;
