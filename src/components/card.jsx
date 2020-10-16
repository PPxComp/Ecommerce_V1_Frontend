import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

export default function CardComponent({img,catagoty,_id,name,price,count}) {
  return (
    <div>
      <Box
        width="18em"
        marginX="2em"
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
            Test Picture
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
