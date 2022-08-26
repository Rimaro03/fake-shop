import { Box, styled, Typography } from "@mui/material";

export const MenuBox = styled(Box)(({ selected }) => ({
  width: "80%",
  borderTopLeftRadius: 20,
  borderBottomLeftRadius: 20,
  ":hover": { cursor: "pointer", backgroundColor: "#F0DEFF" },
}));

export const MenuItem = styled(Typography)(() => ({
  width: "fit-content",
  margin: "auto",
  padding: 15,
  textAlign: "left",
}));
