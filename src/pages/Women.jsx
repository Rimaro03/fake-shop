import React from "react";
import Appbar from "../components/Appbar/Appbar";
import Nav from "../components/Navbar/Nav";
import ProductList from "../components/ProductList/ProductList";
import { palette } from "../style/theme";

const Women = () => {
  const backgrounds = ["transparent", palette.secondary.main, "transparent"]
  return <>
    <Nav backgrounds={backgrounds} />
    <Appbar />
    <ProductList category={"women's clothing"} />
  </>;;
};

export default Women;
