import React from "react";

const AppHome = () => {
  return (
    <div className="home">
      <iframe
        title="DIC Demo Dashboard"
        width="900"
        height="500"
        src="https://app.powerbi.com/view?r=eyJrIjoiYTU4MmY3MWItZmQ4Zi00NTRiLWI5ZjktZjI5YWI1MGVhYjQ4IiwidCI6IjA1MTM5NTUzLWVlOTAtNDdhZi1iNmY3LTU0ZDk2OTc4ZTQ5ZSJ9&pageName=ReportSection"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
};

export default AppHome;
