import React from "react";
import CardComponent from "../components/card";
import {  Box ,Container} from "@material-ui/core";
export default function stock() {
  //?start=0
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
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
        <CardComponent></CardComponent>
      </Box>
      </Container>
      
    </div>
  );
}
