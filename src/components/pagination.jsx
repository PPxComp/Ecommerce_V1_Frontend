import React, {  useEffect } from "react";
import { Pagination } from "@material-ui/lab";
import { withRouter } from "react-router-dom";

const Paginations =(props) => {
    const [page, setPage] = React.useState(1);
  return (
    <>
    <Pagination
            count={props.count}
            siblingCount={1}
            page={props.defaultpage ? props.defaultpage : 1 }
            boundaryCount={1}
            color="secondary"
            shape="rounded"
            onChange={(event,value) => {
                props.history.push(`/stock?page=${value}`)
            }}
           
          />
      
    </>
  );
}
export default withRouter(Paginations)