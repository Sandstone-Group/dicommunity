import React from "react";
import "../components/Blocktractform.css";
import data from "../mockData.json";
import { useState } from "react";
import { nanoid } from "nanoid";
import Readonlyrow from "./Readonlyrow";

const Blocktractform = () => {
  const [didata, setDidata] = useState(data);
  const [addFormData, setAddFormData] = useState({
    blockGroup: "",
    tract: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();
    const newData = {
      id: nanoid(),
      blockGroup: addFormData.blockGroup,
      tract: addFormData.tract,
    };

    const newDatas = [...didata, newData];
    setDidata(newDatas);
  };

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Block Group</th>
            <th>Tract</th>
          </tr>
        </thead>
        <tbody>
          {didata.map((didataCurrent) => (
            <Readonlyrow didataCurrent={didataCurrent} />
          ))}
        </tbody>
      </table>
      <h2 className="title">Add Your Block Group and Tract Number Here</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="blockGroup"
          required="required"
          placeholder="Enter Block Group #"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="tract"
          required="required"
          placeholder="Enter Tract #"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add To List</button>
      </form>
    </div>
  );
};

export default Blocktractform;
