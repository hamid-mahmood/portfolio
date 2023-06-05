import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { downloadResume } from "../../utils/helpers";

export default function ButtonAppBar({ navLinksList, handleToggle }) {
  const handleNavItemClick = (navItemId) => {
    const element = document.getElementById(navItemId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  const onDownloadResume = () => {
    downloadResume();
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="navbar-root">
      <AppBar position="fixed" className="navbar">
        <Toolbar className="toolbar">
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            {"<HELLO WORLD/>"}
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Box>
              <Button
                color="inherit"
                className="navLink"
                onClick={onDownloadResume}
              >
                Resume
              </Button>
              {navLinksList.map((navLink, index) => (
                <Button
                  key={index}
                  color="inherit"
                  className="navLink"
                  onClick={() => handleNavItemClick(navLink.id)}
                >
                  {navLink.label}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
