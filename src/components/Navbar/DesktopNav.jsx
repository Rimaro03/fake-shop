import { AccountCircle, Logout } from "@mui/icons-material";
import { Divider, Drawer, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { MenuBox, MenuItem } from "../../style/components";

const DesktopNav = (props) => {
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
    <Drawer open={true} variant="permanent">
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
          <MenuBox sx={{ backgroundColor: props.backgrounds[0] }}>
            <MenuItem
              variant={"h6"}
              onClick={() => {
                navigate("/men");
              }}
            >
              MEN'S CLOTHING
            </MenuItem>
          </MenuBox>
          <MenuBox sx={{ backgroundColor: props.backgrounds[1] }}>
            <MenuItem
              variant={"h6"}
              onClick={() => {
                navigate("/women");
              }}
            >
              WOMEN'S CLOTHING
            </MenuItem>
          </MenuBox>
          <MenuBox sx={{ backgroundColor: props.backgrounds[2] }}>
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
          <Box display={"flex"} justifyContent={"space-between"} p={2}>
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

export default DesktopNav;
