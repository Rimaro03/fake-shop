import React, { useEffect, useState } from 'react'
import { DailychoiceContainer } from '../../style/components'
import { ShoppingBag, ShoppingCart } from '@mui/icons-material'
import { Box, Button, Rating, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@emotion/react'

const DesktopDailychoice = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"))
    const product = props.product;
    const [value, setValue] = React.useState(product.rating.rate);

    let sx = {}
    !matches ? sx = {
        width: `calc(100% - 450px)`,
        ml: `340px`
    } : sx = { width: "auto" };

    return (
        <DailychoiceContainer sx={sx}>
            <Box display={"flex"} justifyContent={"space-around"}>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"} width={"40%"} padding={5}>
                    <Typography variant="h2" fontWeight={"bold"}>TODAY'S BEST<br /> CHOICE</Typography>
                    <Box>
                        <Typography variant="subtitle1" pt={1}>{product.category}</Typography>
                        <Typography variant="h5" fontWeight={"bold"} pt={1}>{product.title}</Typography>
                        <Typography variant="h6" pt={1}>{product.description}</Typography>
                        <Box display={"flex"} justifyContent={"space-between"} marginTop={3}>
                            <Box display={"flex"}>
                                <Rating
                                    name="size-large"
                                    size='large'
                                    value={value}
                                    precision={0.5}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                <Typography p={0.5}>({product.rating.count})</Typography>
                            </Box>
                            <Typography variant={"h5"} fontWeight={"bold"}>$ {product.price}</Typography>
                        </Box>
                        <Box pt={3} width={"100%"} display={"flex"} justifyContent={"space-between"}>
                            <Button variant="contained" startIcon={<ShoppingBag />} sx={{ width: "40%" }}>BUY NOW</Button>
                            <Button variant="contained" startIcon={<ShoppingCart />} sx={{ width: "40%" }}>ADD TO CART</Button>
                        </Box>
                    </Box>

                </Box>
                <img src={product.image} alt="daily choice" width={"35%"} height={"30%"} />
            </Box>
        </DailychoiceContainer >
    )
}

export default DesktopDailychoice