import React from "react";
import "../components/Blocktractform.css";
import data from "../mockData.json";
import { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import { Button } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

const Blocktractform = () => {
  const columns = ["Block Group", "Tract"];
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
      <div className="center">
        <table>
          <tbody>
            {didata.map((didataCurrent) => (
              <tr>
                <td>{didataCurrent.blockGroup}</td>
                <td>{didataCurrent.tract}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form className="form-style" onSubmit={handleAddFormSubmit}>
        <input
          type="float"
          name="blockGroup"
          required="required"
          placeholder="Enter Block Group #"
          onChange={handleAddFormChange}
        />
        <input
          type="float"
          name="tract"
          required="required"
          placeholder="Enter Tract #"
          onChange={handleAddFormChange}
        />
        <div className="button">
          <Button type="submit" variant="light">
            <IoIcons.IoIosAddCircle size={45} className="pr-1" />
            Add To List
          </Button>
          <Button type="reset" variant="light">
            <IoIcons.IoIosClose size={45} className="pr-1" />
            Reset
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Blocktractform;
