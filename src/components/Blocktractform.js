import React from "react";
import "../components/Blocktractform.css";
import data from "../mockData.json";
import { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import { Button } from "react-bootstrap";
import * as IoIcons from "react-icons/io";
import ButtonTwo from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Blocktractform = () => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

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

  let idNumber = 1;

  const handleAddFormSubmit = (event) => {
    idNumber = nanoid();
    event.preventDefault();
    const newData = {
      id: idNumber,
      blockGroup: addFormData.blockGroup,
      tract: addFormData.tract,
    };

    const newDatas = [...didata, newData];
    setDidata(newDatas);
  };

  const columnsBetter = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "blockGroup", headerName: "Block Group", width: 150 },
    { field: "tract", headerName: "Tract", width: 150 },
  ];

  const rowsBetter = didata.map((rowBetter) => ({
    id: rowBetter.id,
    blockGroup: rowBetter.blockGroup,
    tract: rowBetter.tract,
  }));

  return (
    <div className="app-container">
      <div className="padding-better">
        Add your DIC Data to the table then export your rows below{" "}
      </div>
      <form className="form-style" onSubmit={handleAddFormSubmit}>
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="outlined-basic"
            label="Enter Block Group"
            variant="outlined"
            name="blockGroup"
            onChange={handleAddFormChange}
          />
          <TextField
            id="outlined-basic"
            label="Enter Tract #"
            variant="outlined"
            name="tract"
            onChange={handleAddFormChange}
          />
        </ThemeProvider>
        <ButtonTwo
          type="submit"
          variant="outlined"
          startIcon={<IoIcons.IoIosAddCircle />}
        >
          Add to List
        </ButtonTwo>
        <ButtonTwo
          variant="outlined"
          type="reset"
          endIcon={<IoIcons.IoIosCloseCircle />}
        >
          Reset
        </ButtonTwo>
      </form>
      <div className="center">
        <div style={{ height: 500, width: "100%", color: "white" }}>
          <DataGrid
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "white",
              color: "white",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.dark",
              },
            }}
            rows={rowsBetter}
            columns={columnsBetter}
            pageSize={20}
            rowsPerPageOptions={[20]}
            checkboxSelection
            disableSelectionOnClick
            components={{ Toolbar: GridToolbar }}
            pagination
          />
        </div>
      </div>
    </div>
  );
};

export default Blocktractform;
