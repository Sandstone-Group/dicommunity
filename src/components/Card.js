import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MichaelTanner from "./images/michael.jpg";
import WebAssetTwoToneIcon from "@mui/icons-material/WebAssetTwoTone";
import Tooltip from "@mui/material/Tooltip";

var michaelTannerLinkedInUrl =
  "https://www.linkedin.com/in/michaeltannersandstone";

const michaelTannerShortBio =
  "Michael Tanner manages all aspects of development of diCommunity. He is also the Project Lead of OpenOil, which is dedicated to decentralizing oil and gas production data by making public well data free. Visit openoil.io to see the status of the project ";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardBetter() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title="Michael Tanner" subheader="Project Lead" />
        <CardMedia
          component="img"
          height="194"
          image={MichaelTanner}
          alt="Michael Tanner"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {michaelTannerShortBio}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Tooltip title="LinkedIn">
            <IconButton
              aria-label="share"
              onClick={() => window.open(michaelTannerLinkedInUrl, "_blank")}
            >
              <ShareIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Visit openoil.io">
            <IconButton
              aria-label="share"
              onClick={() => window.open(michaelTannerLinkedInUrl, "_blank")}
            >
              <WebAssetTwoToneIcon />
            </IconButton>
          </Tooltip>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>
              Graduate of Colorado School of Mines with a B.S in Petroluem
              Engineering, a B.S in Economics and a M.S in Mineral and Energy
              Economics
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </ThemeProvider>
  );
}
