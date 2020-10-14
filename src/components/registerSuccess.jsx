import React from "react";
import { Box,Typography, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

function RegisterSuccess({ username, password, history }) {
  return (
    <div>
      <Box
        width="100%"
        height="72vh"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          fontSize="30px"
          height="30%"
          // border="2px solid red"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          Register Success!
        </Box>
        <Box
          // border="2px solid green"
          justifyContent="center"
          height="30%"
          width="40%"
          minWidth="250px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography>
            Your username is : {username ? username : "testname"}
          </Typography>
          <Typography>
            Your password is : {password ? password : "testpass"}
          </Typography>
        </Box>
        <Box
          height="40%"
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </Button>
          <Box marginTop="20px">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                history.push("/");
              }}
            >
              Back to home
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
export default withRouter(RegisterSuccess);
