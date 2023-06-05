import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

const Footer = () => {
  const date = new Date();
  const handleUpBtnClick = () => {
    const element = document.getElementById("Header");
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <Box className="footer-container">
      <IconButton className="up-btn" onClick={handleUpBtnClick}>
        <ArrowUpwardRoundedIcon />
      </IconButton>
      <Typography variant="body1" component="h4" align="center" color="inherit">
        Developed and designed by Hamid Mahmood, All rights Reserved &copy;{" "}
        {date.getFullYear()}
      </Typography>
    </Box>
  );
};

export default Footer;
