import React from "react";
import Appbar from "../components/Appbar/Appbar";
import Nav from "../components/Navbar/Nav";
import ProductList from "../components/ProductList/ProductList";
import { palette } from "../style/theme";

const Jewelry = () => {
  const backgrounds = ["transparent", "transparent", palette.secondary.main]
  return <>
    <Nav backgrounds={backgrounds} />
    <Appbar />
    <ProductList category={"jewelery"} />
  </>;
};

export default Jewelry;
