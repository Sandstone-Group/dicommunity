import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const title = "DIC Data Dashboard";

  const subTitle =
    "Use the exported table that contains your block group/tract numbers and search for them in this dashboard";

  return (
    <div className="background-color">
      <h1 className="padding-top-better">{title}</h1>
      <h4 className="padding-top-better-better">{subTitle}</h4>
      <div className="padding-top">
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
  );
};

export default Dashboard;
