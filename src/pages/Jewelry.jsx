import React from "react";
import Appbar from "../components/Appbar/Appbar";
import Nav from "../components/Navbar/Nav";
import { palette } from "../style/theme";

const Jewelry = () => {
  const backgrounds = ["transparent", "transparent", palette.secondary.main]
  return <>
    <Nav backgrounds={backgrounds} />
    <Appbar />
  </>;
};

export default Jewelry;
