import { Box, Container, Grid } from "@mui/material";
import React from "react";
import SectionHeading from "../common/SectionHeading";
import Image from "../../assets/About.jpg";
import CardMedia from "../common/CardMedia";
import OpenInBrowserRoundedIcon from "@mui/icons-material/OpenInBrowserRounded";
import MobileFriendlyRoundedIcon from "@mui/icons-material/MobileFriendlyRounded";
import ScrollAnimation from "react-animate-on-scroll";

const aboutMeDesc = `I completed my Bachelors in Computer Science from FAST-NUCES, karachi.
 An enthusiastic programmer, eager to use my skills to contribute to society by solving daily life problems
  using emerging technologies 
 and to convert every opportunity into achievement in the area of application development.`;

const cardMediaData = [
  {
    title: "Web Development",
    description: `I am a dedicated and experienced web developer with a passion for creating stunning and functional websites. 
    I take great pride in crafting user-friendly and visually appealing websites that not only meet the needs of my clients 
    but also leave a lasting impression on their visitors. Whether it's building responsive layouts, optimizing site performance,
     or implementing custom features, I strive to deliver high-quality solutions that exceed expectations.`,
    icon: <OpenInBrowserRoundedIcon />,
  },
  {
    title: "Mobile Apps",
    description: `As a skilled mobile developer, 
    I am passionate about creating innovative and intuitive mobile applications that enhance user experiences. `,
    icon: <MobileFriendlyRoundedIcon />,
  },
];

const AboutUs = () => {
  return (
    <Box className="section" id="About">
      <ScrollAnimation animateIn="fadeIn">
        <Container>
          <Grid container spacing={2}>
            {/* sm = 960 */}
            <Grid item xs={5} sm={5}>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <img src={Image} alt="about us" className="responsive-img" />
              </Box>
            </Grid>
            <Grid item xs={12} sm={7}>
              <SectionHeading
                label="About Me"
                heading="I'm Hamid Mahmood"
                description={aboutMeDesc}
              />
              <br />
              <Box>
                {cardMediaData.map((item, index) => (
                  <CardMedia
                    key={index}
                    label={item.title}
                    desc={item.description}
                    icon={item.icon}
                  />
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
};

export default AboutUs;
