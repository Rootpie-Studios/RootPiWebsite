import React from 'react';
import Tooltip from '@mui/material/Tooltip';

const IconWithTooltip = React.forwardRef(function IconWithTooltip(props, ref) {
  return (
    <Tooltip title={props.tooltip} arrow>
        <span ref={ref}>
            {props.icon}
        </span>
    </Tooltip>
  );
});

export default IconWithTooltip;