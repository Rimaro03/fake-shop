import { useTheme } from "@emotion/react";
import { Backdrop, CircularProgress, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import DesktopProductList from "./DesktopProductList";

const ProductList = (props) => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${props.category}`)
      .then((res) => res.json())
      .then((json) => {
        setProductList(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={isLoading}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
        <DesktopProductList productList={productList} />
      )}
    </>
  );
};

export default ProductList;
