import React,{useState,useEffect} from "react";
import { Box, NativeSelect } from "@material-ui/core";
import { useHistory } from "react-router-dom";
export default function Filter(props) {
  const { catagory, start } = props;
  const [catagories, setCatagories] = useState("");
  useEffect(() => {
    
    setCatagories(catagory)
  }, [catagory])

  const history = useHistory();
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
            value={catagories}
            onChange={(e) => {
              history.push(
                `/stock?start=${start}&catagory=${e.target.value}`
              );
            }}
          >
            <option value={["All"]}>ทั้งหมด</option>
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

        {/* <Box display="flex" alignItems="center">
          <Box marginRight="1em">
            <h4>Ordered By</h4>
          </Box>
          <NativeSelect
            value={orderBy}
            onChange={(e) => {
              history.push(
                `/stock?start=${start}&catagory=${catagory}&orderBy=${e.target.value}`
              );
            }}
            // fullWidth
          >
            <option value={"currently"}>currently</option>
            <option value={"lowtohigh"}>price low to high</option>
            <option value={"hightolow"}>price high to low</option>
          </NativeSelect>
        </Box> */}
      </Box>
    </div>
  );
}
