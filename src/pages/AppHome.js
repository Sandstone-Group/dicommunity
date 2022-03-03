import React from "react";
import { Button } from "react-bootstrap";

var gisText =
  "Please use this GIS table to sort through the different diCommunities in Colorado. You can upload data via the 'Add Well Data' tab at the top left.  Make sure to have a ZIP file or you will get an error";

var downloadDICdata =
  "https://sandstonegroup.us/wp-content/uploads/2021/01/Access-to-Vehicles.csv";

var downloadUScensusData =
  "https://sandstonegroup.us/wp-content/uploads/2021/01/Access-to-Vehicles.csv";

const AppHome = () => {
  return (
    <>
      <div class="some-page-wrapper">
        <div class="row">
          <div class="column">
            <div class="blue-column">
              <iframe
                title="GIS"
                width="1200"
                height="800"
                src="https://sandstone.maps.arcgis.com/apps/webappviewer/index.html?id=a8c48643ca1946549750cf38d1d2d66c"
                frameborder="0"
                allowFullScreen="true"
              ></iframe>
            </div>
          </div>
          <div class="column-two">
            <div class="green-column">{gisText}</div>
          </div>
        </div>
      </div>
      <div className="button">
        <Button
          variant="dark"
          size="lg"
          onSubmit=""
          onClick={() => window.open(downloadDICdata, "_blank")}
        >
          Dowload
        </Button>
        <Button
          variant="dark"
          size="lg"
          onSubmit=""
          onClick={() => window.open(downloadUScensusData, "_blank")}
        >
          Download
        </Button>
      </div>
      <div className="padding-left">
        <h2 className="home-title">Keep Track of your BLK GROUP and TRACT</h2>
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon">
              <i className="fas fa-pencil-alt prefix"></i>
            </span>
          </div>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            label="Test"
            rows="5"
          ></textarea>
          <iframe
            title="DIC Demo Dashboard"
            width="1200"
            height="715"
            src="https://app.powerbi.com/view?r=eyJrIjoiYTU4MmY3MWItZmQ4Zi00NTRiLWI5ZjktZjI5YWI1MGVhYjQ4IiwidCI6IjA1MTM5NTUzLWVlOTAtNDdhZi1iNmY3LTU0ZDk2OTc4ZTQ5ZSJ9&pageName=ReportSection"
            frameborder="0"
            allowFullScreen="true"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default AppHome;
