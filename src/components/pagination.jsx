import React, { Fragment, useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import {Box} from "@material-ui/core"
export default function Paginations() {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };
  return (
    <>
    
      
    </>
  );
}
