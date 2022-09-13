import { AccountCircle, Logout } from "@mui/icons-material";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useUIContext } from "../../context/ui";
import { MenuBox } from "../../style/components";

const MobileNav = () => {
  const { drawerOpen, setDrawerOpen } = useUIContext();
  const navigate = useNavigate();
  const [cookie, setCookie, removeCookie] = useCookies();
  const userList = JSON.parse(window.localStorage.getItem("userList"));
  const currentUser = JSON.parse(window.localStorage.getItem("currentUser"));
  const user = userList.find((user) => user.username == currentUser.username);

  const handleLogout = () => {
    navigate("/login");
    window.localStorage.removeItem("currentUser");
    removeCookie("session");
  };

  return (
    <Drawer
      open={drawerOpen}
      onClose={() => {
        setDrawerOpen(false);
      }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        height={"100%"}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          pt={5}
          sx={{ ":hover": { cursor: "pointer" } }}
          onClick={() => {
            navigate("/");
          }}
          textAlign={"center"}
        >
          FAKE SHOP
        </Typography>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"flex-end"}
          justifyContent={"space-around"}
          height={"50%"}
        >
          <MenuBox selected={true}>
            <MenuItem
              variant={"h6"}
              onClick={() => {
                navigate("/men");
              }}
            >
              MEN'S CLOTHING
            </MenuItem>
          </MenuBox>
          <MenuBox>
            <MenuItem
              variant={"h6"}
              onClick={() => {
                navigate("/women");
              }}
            >
              WOMEN'S CLOTHING
            </MenuItem>
          </MenuBox>
          <MenuBox>
            <MenuItem
              variant={"h6"}
              onClick={() => {
                navigate("/jewelry");
              }}
            >
              JEWELERY
            </MenuItem>
          </MenuBox>
        </Box>
        <Box>
          <Divider />
          <Box display={"flex"}>
            <AccountCircle fontSize="large" sx={{ margin: "auto" }} />
            <Box>
              <Typography variant={"h6"}>
                {user.name.firstname} {user.name.lastname}
              </Typography>
              <Typography variant={"subtitle2"} color={"text.secondary"}>
                {user.address.street} {user.address.number}, {user.address.city}
              </Typography>
            </Box>
            <IconButton
              fontSize="medium"
              sx={{ margin: "auto" }}
              onClick={handleLogout}
            >
              <Logout />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default MobileNav;
