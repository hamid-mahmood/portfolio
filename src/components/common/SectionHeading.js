import { Box, Typography } from "@mui/material";
import React from "react";
import Decorator from "./Decorator";

const SectionHeading = ({ label, heading, alignCenter, description }) => {
  return (
    <Box className="section-heading-container">
      <Decorator
        label={label}
        withIcon={false}
        styles={alignCenter ? { width: "100px", margin: "10px auto" } : null}
      />
      <Typography
        variant="h4"
        align={alignCenter ? "center" : "left"}
        className="section-heading"
      >
        {heading}
      </Typography>
      <div
        className="divider"
        style={alignCenter ? { margin: "10px auto" } : null}
      ></div>
      <Typography
        variant="body1"
        component="h6"
        align={alignCenter ? "center" : "left"}
        className="section-heading"
      >
        {description}
      </Typography>
    </Box>
  );
};

export default SectionHeading;
