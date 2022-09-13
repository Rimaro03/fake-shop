import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar/Appbar";
import Nav from "../components/Navbar/Nav";
import ProductList from "../components/ProductList/ProductList";
import { palette } from "../style/theme";

const Women = () => {
  const backgrounds = ["transparent", palette.secondary.main, "transparent"];
  const [cookie, setCookie] = useCookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (!cookie.session) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      {cookie.session ? (
        <>
          <Nav backgrounds={backgrounds} />
          <Appbar />
          <ProductList category={"women's clothing"} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Women;
