import React from "react";

const EditableRow = () => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placholder="Enter a #"
          name="blockGroup"
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placholder="Enter a #"
          name="tract"
        ></input>
      </td>
    </tr>
  );
};

export default EditableRow;
