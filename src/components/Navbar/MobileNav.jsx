import { Drawer } from '@mui/material'
import React, { useState } from 'react'
import { useUIContext } from '../../context/ui';

const MobileNav = () => {
    const { drawerOpen, setDrawerOpen } = useUIContext();

    return (
        <Drawer open={drawerOpen} onClose={() => { setDrawerOpen(false) }}>
            <p>Mobile</p>
        </Drawer>
    )
}

export default MobileNav