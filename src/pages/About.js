import React from "react";
import Logo from "../components/images/logo_h.png";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const About = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  var website = "https://sandstone-group.com/";
  var aboutDi =
    "diCommunity was built as the first open-source regulatory software offering desgined to help Colorado Oil and Gas Operators manage the implication of SB 181 on new permitted wells.  Since the passage of SB 181 in 2019, our team has been involved in working with both state officals and industry stakeholders to ensure our application meets Colorado most stringent permitting guidelines. ";
  return (
    <div className="background-color">
      <div className="grid-display">
        <img src={Logo} />
      </div>
      <h4 className="about-subtitle">{aboutDi}</h4>
      <h5 className="about-subtitle">A Product by Sandstone Group</h5>
      <ThemeProvider theme={darkTheme}>
        <IconButton onClick={() => window.open(website, "_blank")}>
          <HomeIcon />
        </IconButton>
      </ThemeProvider>
    </div>
  );
};

export default About;
