import { Card, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CartItem = (props) => {
  const product = props.product;
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        image={product.image}
        alt="product image"
        sx={{ width: 100 }}
      />
      <Box>
        <Typography component="div" variant="h6" width={"50%"}>
          {product.title}
        </Typography>
      </Box>
    </Card>
  );
};

export default CartItem;
