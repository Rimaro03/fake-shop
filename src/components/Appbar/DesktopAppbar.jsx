import { Search, ShoppingCart } from '@mui/icons-material'
import { Autocomplete, CircularProgress, IconButton, Menu, TextField } from '@mui/material'
import React, { useState } from 'react'
import { AppbarContainer, SearchBox, SearchIconWrapper, StyledInputBase } from '../../style/components'

const DesktopAppbar = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState([]);

    useState(() => {
        setLoading(true)
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => { setOptions(json); setLoading(false); })
    }, [])

    return (
        <AppbarContainer sx={{
            width: `calc(100% - 450px)`,
            ml: `340px`
        }}>
            <Autocomplete
                sx={{ width: "20%" }}
                id="asynchronous-demo"
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                isOptionEqualToValue={(option, value) => option.title === value.title}
                getOptionLabel={(option) => option.title}
                options={options}
                loading={loading}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search..."
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />
                )}>
            </Autocomplete>
            <IconButton>
                <ShoppingCart fontSize='large' />
            </IconButton>
        </AppbarContainer>
    )
}

export default DesktopAppbar