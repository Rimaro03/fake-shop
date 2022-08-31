import React from "react";
import Appbar from "../components/Appbar/Appbar";
import Nav from "../components/Navbar/Nav";
import ProductList from "../components/ProductList/ProductList";
import { palette } from "../style/theme";

const Men = () => {
  const backgrounds = [palette.secondary.main, "transparent", "transparent"]
  return <>
    <Nav backgrounds={backgrounds} />
    <Appbar />
    <ProductList category={"men's clothing"} />
  </>;;
};

export default Men;
