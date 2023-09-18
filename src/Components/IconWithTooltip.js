import React from "react";
import Tooltip from "@mui/material/Tooltip";

const IconWithTooltip = React.forwardRef(function IconWithTooltip(
  { tooltip, icon, style },
  ref
) {
  return (
    <Tooltip title={tooltip} arrow>
      <span ref={ref} style={style}>
        {icon}
      </span>
    </Tooltip>
  );
});

export default IconWithTooltip;
