import { useTheme } from "@emotion/react";
import { ShoppingBag, ShoppingCart } from "@mui/icons-material";
import { Box, Button, Rating, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { DailychoiceContainer } from "../../style/components";

const MobileDailychoice = (props) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const product = props.product;
  const [value, setValue] = useState(product.rating.rate);
  return (
    <DailychoiceContainer
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Typography variant="h2" fontWeight={"bold"}>
        TODAY'S BEST CHOICE
      </Typography>
      <img
        src={product.image}
        alt="daily choice"
        width={"35%"}
        height={"30%"}
      />
      <Box>
        <Typography variant="subtitle1" color="text.secondary" pt={5}>
          {product.category}
        </Typography>
        <Typography variant="h5" fontWeight={"bold"} pt={1}>
          {product.title}
        </Typography>
        <Typography variant="h6" pt={1}>
          {product.description}
        </Typography>
        <Box display={"flex"} justifyContent={"space-between"} marginTop={3}>
          <Box display={"flex"}>
            <Rating
              name="size-large"
              size="large"
              precision={0.5}
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography p={0.5}>({product.rating.count})</Typography>
          </Box>
          <Typography variant={"h5"} fontWeight={"bold"}>
            $ {product.price}
          </Typography>
        </Box>
        <Box
          pt={3}
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Button
            variant="contained"
            startIcon={<ShoppingBag />}
            sx={{ width: "40%" }}
          >
            {!matches ? "BUY NOW" : ""}
          </Button>
          <Button
            variant="contained"
            startIcon={<ShoppingCart />}
            sx={{ width: "40%" }}
          >
            {!matches ? "ADD TO CART" : ""}
          </Button>
        </Box>
      </Box>
    </DailychoiceContainer>
  );
};

export default MobileDailychoice;
