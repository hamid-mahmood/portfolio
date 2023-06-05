import React from "react";
import { Box, Typography } from "@mui/material";

const Decorator = ({ label, withIcon, icon, styles }) => {
  return (
    <Box className="decorator" style={styles}>
      <Typography variant="subtitle1" className="decorator-text">
        {label}
      </Typography>
      {withIcon ? (
        <Box component="span" className="arrow">
          {icon}
        </Box>
      ) : null}
    </Box>
  );
};

export default Decorator;
