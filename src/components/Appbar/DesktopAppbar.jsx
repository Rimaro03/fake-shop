import { Search, ShoppingCart } from '@mui/icons-material'
import { IconButton, Menu } from '@mui/material'
import React from 'react'
import { AppbarContainer, SearchBox, SearchIconWrapper, StyledInputBase } from '../../style/components'

const DesktopAppbar = () => {
    return (
        <AppbarContainer sx={{
            width: `calc(100% - 450px)`,
            ml: `340px`
        }}>
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

export default DesktopAppbar