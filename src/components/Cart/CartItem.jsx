import { Card, CardMedia, MenuItem, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const CartItem = (props) => {
  const product = props.product;
  return (
    <MenuItem sx={{ textOverflow: "ellipsis" }}>
      <Card
        sx={{
          display: "flex",
          width: "500px",
          boxShadow: 0,
          p: 1,
          m: 1,
          textOverflow: "ellipsis",
        }}
      >
        <CardMedia
          component="img"
          image={product.image}
          alt="product image"
          sx={{ width: 70 }}
        />
        <Box width={"100%"} p={1} sx={{ textOverflow: "ellipsis" }}>
          <Typography
            component="div"
            variant="h7"
            sx={{ textOverflow: "ellipsis" }}
          >
            {product.title}
          </Typography>
        </Box>
      </Card>
    </MenuItem>
  );
};

export default CartItem;
