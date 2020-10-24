import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import MaterialTable from "material-table";
import axios from "axios";
import tableIcons from "../components/tableIcon";
import Alert from "@material-ui/lab/Alert";
import Edit from "@material-ui/icons/Edit";
import DeleteOutline from "@material-ui/icons/DeleteOutline";

export default function EditStock(props) {
  const [data, setData] = useState([]);
  const [permission, setPermission] = useState(true);
  useEffect(() => {
    // setData(false);
    // setColumns([])
    async function GetData() {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/stock/admin/stock?start=0`
        );
        console.log(res.data.data);
        setData(res.data.data);
      } catch (error) {
        setPermission(false);
      }
    }

    GetData();
  }, []);
  const [columns, setColumns] = useState([
    { title: "Product Name", field: "name" },
    { title: "Id", field: "id" },
    { title: "Price", field: "price", type: "numeric" },
    {
      title: "Number of product",
      field: "count",
      type: "numeric",
    },
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
        {!permission && (
          <>
            <Box marginTop="4em" width="50%" minWidth="300px">
              <Alert severity="error">You dont't have permission</Alert>
            </Box>
          </>
        )}
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
                icons={tableIcons}
                onClick={(e) => console.log(e)}
                options={{
                  search: false,
                  // selection: true,
                  minBodyHeight: "64vh",
                  paginationType: "stepped",
                  pageSizeOptions: [15],
                  showTitle: false,
                  pageSize: 15,
                }}
                actions={[
                  (rowData) => ({
                    // <-- ***NOW A FUNCTION***
                    icon: () => <Edit />,
                    tooltip: "edit",
                    onClick: (event, rowData) => {
                      console.log(`/editstock/${rowData.id}`);
                      props.history.push(`/editstock/${rowData.id}`)}
                  }),
                  (rowData) => ({
                    // <-- ***NOW A FUNCTION***
                    icon: () => <DeleteOutline />,
                    tooltip: "delete",
                    onClick: (event, rowData) => {console.log(rowData);}
                  }),
                ]}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
