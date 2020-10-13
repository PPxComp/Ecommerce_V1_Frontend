import React from "react";
import { Box, TextField, Typography, Button } from "@material-ui/core";
export default function Login() {
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
                  margin="normal"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Box>
            </Box>
            <Box height="30%" alignItems="center" display="flex">
              <Button variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
