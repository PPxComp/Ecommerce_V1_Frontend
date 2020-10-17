import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, TextField, Typography, Button } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import RegisterSuccess from "../components/registerSuccess";
import * as registerActions from "../actions/register.action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
export default function Register() {
  const registerReducer = useSelector(({ registerReducer }) => registerReducer);
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setSuccess(false);
  }, []);
  const [account, setAccount] = useState({
    username: "",
    password: "",
  });
  const handle = async ({ username, password }) => {
    const data = {
      username,
      password,
    };
    axios
      .post("http://localhost:9000/user", data, {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((result) => {
        setSuccess(true);
      })
      .catch((error) => {
        if (error.response.data.statusCode === 400) {
          dispatch(registerActions.hasError(error.response.data.message));
        }
      });
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
            {!success && (
              <>
                <Box
                  fontSize="30px"
                  height="30%"
                  // border="2px solid red"
                  display="flex"
                  alignItems="center"
                >
                  Register Form
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
                    <Typography>Username</Typography>
                    <TextField
                      id="username"
                      style={{ margin: 8 }}
                      placeholder="username"
                      fullWidth
                      value={account.username}
                      onChange={(e) =>
                        setAccount({ ...account, username: e.target.value })
                      }
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <Typography>Password</Typography>
                    <TextField
                      id="password"
                      style={{ margin: 8 }}
                      placeholder="password"
                      fullWidth
                      value={account.password}
                      onChange={(e) =>
                        setAccount({ ...account, password: e.target.value })
                      }
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Box>
                </Box>
                <Box height="10%" width="45%" minWidth="300">
                  {registerReducer.error && (
                    <>
                      <Alert severity="error">
                        {registerReducer.result}
                      </Alert>
                    </>
                  )}
                </Box>
                <Box height="20%" alignItems="center" display="flex">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handle({ ...account })}
                  >
                    Register
                  </Button>
                </Box>
              </>
            )}
            {success && (<><RegisterSuccess username={account.username} password={account.password}/></>)}
          </Box>
        </Box>
      </Box>
    </div>
  );
}

