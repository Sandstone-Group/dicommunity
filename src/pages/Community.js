import "../App.css";
import { useState } from "react";

import React from "react";

const Community = () => {
  return (
    <div className="background-color">
      <div className="header-padding">
        <h1>Join our Development Community</h1>
      </div>
      <div className="center">
        <iframe
          src="https://discord.com/widget?id=934098922794786916&theme=dark"
          width="500"
          height="650"
          allowtransparency="true"
          frameborder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  );
};

export default Community;
