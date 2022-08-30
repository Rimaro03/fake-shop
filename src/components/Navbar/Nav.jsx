import { useTheme } from '@mui/material'
import { useMediaQuery } from '@mui/material';
import React from 'react'
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Nav = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"))
    return (
        <>
            {!matches ? <DesktopNav /> : <MobileNav />}
        </>
    )
}

export default Nav