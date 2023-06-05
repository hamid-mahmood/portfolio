import { Avatar, Grid, Typography } from "@mui/material";
import React from "react";

const CardMedia = ({ label, desc, icon }) => {
  return (
    <Grid container className="media-container">
      <Grid item xs={3} className="avatar-container">
        <Avatar className="avatar">{icon}</Avatar>
      </Grid>
      <Grid item xs={9} className="media-text">
        <Typography variant="body1" component="h6" gutterBottom>
          {label}
        </Typography>
        <Typography variant="caption" gutterBottom>
          {desc}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CardMedia;
