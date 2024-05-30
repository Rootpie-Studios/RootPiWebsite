import React from "react";
import IconWithTooltip from "./IconWithTooltip";

const IconArray = ({ icons }) => (
  <div className="flex space-x-4">
    {icons.map((icon, index) => (
      <IconWithTooltip key={index} {...icon} className="w-8 h-8" />
    ))}
  </div>
);

export default IconArray;
