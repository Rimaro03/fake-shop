import { Grid, Menu } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useUIContext } from "../../context/ui";

const Cart = (props) => {
  const { cartOpen, setCartOpen } = useUIContext();

  const handleClose = () => {
    setCartOpen(false), console.log(null);
  };

  return (
    <Menu
      sx={{ mt: "45px" }}
      id="menu-appbar"
      anchorEl={cartOpen}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(cartOpen)}
      onClose={handleClose}
    >
      {props.cart.products.map((item, index) => {
        return <p>prodotto</p>;
      })}
    </Menu>
  );
};

export default Cart;
