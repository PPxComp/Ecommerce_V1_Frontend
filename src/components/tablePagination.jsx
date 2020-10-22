import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import MaterialTable from "material-table";
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
  const [columns, setColumns] = useState([
    { title: "Product Name", field: "name" },
    { title: "Price", field: "price", type: "numeric" },
    {
      title: "Number of product",
      field: "count",
      type: "numeric",
    },
  ]);

  const [data, setData] = useState([
    {
      description: "xxx",
      catagory: ["wallet", "redwallet"],
      id: "5f887e352ae45e001b85d1d1",
      name: "test",
      price: 1,
      count: 5,
      createdAt: "2020-10-15T16:52:05.194Z",
      updatedAt: "2020-10-15T16:52:05.194Z",
      __v: 0,
    },
    {
      description: "xxx",
      catagory: ["wallet", "redwallet"],
      id: "5f887e352ae45e001b85d1d1",
      name: "test",
      price: 1,
      count: 5,
      createdAt: "2020-10-15T16:52:05.194Z",
      updatedAt: "2020-10-15T16:52:05.194Z",
      __v: 0,
    },{
      description: "xxx",
      catagory: ["wallet", "redwallet"],
      id: "5f887e352ae45e001b85d1d1",
      name: "test",
      price: 1,
      count: 5,
      createdAt: "2020-10-15T16:52:05.194Z",
      updatedAt: "2020-10-15T16:52:05.194Z",
      __v: 0,
    },{
      description: "xxx",
      catagory: ["wallet", "redwallet"],
      id: "5f887e352ae45e001b85d1d1",
      name: "test",
      price: 1,
      count: 5,
      createdAt: "2020-10-15T16:52:05.194Z",
      updatedAt: "2020-10-15T16:52:05.194Z",
      __v: 0,
    },{
      description: "xxx",
      catagory: ["wallet", "redwallet"],
      id: "5f887e352ae45e001b85d1d1",
      name: "test",
      price: 1,
      count: 5,
      createdAt: "2020-10-15T16:52:05.194Z",
      updatedAt: "2020-10-15T16:52:05.194Z",
      __v: 0,
    },{
      description: "xxx",
      catagory: ["wallet", "redwallet"],
      id: "5f887e352ae45e001b85d1d1",
      name: "test",
      price: 1,
      count: 5,
      createdAt: "2020-10-15T16:52:05.194Z",
      updatedAt: "2020-10-15T16:52:05.194Z",
      __v: 0,
    },{
      description: "xxx",
      catagory: ["wallet", "redwallet"],
      id: "5f887e352ae45e001b85d1d1",
      name: "test",
      price: 1,
      count: 5,
      createdAt: "2020-10-15T16:52:05.194Z",
      updatedAt: "2020-10-15T16:52:05.194Z",
      __v: 0,
    },
  ]);

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
  const handleRowSelected2 = (e) => {
    var array = [];
    for (const x in e.rows) {
      array.push(e.rows[x].id);
    }
    setSelected(array);
  };
  useEffect(() => {
    async function GetData() {
      // try {
      //   const res = await axios.get(`${process.env.REACT_APP_API_URL}/stock/admin/stock/start=0`);
      //   console.log(res.data.data);
      //   setrowList(res.data.data);
      // } catch (error) {
      //   console.log(error);
      // }
    }
    GetData();
  }, []);

  return (
    <Box height="100%" width="80%"  >
      {/* <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        
        checkboxSelection
        onSelectionChange={handleRowSelected2}
        onRowSelected={handleRowSelected}
      /> */}
      {/* {rowlist} */}
      <MaterialTable
        title="Editable Stock"
        columns={columns}
        data={data}
        search={false}
        options={{
          search: false,
          selection:true,
          minBodyHeight:"64vh",
          paginationType:"stepped",
          pageSizeOptions:[15],
          pageSize:15
        }}
        
        minBodyHeigh="100%"
        height="100%"
        editable={{
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                resolve();
              }, 1000);
            }),
        }}
      />
    </Box>
  );
}
