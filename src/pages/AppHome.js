import React from "react";
import * as IoIcons from "react-icons/io";
import "arch-editor/dist/arch-editor.css";
import Blocktractform from "../components/Blocktractform";
import ButtonTwo from "@mui/material/Button";
import "../App.css";

import { Link } from "react-router-dom";

var gisText =
  "Please use this map to sort through the different diCommunities in Colorado. You can upload data via the 'Add Well Data' dropdown arrow at the top right of the map.  Make sure to have a ZIP file otherwise you will get an error";

var header = "Disproportionately Impacted Community Analysis";

var downloadDICdata =
  "https://sandstonegroup.us/wp-content/uploads/2021/01/Access-to-Vehicles.csv";

var downloadUScensusData =
  "https://sandstonegroup.us/wp-content/uploads/2021/01/Access-to-Vehicles.csv";

const AppHome = () => {
  return (
    <div className="background-color">
      <h1 className="master-title">{header}</h1>
      <div className="row">
        <h4 className="master-title-sub">{gisText}</h4>
        <div>
          <iframe
            title="GIS"
            width="900"
            height="750"
            src="https://sandstone.maps.arcgis.com/apps/webappviewer/index.html?id=a8c48643ca1946549750cf38d1d2d66c"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
        <div>
          <Blocktractform />
          <ButtonTwo
            variant="contained"
            color="success"
            size="large"
            type="reset"
            LinkComponent={Link}
            to="/dashboard"
            startIcon={<IoIcons.IoIosOptions />}
          >
            Navigate to Dashboard
          </ButtonTwo>
        </div>
      </div>
    </div>
  );
};

export default AppHome;
