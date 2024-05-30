import React from "react";
import IconWithTooltip from "./IconWithTooltip";

const IconArray = ({ icons }) => (
  <div className="flex space-x-4">
    {icons.map((icon, index) => (
      <IconWithTooltip key={index} {...icon} />
    ))}
  </div>
);

export default IconArray;
