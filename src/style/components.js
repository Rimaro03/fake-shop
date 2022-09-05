import { alpha, Box, Button, Card, Container, InputBase, styled, Toolbar, Typography } from "@mui/material";
import { palette } from "./theme";

export const MenuBox = styled(Box)(({ theme }) => ({
  width: "90%",
  borderTopLeftRadius: theme.shape.borderRadius,
  borderBottomLeftRadius: theme.shape.borderRadius,
  ":hover": { cursor: "pointer", backgroundColor: theme.palette.secondary.main },
}));

export const MenuItem = styled(Typography)(() => ({
  width: "fit-content",
  margin: "auto",
  padding: 15,
  textAlign: "left",
}));

export const AppbarContainer = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
  width: "auto",
}))

export const SearchBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.50),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.40),
  },
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

export const SearchIconWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.primary.main,
  borderTopLeftRadius: theme.shape.borderRadius,
  borderBottomLeftRadius: theme.shape.borderRadius
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '40ch',
      },
    },
  },
}));

export const DailychoiceContainer = styled(Box)(({ theme }) => ({
  marginTop: 20,
  padding: 40,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
}))

export const ProductListContainer = styled(Box)(({ theme }) => ({
  marginTop: 20,
  padding: 40,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "transparent",
}))

export const ProductCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",
  textAlign: "center",
  transition: "0.2s",
  ":hover": {
    scale: "1.04",
  },
}))

export const CartButton = styled(Button)(() => ({
  width: "100%",
  margin: 0,
  padding: 10,
  color: "black",
  alignSelf: "flex-end",
  backgroundColor: palette.primary.main,
  borderRadius: 0,
  ":hover": {
    backgroundColor: palette.primary.main,
  }
}))

export const FormContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: theme.shape.borderRadius,
  width: "fit-content",
  margin: "auto",
  padding: 30,
  textAlign: "center",
  alignItems: "center",
  marginTop: 80
}))