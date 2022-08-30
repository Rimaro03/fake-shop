import { Menu, Search, ShoppingCart } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { useUIContext } from '../../context/ui'
import { AppbarContainer, SearchBox, SearchIconWrapper, StyledInputBase } from '../../style/components'

const MobileAppbar = () => {
    const { setDrawerOpen } = useUIContext();

    return (
        <AppbarContainer>
            <IconButton onClick={() => { setDrawerOpen(true) }}>
                <Menu />
            </IconButton>
            <SearchBox>
                <SearchIconWrapper>
                    <Search />
                </SearchIconWrapper>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
            </SearchBox>
            <IconButton>
                <ShoppingCart fontSize='large' />
            </IconButton>
        </AppbarContainer>
    )
}

export default MobileAppbar