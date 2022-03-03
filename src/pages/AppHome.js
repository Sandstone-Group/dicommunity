import React from "react";

const AppHome = () => {
  return (
    <>
      <div className="home">
        <iframe
          title="GIS"
          width="1200"
          height="800"
          src="https://sandstone.maps.arcgis.com/apps/webappviewer/index.html?id=a8c48643ca1946549750cf38d1d2d66c"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
        <iframe
          title="DIC Demo Dashboard"
          width="1200"
          height="715"
          src="https://app.powerbi.com/view?r=eyJrIjoiYTU4MmY3MWItZmQ4Zi00NTRiLWI5ZjktZjI5YWI1MGVhYjQ4IiwidCI6IjA1MTM5NTUzLWVlOTAtNDdhZi1iNmY3LTU0ZDk2OTc4ZTQ5ZSJ9&pageName=ReportSection"
          frameborder="0"
          allowFullScreen="true"
        ></iframe>
      </div>
    </>
  );
};

export default AppHome;
