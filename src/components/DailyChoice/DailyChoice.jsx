import { useTheme } from '@emotion/react';
import { useMediaQuery } from '@mui/material';
import React, { useState } from 'react'
import DesktopDailychoice from './DesktopDailychoice';
import MobileDailychoice from './MobileDailychoice';

const DailyChoice = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"))
    return (
        <>
            {!matches ? <DesktopDailychoice /> : <MobileDailychoice />}
        </>
    )
}

export default DailyChoice