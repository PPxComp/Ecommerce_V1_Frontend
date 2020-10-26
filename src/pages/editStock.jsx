import React, { useState, useEffect } from "react";
import { Box } from "@material-ui/core";
import MaterialTable from "material-table";
import axios from "axios";
import tableIcons from "../components/tableIcon";
import Alert from "@material-ui/lab/Alert";
import Edit from "@material-ui/icons/Edit";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import ConfirmModal from "../components/confirmModal";

export default function EditStock(props) {
  const [id, setId] = useState("");
  const [needRender, setneedRender] = useState(true)
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [permission, setPermission] = useState(true);
  useEffect(() => {
    async function GetData() {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/stock/admin/stock?start=0`
        );
        setData(res.data.data);
      } catch (error) {
        setPermission(false);
      }
    }
    if(needRender){GetData()};
    return setneedRender(false)
  }, [needRender]);
  const columns = [
    { title: "Product Name", field: "name" },
    { title: "Id", field: "id" },
    { title: "Price", field: "price", type: "numeric" },
    {
      title: "Number of product",
      field: "count",
      type: "numeric",
    },
  ];

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
                    icon: () => <Edit />,
                    tooltip: "edit",
                    onClick: (event, rowData) => {
                      console.log(`/editstock/${rowData.id}`);
                      props.history.push(`/editstock/${rowData.id}`);
                    },
                  }),
                  (rowData) => ({
                    icon: () => <DeleteOutline />,
                    tooltip: "delete",
                    onClick: (event, rowData) => {
                      console.log(rowData);
                      setId(rowData.id);
                      setOpen(true);
                    },
                  }),
                ]}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <ConfirmModal setOpen={setOpen} open={open} id={id} setneed={setneedRender} />
    </>
  );
}
