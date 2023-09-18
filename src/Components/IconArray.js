import React from "react";
import IconWithTooltip from "./IconWithTooltip";

const IconArray = ({ icons }) => (
  <h1>
    {icons.map((icon, index) => (
      <IconWithTooltip key={index} {...icon} />
    ))}
  </h1>
);

export default IconArray;
