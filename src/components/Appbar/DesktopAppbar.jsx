<<<<<<< HEAD
import { Search, ShoppingCart } from '@mui/icons-material'
import { Autocomplete, CircularProgress, IconButton, Menu, TextField } from '@mui/material'
import React, { useState } from 'react'
import { AppbarContainer, SearchBox, SearchIconWrapper, StyledInputBase } from '../../style/components'

const DesktopAppbar = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState([]);

    useState(() => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => { setOptions(json); setLoading(false); })
    }, [])

    return (
        <AppbarContainer sx={{
            width: `calc(100% - 450px)`,
            ml: `340px`
        }}>
            <Autocomplete
                sx={{ width: "20%" }}
                id="asynchronous-demo"
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                isOptionEqualToValue={(option, value) => option.title === value.title}
                getOptionLabel={(option) => option.title}
                options={options}
                loading={loading}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search..."
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />
                )}>
            </Autocomplete>
            <IconButton>
                <ShoppingCart fontSize='large' />
            </IconButton>
        </AppbarContainer>
    )
}
=======
import { Search, ShoppingCart } from "@mui/icons-material";
import { IconButton, Menu } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useUIContext } from "../../context/ui";
import {
  AppbarContainer,
  SearchBox,
  SearchIconWrapper,
  StyledInputBase,
} from "../../style/components";
import Cart from "../Cart/Cart";

const DesktopAppbar = () => {
  const { setCartOpen } = useUIContext();
  const [cart, setCart] = useState([]);
  const userList = JSON.parse(window.localStorage.getItem("userList"));
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const userIndex =
    userList.indexOf(
      userList.find((user) => user.username == currentUser.username)
    ) + 1;
>>>>>>> 9f985f3 (added cart)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/carts/user/${userIndex}`)
      .then((res) => res.json())
      .then((json) => {
        setCart(json);
        console.log(json);
      });
  }, []);

  const openCart = (e) => {
    setCartOpen(e.currentTarget);
  };
  return (
    <AppbarContainer
      sx={{
        width: `calc(100% - 450px)`,
        ml: `340px`,
      }}
    >
      <SearchBox>
        <SearchIconWrapper>
          <Search />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </SearchBox>
      <IconButton onMouseEnter={openCart}>
        <ShoppingCart fontSize="large" />
      </IconButton>

      <Cart cart={cart} />
    </AppbarContainer>
  );
};

export default DesktopAppbar;
