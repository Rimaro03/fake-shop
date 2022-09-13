import {
  Backdrop,
  CircularProgress,
  Grid,
  Menu,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useUIContext } from "../../context/ui";
import { palette } from "../../style/theme";
import CartItem from "./CartItem";

const Cart = (props) => {
  const { cartOpen, setCartOpen } = useUIContext();
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);
  const list = ["pane", "mele", "cipolle"];

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/carts/user/1")
      .then((res) => res.json())
      .then((json) => {
        let productList = [];
        json[0]["products"].forEach((product) => {
          fetch(`https://fakestoreapi.com/products/${product.productId}`)
            .then((res) => res.json())
            .then((json) => {
              productList.push(json);
            });
        });
        setCart(productList);
        setLoading(false);
      });
  }, []);

  const handleClose = () => {
    setCartOpen(false);
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
      {cart.map((item, index) => {
        return (
          <MenuItem key={index}>
            <CartItem product={item} />
          </MenuItem>
        );
      })}
    </Menu>
  );
};

export default Cart;
