import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function DevCalendar() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Enhanced Mapping Functionality</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Add with one click a custom 2,000ft buffer to each of your propsed
              leases. Create custom masks to build specific regulatory
              requirements for each of your properities
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Open API Access</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              100% Open API access to all Colorado DIC data data including US
              Census data
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Projects, Teams, and Roles</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Assign roles to different team members, allow them different
              functions. Meeting come up? Save your progress and come back
              later.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  );
}
