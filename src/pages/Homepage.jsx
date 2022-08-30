import { Box } from '@mui/system'
import React from 'react'
import Appbar from '../components/Appbar/Appbar'
import DailyChoice from '../components/DailyChoice/DailyChoice'
import Nav from '../components/Navbar/Nav'

const Homepage = () => {
    return (
        <>
            <Nav />
            <Appbar />
            <Box sx={{
                width: `calc(100% - 450px)`,
                ml: `340px`
            }}>
                <DailyChoice />
            </Box>
        </>
    )
}

export default Homepage