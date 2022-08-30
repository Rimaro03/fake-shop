import React, { useState } from 'react'
import { DailychoiceContainer } from '../../style/components'
import { ShoppingBag, ShoppingCart } from '@mui/icons-material'
import { Box, Button, Rating, Typography } from '@mui/material'

const DesktopDailychoice = () => {
    const [value, setValue] = useState(2);

    return (
        <DailychoiceContainer>
            <Box display={"flex"} justifyContent={"space-around"}>
                <Box display={"flex"} flexDirection={"column"} justifyContent={"space-around"} width={"40%"} padding={5}>
                    <Typography variant="h2" fontWeight={"bold"}>TODAY'S BEST<br /> CHOICE</Typography>
                    <Box>
                        <Typography variant="h6" pt={1}>Man's clothing</Typography>
                        <Typography variant="h5" fontWeight={"bold"} pt={1}>Fjallraven - Foldsack No. 1 Backpack,
                            Fits 15 Laptops</Typography>
                        <Typography variant="h6" pt={1}>Your perfect pack for everyday use and walks in the forest.
                            Stash your laptop (up to 15 inches) in the padded sleeve,
                            your everyday</Typography>
                        <Box display={"flex"} justifyContent={"space-between"} marginTop={3}>
                            <Box display={"flex"}>
                                <Rating
                                    name="size-large"
                                    size='large'
                                    value={value}

                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                                <Typography p={0.5}>(120)</Typography>
                            </Box>
                            <Typography variant={"h5"} fontWeight={"bold"}>$109.99</Typography>
                        </Box>
                        <Box pt={3} width={"100%"} display={"flex"} justifyContent={"space-between"}>
                            <Button variant="contained" startIcon={<ShoppingBag />} sx={{ width: "40%" }}>BUY NOW</Button>
                            <Button variant="contained" startIcon={<ShoppingCart />} sx={{ width: "40%" }}>ADD TO CART</Button>
                        </Box>
                    </Box>
                </Box>
                <img src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"} alt="daily choice" width={"35%"} height={"30%"} />
            </Box>
        </DailychoiceContainer >
    )
}

export default DesktopDailychoice