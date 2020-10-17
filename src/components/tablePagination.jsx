import React, { useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "name", headerName: "Product Name", width: 130 },
  { field: "price", headerName: "Price", width: 130 },
  {
    field: "count",
    headerName: "Number of stock",
    type: "number",
    width: 180,
  },
  {
    field: "img",
    headerName: "Preview image",
    sortable: false,
    width: 160,
  },
];

const rows = [
  {
    img: null,
    catagory: ["wallet", "redwallet"],
    id: "5f88816f2ae45e001b85d1d3",
    name: "test2",
    price: 1,
    count: 5,
    createdAt: "2020-10-15T17:05:51.369Z",
    updatedAt: "2020-10-15T17:05:51.369Z",
    __v: 0,
  },
  {
    img: null,
    catagory: ["wallet", "redwallet"],
    id: "5f8880d82ae45e001b85d1d2",
    name: "test2",
    price: 1,
    count: 5,
    createdAt: "2020-10-15T17:03:20.583Z",
    updatedAt: "2020-10-15T17:03:20.583Z",
    __v: 0,
  },
  {
    img: null,
    catagory: ["wallet", "redwallet"],
    id: "5f887e352ae45e001b85d1d1",
    name: "test",
    price: 1,
    count: 5,
    createdAt: "2020-10-15T16:52:05.194Z",
    updatedAt: "2020-10-15T16:52:05.194Z",
    __v: 0,
  },
];

export default function DataTable() {
  const [rowlist, setrowList] = useState([]);
  const [selected, setSelected] = useState([]);
  const handleRowSelected = (e) => {
    if (e.isSelected) {
      setSelected((prev) => [...prev.concat(e.data.id)]);
    } else {
      var array = [...selected];
      var index = array.indexOf(e.data.id);
      if (index !== -1) {
        array.splice(index, 1);
        setSelected(array);
      }
    }
  };
  const  handleRowSelected2 = (e) => {
    var array = [];
    for(const x in e.rows){
        array.push(e.rows[x].id)
    }
    setSelected(array)
  };
  useEffect(() => {
    async function GetData() {
      try {
        const res = await axios.get(`http://localhost:9000/stock?start=0`);
        console.log(res.data.data);
        setrowList(res.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    GetData();
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        onSelectionChange={handleRowSelected2}
        onRowSelected={handleRowSelected}
      />
      {/* {rowlist} */}
      {JSON.stringify(selected)}

    </div>
  );
}
