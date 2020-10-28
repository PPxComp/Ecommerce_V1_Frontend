import React from "react";
import { Box, NativeSelect } from "@material-ui/core";

export default function Filter({orderBy,setOrderBy}) {
  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
        marginBottom="1em"
      >
        <Box display="flex" alignItems="center">
          <Box marginRight="1em">
            <h4>Catagory</h4>
          </Box>
          <NativeSelect
            //   value={data.catagory}
            //   onChange={(e) =>
            //     setData({ ...data, catagory: e.target.value })
            //   }
            name="age"
            //   fullWidth
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
              <option value={["หนังสือ", "หนังสือโป๊"]}>หนังสือโป๊</option>
            </optgroup>
            <optgroup label="Wallet">
              <option value={["Wallet", "Red Wallet"]}>Red Wallet</option>
              <option value={["Wallet", "Black Wallet"]}>Black Wallet</option>
            </optgroup>
          </NativeSelect>
        </Box>

        <Box display="flex" alignItems="center">
          <Box marginRight="1em">
            <h4>Ordered By</h4>
          </Box>
          <NativeSelect
              value={orderBy}
            //   onChange={(e) =>
            //     setData({ ...data, catagory: e.target.value })
            //   }
            name="age"
            //   fullWidth
          >
            <option aria-label="None" value="" />
            <option value={["Wallet", "Red Wallet"]}>price low to high</option>
            <option value={["Wallet", "Black Wallet"]}>
              price high to low
            </option>
          </NativeSelect>
        </Box>
      </Box>
    </div>
  );
}
