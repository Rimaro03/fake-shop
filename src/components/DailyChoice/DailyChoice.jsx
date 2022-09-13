import { useTheme } from "@emotion/react";
import { Backdrop, CircularProgress, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import DesktopDailychoice from "./DesktopDailychoice";
import MobileDailychoice from "./MobileDailychoice";

const DailyChoice = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();

  useEffect(() => {
    const randomProduct = Math.floor(Math.random() * 19) + 1;
    fetch(`https://fakestoreapi.com/products/${randomProduct}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
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
        <>
          {!matches ? (
            <DesktopDailychoice product={product} />
          ) : (
            <MobileDailychoice product={product} />
          )}
        </>
      )}
    </>
  );
};

export default DailyChoice;
