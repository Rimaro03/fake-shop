import { Backdrop, CircularProgress, Grid, Menu } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useUIContext } from "../../context/ui";

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
        setCart(json);
        setLoading(false);
      });
  }, []);

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
      {cart.length <= 0 ? (
        <CircularProgress size={"30px"} color="inherit" />
      ) : (
        <Box>
          {cart[0]["products"].map((item, index) => {
            return <p key={index}>{item.productId}</p>;
          })}
        </Box>
      )}
    </Menu>
  );
};

export default Cart;
