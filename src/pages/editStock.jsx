import React from "react";
import TablePagination from "../components/tablePagination";
import { Box } from "@material-ui/core";

export default function editStock() {
  return (
    <>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        height="90vh"
        alignItems="center"
      >
        <Box
          maxWidth="sm"
          width="1100px"
          height="80%"
          display="flex"
          flexDirection="row"
          justifyContent="center"
        >
          <Box
            width="95%"
            border="2px solid lightgrey"
            height="100%"
            borderRadius="20px"
            boxShadow="4px 4px 9px -2px rgba(61,61,61,0.43)"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
          >
              <TablePagination></TablePagination>
          </Box>
        </Box>
      </Box>
    </>
  );
}
