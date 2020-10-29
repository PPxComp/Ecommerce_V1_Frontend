import React from "react";
import { Pagination } from "@material-ui/lab";
import { withRouter } from "react-router-dom";

const Paginations =(props) => {
  
  const catagory = props.query.get("catagory") ? `&catagory=${props.query.get("catagory")}`:"";
  const orderBy = props.query.get("orderBy") ? `&catagory=${props.query.get("orderBy")}` : "";

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
                props.history.push(`/stock?page=${value}${catagory}${orderBy}`)
            }}
           
          />
      
    </>
  );
}
export default withRouter(Paginations)