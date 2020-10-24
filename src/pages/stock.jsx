import React, { useState, useEffect } from "react";
import CardComponent from "../components/card";
import { Box, Container } from "@material-ui/core";
import axios from "axios";
import Paginations from "../components/pagination"



export default function Stock(props) {
  const [allData, setAllData] = useState([]);
  const [count, setCount] = useState(0);
  const [defaultpage, setDefaultpage] = useState(1);
  const itemPerPage = 12;
  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    setDefaultpage(query.get("page") ? parseInt(query.get("page")) : 1);
    async function GetData() {
      try {
        let p = query.get("page") ? query.get("page") - 1 : 0;
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/stock?start=${p * 12}`
        );
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
          <Paginations count={count} defaultpage={defaultpage}></Paginations>
          
        </Box>
      </Container>
    </div>
  );
}
