import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import firebase from "../firebase/firebase";
import axios from "axios";
export default function CardComponent({
  description,
  catagoty,
  _id,
  name,
  price,
  count,
}) {
  const [image, setImage] = useState("");
  useEffect(() => {
    let isMounted = true;
    setImage("");
    if(isMounted){
    async function fetchData() {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_API_URL}/firebase/${_id}`
        );
        if (result.data) {
          const storageRef = firebase.app().storage().ref();
          if (_id !== undefined) {
            const imageRef = storageRef.child(`img/${_id}`);
            imageRef.getDownloadURL().then(
              (avatarUrl) => {
                if(isMounted)setImage(avatarUrl);
              },
              (error) => {
                if(isMounted)setImage("");
              }
            );
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }
  }, [_id]);
  return (
    <div>
      <Box
        width="18em"
        marginTop="3em"
        display="flex"
        flexDirection="column"
      >
        <Card>
          <Box
            width="100%"
            height="18em"
            display="flex"
            justifyContent="center"
            alignItems="center"
            borderBottom="1px solid lightGrey"
          >
            {image !== "" ? (
              <img src={image} alt="Lithuanian flag" width="100%" />
            ) : (
              "Test image"
            )}
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" align="center">
              {name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              align="center"
            >
              {price}
            </Typography>
          </CardContent>
          <Box marginX="auto" width="70%" align="center" marginBottom="1em">
            <Button variant="contained" color="primary" margin="20" fullWidth>
              Add to cart
            </Button>
          </Box>
        </Card>
      </Box>
    </div>
  );
}
