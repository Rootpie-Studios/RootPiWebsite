import React from "react";

function Card(props) {
  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 md:p-5 lg:p-4 my-8 mx-auto items-center transition-all duration-300 border border-gray-200"
      style={{
        backgroundColor: props.color,
        color: props.textColor,
        width: props.width,
      }}
    >
      <div className="grid grid-cols-1 gap-4">
        <div className="justify-self-start overflow-auto text-gray-700 min-h-[70px] md:min-h-0">
          {props.children}
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
          {props.images && props.images}
        </div>
      </div>
    </div>
  );
}

export default Card;
