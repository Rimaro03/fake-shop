import { Box } from '@mui/system'
import React from 'react'
import Appbar from '../components/Appbar/Appbar'
import DailyChoice from '../components/DailyChoice/DailyChoice'
import Nav from '../components/Navbar/Nav'

const Homepage = () => {
    const backgrounds = ["transparent", "transparent", "transparent"]
    return (
        <>
            <Nav backgrounds={backgrounds} />
            <Appbar />
            <DailyChoice />
        </>
    )
}

export default Homepage