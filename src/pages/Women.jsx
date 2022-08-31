import React from "react";
import Appbar from "../components/Appbar/Appbar";
import Nav from "../components/Navbar/Nav";
import { palette } from "../style/theme";

const Women = () => {
  const backgrounds = ["transparent", palette.secondary.main, "transparent"]
  return <>
    <Nav backgrounds={backgrounds} />
    <Appbar />
  </>;;
};

export default Women;
