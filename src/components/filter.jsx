import React from "react";
import { Box, NativeSelect } from "@material-ui/core";

export default function Filter() {
  return (
    <div>
        <Box><h3>Filter</h3></Box>
      <Box
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
      > 
      <Box display="flex" alignItems="center"><Box marginRight="1em">
        <h4>Catagory</h4>
            </Box><NativeSelect
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
        
        <Box display="flex" alignItems="center"><Box marginRight="1em">
        <h4>Ordered by</h4>
            </Box><NativeSelect
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
    </div>
  );
}
