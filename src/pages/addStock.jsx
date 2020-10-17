import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  Button,
  NativeSelect,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import * as addstockActions from "../actions/addstock.action";
import { storage } from "../firebase/firebase";
export default function AddStock() {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    price: 0,
    count: 0,
    img: null,
    catagory: "",
  });

  const [image, setImage] = useState(null);
  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            console.log(url);
          });
      }
    );
  };
  return (
    <div>
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
            <Box
              fontSize="30px"
              height="30%"
              // border="2px solid red"
              display="flex"
              alignItems="center"
            >
              Add stock
            </Box>
            <Box
              // border="2px solid green"
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
                        setData({ ...data, price: e.target.value });
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
                        setData({ ...data, count: e.target.value });
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
                </Box>
              </Box>
            </Box>
            <Box height="10%" width="45%" minWidth="300"></Box>
            <Box height="20%" alignItems="center" display="flex">
              <Button
                variant="contained"
                color="primary"
                onClick={(e) =>  {
                  // handleUpload
                  dispatch(addstockActions.addStock({...data,image}))
                }
                }
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
