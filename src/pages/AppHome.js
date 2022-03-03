import React from "react";
import { MDBInput } from "mdbreact";

const AppHome = () => {
  return (
    <>
      <div>
        <iframe
          title="GIS"
          width="1200"
          height="800"
          src="https://sandstone.maps.arcgis.com/apps/webappviewer/index.html?id=a8c48643ca1946549750cf38d1d2d66c"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
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
