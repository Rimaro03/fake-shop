import { AccountCircle } from "@mui/icons-material";
import { Divider, Drawer, Icon, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { MenuBox, MenuItem } from "../../style/components";

const DesktopNav = () => {
  const navigate = useNavigate();
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
              JEWELRY
            </MenuItem>
          </MenuBox>
        </Box>
        <Box>
          <Divider />
          <Box display={"flex"}>
            <AccountCircle fontSize="large" sx={{ margin: 4 }} />
            <Typography variant={"h6"} margin={4}>
              Mario Rossi
            </Typography>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default DesktopNav;
