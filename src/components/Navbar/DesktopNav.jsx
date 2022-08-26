import { AccountCircle } from '@mui/icons-material'
import { Divider, Drawer, Icon, List, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const DesktopNav = () => {
    return (
        <Drawer open={true} variant="permanent">
            <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} height={"100%"}>
                <Typography variant='h4' fontWeight={"bold"} pt={5}>FAKE SHOP</Typography>
                <Box display={"flex"} flexDirection={"column"} alignItems={"flex-end"} justifyContent={"space-around"}>
                    <Box sx={{ backgroundColor: "#F0DEFF" }} width={"80%"} height={"fit-content"}>
                        <Typography variant={"h6"} width={"fit-content"} marginBottom={5}>MEN'S CLOTHING</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "#F0DEFF" }} width={"80%"} >
                        <Typography variant={"h6"} width={"fit-content"} marginBottom={5} textAlign={"left"}>WOMEN'S CLOTHING</Typography>
                    </Box>
                    <Box sx={{ backgroundColor: "#F0DEFF" }} width={"80%"} >
                        <Typography variant={"h6"} width={"fit-content"}>JEWELRY</Typography>
                    </Box>
                </Box>
                <Box>
                    <Divider />
                    <Box display={"flex"}>
                        <AccountCircle fontSize='large' sx={{ margin: 4 }} />
                        <Typography variant={"h6"} margin={4}>Mario Rossi</Typography>
                    </Box>
                </Box>
            </Box>
        </Drawer >
    )
}

export default DesktopNav