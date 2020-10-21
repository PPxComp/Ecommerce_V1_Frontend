import React, { useState } from "react";
import TablePagination from "../components/tablePagination";
import { Box } from "@material-ui/core";
import MaterialTable from "material-table";

export default function EditStock() {
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
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
    { name: "test1", price: 30, count: 5 },
  ]);

  return (
    <>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        marginTop="5em"
        alignItems="center"
        boxSizing="border-box"
        maxWidth="sm"
        
      >
        <h1>Edit Stock</h1>
        <Box
          width="90%"
          height="80%"
          display="flex"
          flexDirection="row"
          justifyContent="center"
          boxSizing="border-box"
          marginTop="5em"
        >
          <Box
            width="95%"
            height="100%"
            borderRadius="20px"
            // boxShadow="4px 4px 9px -2px rgba(61,61,61,0.43)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            boxSizing="border-box"
            maxWidth="sm"
          >
            <Box width="100%" boxSizing="border-box" maxWidth="sm">
              <MaterialTable
                columns={columns}
                data={data}
                search={false}
                options={{
                  search: false,
                  selection: true,
                  minBodyHeight: "64vh",
                  paginationType: "stepped",
                  pageSizeOptions: [15],
                  showTitle:false,
                  pageSize: 15,
                }}
                minBodyHeigh="100%"
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
          </Box>
        </Box>
      </Box>
    </>
  );
}
