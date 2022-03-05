import React from "react";

const Readonlyrow = ({ didataCurrent }) => {
  return (
    <tr>
      <td>{didataCurrent.blockGroup}</td>
      <td>{didataCurrent.tract}</td>
    </tr>
  );
};

export default Readonlyrow;
