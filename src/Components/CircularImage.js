import React from "react";

function CircularImage({ src, alt, className = "", shadowSize = "lg" }) {
  const baseClasses =
    "object-contain border border-gray-200 bg-white rounded-full p-1";
  const shadowClass = shadowSize === "md" ? "shadow-md" : "shadow-lg";

  return (
    <img
      className={`${baseClasses} ${shadowClass} ${className}`}
      src={src}
      alt={alt}
    />
  );
}

export default CircularImage;
