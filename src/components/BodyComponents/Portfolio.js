import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import SectionHeading from "../common/SectionHeading";
import tabiyat from "../../assets/tabiyat.jpg";
import backOfficeImage from "../../assets/back-office.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const portfolioData = [
  {
    url: tabiyat,
    title: "Online Pharmacy",
    link: "https://tabiyat.pk/",
  },
  {
    url: backOfficeImage,
    title: "Godaam",
    link: "",
    description: "Web app used for QC at pharmacy warehouse",
  },
  {
    url: backOfficeImage,
    title: "Order Management System",
    link: "",
    description: "Web app used for Order Management",
  },
];

const Portfolio = () => {
  return (
    <Box className="dark-section" id="Portfolio">
      <ScrollAnimation animateIn="fadeIn">
        <Grid
          container
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={8}>
            <SectionHeading
              label="Portfolio"
              heading="Let's see my work"
              alignCenter={true}
            />
          </Grid>
        </Grid>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            {portfolioData.map((item, i) => (
              <Grid item xs={6} sm={6} lg={4} key={i}>
                <Box className="image-container">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="responsive-image"
                  />
                  <Box className="image-overlay">
                    <Typography className="title">{item.title}</Typography>
                    {item.link ? (
                      <a href={item.link} target="_blank">
                        <Button variant="text" className="action-btn">
                          Visit
                        </Button>
                      </a>
                    ) : (
                      <Typography>{item.description}</Typography>
                    )}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
};

export default Portfolio;
