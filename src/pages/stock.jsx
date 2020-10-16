import React, { useState, useEffect } from "react";
import CardComponent from "../components/card";
import { Box, Container } from "@material-ui/core";
import axios from "axios";
import { Pagination } from "@material-ui/lab";
import {useHistory} from "react-router-dom"
export default function Stock(props) {
  const history = useHistory()
  const [allData, setAllData] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const itemPerPage = 2;
  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    setPage(query.get('page') ? (query.get('page')-1 ): 0 )
    async function GetData() {
      try {
        let p = query.get('page') ? (query.get('page')-1 ): 0 
        const res = await axios.get(`http://localhost:9000/stock?start=${p*10}`);
        setAllData(res.data.data);
        setCount(Math.ceil(res.data.count / itemPerPage));
      } catch (error) {
        console.log(error);
      }
    }
    GetData();

  }, [props.location.search]);

  return (
    <div>
      stock
      <Container>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {allData.map((data, index) => (
            <CardComponent {...data} key={index}></CardComponent>
          ))}
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          marginTop="2em"
        >
          <Pagination
            count={count}
            siblingCount={1}
            // defaultPage={parseInt(defaultpage())}
            boundaryCount={1}
            color="secondary"
            shape="rounded"
            autoComplete="true"
            onChange={(event,value) => {
                history.push(`/stock?page=${value}`)
            }}
           
          />
        </Box>
        {page}
      </Container>
    </div>
  );
}


