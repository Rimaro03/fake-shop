import { Menu, Search, ShoppingCart } from "@mui/icons-material";
import {
  Autocomplete,
  CircularProgress,
  IconButton,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useUIContext } from "../../context/ui";
import {
  AppbarContainer,
  SearchBox,
  SearchIconWrapper,
  StyledInputBase,
} from "../../style/components";

const MobileAppbar = () => {
  const { setDrawerOpen } = useUIContext();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);

  useState(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setOptions(json);
        setLoading(false);
      });
  }, []);

  return (
    <AppbarContainer>
      <IconButton
        onClick={() => {
          setDrawerOpen(true);
        }}
      >
        <Menu />
      </IconButton>
      <Autocomplete
        sx={{ width: "50%" }}
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
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        )}
      ></Autocomplete>
      <IconButton>
        <ShoppingCart fontSize="large" />
      </IconButton>
    </AppbarContainer>
  );
};

export default MobileAppbar;
