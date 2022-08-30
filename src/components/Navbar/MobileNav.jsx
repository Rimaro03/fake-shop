import { AccountCircle } from '@mui/icons-material';
import { Box, Divider, Drawer, MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUIContext } from '../../context/ui';
import { MenuBox } from '../../style/components';

const MobileNav = () => {
    const { drawerOpen, setDrawerOpen } = useUIContext();
    const navigate = useNavigate();
    return (
        <Drawer open={drawerOpen} onClose={() => { setDrawerOpen(false) }}>
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                height={"100%"}
            >
                <Typography
                    variant="h4"
                    fontWeight={"bold"}
                    pt={5}
                    sx={{ ":hover": { cursor: "pointer" } }}
                    onClick={() => {
                        navigate("/");
                    }}
                    textAlign={"center"}
                >
                    FAKE SHOP
                </Typography>
                <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"flex-end"}
                    justifyContent={"space-around"}
                    height={"50%"}
                >
                    <MenuBox selected={true}>
                        <MenuItem
                            variant={"h6"}
                            onClick={() => {
                                navigate("/men");
                            }}
                        >
                            MEN'S CLOTHING
                        </MenuItem>
                    </MenuBox>
                    <MenuBox>
                        <MenuItem
                            variant={"h6"}
                            onClick={() => {
                                navigate("/women");
                            }}
                        >
                            WOMEN'S CLOTHING
                        </MenuItem>
                    </MenuBox>
                    <MenuBox>
                        <MenuItem
                            variant={"h6"}
                            onClick={() => {
                                navigate("/jewelry");
                            }}
                        >
                            JEWELRY
                        </MenuItem>
                    </MenuBox>
                </Box>
                <Box>
                    <Divider />
                    <Box display={"flex"}>
                        <AccountCircle fontSize="large" sx={{ margin: 4 }} />
                        <Typography variant={"h6"} margin={4}>
                            Mario Rossi
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Drawer>
    )
}

export default MobileNav