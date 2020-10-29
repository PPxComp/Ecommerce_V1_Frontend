import React, { useState, useEffect } from "react";
import CardComponent from "../components/card";
import { Box, Container } from "@material-ui/core";
import axios from "axios";
import Paginations from "../components/pagination";
import Filter from "../components/filter";

export default function Stock(props) {
  const [allData, setAllData] = useState([]);
  const [count, setCount] = useState(0);
  const [defaultpage, setDefaultpage] = useState(1);
  const [orderBy, setOrderBy] = useState("");
  const [catagory, setCatagory] = useState([]);
  const query = new URLSearchParams(props.location.search);

  const itemPerPage = 12;
  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    setCatagory(query.get("catagory") ? query.get("catagory") : ["All"]);
    setOrderBy(query.get("orderBy") ? query.get("orderBy") : "currently");
  }, [props.location.search]);

  useEffect(() => {
    const query = new URLSearchParams(props.location.search);
    setDefaultpage(query.get("page") ? parseInt(query.get("page")) : 1);
    async function GetData() {
      let path = "";
      if(query.get("catagory") !== "All"){
        path = query.get("catagory")
        ? `&catagory=${query.get("catagory")}`
        : "";
      }
      
      try {
        let p = query.get("page") ? query.get("page") - 1 : 0;
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/stock?start=${p * 12}${path}`
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
      <Container>
        <Box align="center" marginTop="2em" marginBottom="2em">
          <h1>Stock</h1>
        </Box>
        <Box
          width="100%"
          borderTop="2px solid lightgrey"
          paddingTop="2em"
          display="flex"
          justifyContent="flex-end"
        >
          <Box minWidth="sm">
            <Filter catagory={catagory} start={(defaultpage - 1) * 12} />
          </Box>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {orderBy === "currently" &&
            allData.map((data, index) => (
              <Box
                width="20em"
                key={index}
                display="flex"
                justifyContent="center"
              >
                <CardComponent {...data}></CardComponent>
              </Box>
            ))}
          {orderBy === "hightolow" &&
            allData
              .sort((a, b) => (a.price < b.price ? 1 : -1))
              .map((data, index) => (
                <Box
                  width="20em"
                  key={index}
                  display="flex"
                  justifyContent="center"
                >
                  <CardComponent {...data}></CardComponent>
                </Box>
              ))}
          {orderBy === "lowtohigh" &&
            allData
              .sort((a, b) => (a.price > b.price ? 1 : -1))
              .map((data, index) => (
                <Box
                  width="20em"
                  key={data._id}
                  display="flex"
                  justifyContent="center"
                >
                  <CardComponent {...data}></CardComponent>
                </Box>
              ))}
        </Box>
        <Box
          width="100%"
          display="flex"
          justifyContent="center"
          marginTop="2em"
        >
          <Paginations count={count} defaultpage={defaultpage} query={query}></Paginations>
        </Box>
      </Container>
    </div>
  );
}
