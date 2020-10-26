import React, { useState, useEffect } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  NativeSelect,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";

import { useDispatch } from "react-redux";
import * as addstockActions from "../actions/addstock.action";
import { useSelector } from "react-redux";

export default function AddStock(props) {
  const addStockReducer = useSelector(({ addStockReducer }) => addStockReducer);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    price: 0,
    count: 0,
    description: "",
    catagory: "",
  });

  const [image, setImage] = useState(null);
  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  useEffect(() => {
    dispatch(addstockActions.setStateDefaultNoti());
  }, [dispatch]);

  const checkNoti = () => {
    if (addStockReducer.notification) {
      if (addStockReducer.error) {
        return (
          <>
            <Alert severity="error">{addStockReducer.result}</Alert>
          </>
        );
      } else if (addStockReducer.success) {
        return (
          <>
            <Alert severity="success">{addStockReducer.result}</Alert>
          </>
        );
      }
    }
  };
  const clear = () => {
    setData({ name: "", price: 0, count: 0, description: "", catagory: "" });
    setImage(null);
  };
  return (
    <div>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        marginTop="6em"
        alignItems="center"
      >
        <Box
          maxWidth="sm"
          width="1100px"
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
            <Box
              fontSize="30px"
              height="30%"
              marginTop="2em"
              display="flex"
              alignItems="center"
            >
              Add stock
            </Box>
            <Box
              marginTop="3em"
              justifyContent="center"
              height="40%"
              width="40%"
              minWidth="250px"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box width="100%">
                <Typography>Product name</Typography>
                <TextField
                  id="username"
                  style={{ margin: 8 }}
                  placeholder="product name..."
                  fullWidth
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <Typography>Description</Typography>
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  multiline
                  rows={5}
                  value={data.description}
                  onChange={(e) =>
                    setData({ ...data, description: e.target.value })
                  }
                  variant="outlined"
                />
                <Box display="flex" justifyContent="space-between">
                  <Box display="flex" flexDirection="column" width="40%">
                    <Typography>Price</Typography>
                    <TextField
                      type="number"
                      InputProps={{
                        inputProps: {
                          min: 0,
                          step: 1,
                        },
                      }}
                      value={data.price}
                      onChange={(e) => {
                        setData({ ...data, price: parseInt(e.target.value) });
                      }}
                    />
                  </Box>
                  <Box display="flex" flexDirection="column" width="40%">
                    <Typography>Number of stocks</Typography>
                    <TextField
                      type="number"
                      InputProps={{
                        inputProps: {
                          max: 100,
                          min: 0,
                          step: 1,
                        },
                      }}
                      value={data.count}
                      onChange={(e) => {
                        setData({ ...data, count: parseInt(e.target.value) });
                      }}
                    />
                  </Box>
                </Box>
                <Box marginTop="1em" display="flex" width="100%">
                  Catagory
                  <Box width="70%">
                    <NativeSelect
                      value={data.catagory}
                      onChange={(e) =>
                        setData({ ...data, catagory: e.target.value })
                      }
                      name="age"
                      fullWidth
                      inputProps={{ "aria-label": "age" }}
                    >
                      <option aria-label="None" value="" />
                      <optgroup label="หนังสือ">
                        <option value={["หนังสือ", "หนังสือนวนิยาย"]}>
                          หนังสือนวนิยาย
                        </option>
                        <option value={["หนังสือ", "หนังสือการ์ตูน"]}>
                          หนังสือการ์ตูน
                        </option>
                        <option value={["หนังสือ", "หนังสือโป๊"]}>
                          หนังสือโป๊
                        </option>
                      </optgroup>
                      <optgroup label="Wallet">
                        <option value={["Wallet", "Red Wallet"]}>
                          Red Wallet
                        </option>
                        <option value={["Wallet", "Black Wallet"]}>
                          Black Wallet
                        </option>
                      </optgroup>
                    </NativeSelect>
                  </Box>
                </Box>
                <Box marginTop="2em">
                  <input type="file" name="myImage" onChange={handleImage} />
                  {!image ? null:(<><img style={{width:"6em"}} src={image? URL.createObjectURL(image) : null} alt={image? image.name : null}/></>)}
                </Box>
              </Box>
            </Box>
            <Box height="4vh" width="45%" marginTop="2em" minWidth="300">
              {checkNoti()}
            </Box>
            <Box
              marginBottom="4em"
              alignItems="center"
              display="flex"
              marginTop="3em"
            >
              <Button
                variant="contained"
                color="primary"
                onClick={async (e) => {
                  await dispatch(addstockActions.addStock({ ...data, image }));
                  clear();
                }}
              >
                Add stock
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
