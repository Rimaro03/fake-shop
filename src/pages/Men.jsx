import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar/Appbar";
import Nav from "../components/Navbar/Nav";
import ProductList from "../components/ProductList/ProductList";
import { palette } from "../style/theme";

const Men = () => {
  const backgrounds = [palette.secondary.main, "transparent", "transparent"]
  const [cookie, setCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookie.session) {
      console.log(1);
      navigate("/login")
    }
  }, []);
  return <>
    {cookie.session ? <><Nav backgrounds={backgrounds} />
      <Appbar />
      <ProductList category={"men's clothing"} /></> : <></>}
  </>;
};

export default Men;
