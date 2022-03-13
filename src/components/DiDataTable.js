import * as React from "react";
import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarExport,
} from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import * as IoIcons from "react-icons/io";
import ButtonTwo from "@mui/material/Button";
import { nanoid } from "nanoid";
import data from "../mockData.json";
import { useState, Fragment } from "react";
import Stack from "@mui/material/Stack";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function DataTable() {
  const columnBetter = ["Block Group", "Tract"];
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

  const [pageSize, setPageSize] = React.useState(5);

  return (
    <div style={{ color: "white", height: 400, width: 750 }}>
      <DataGrid
        sx={{
          color: "white",
          boxShadow: 2,
          border: 2,
          borderColor: "primary.light",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.light",
          },
        }}
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        components={{ Toolbar: GridToolbar }}
        checkboxSelection
        pagination
        rowsPerPageOptions={[5, 10, 20]}
      />
    </div>
  );
}
