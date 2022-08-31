import React from 'react'
import { useTheme } from '@emotion/react';
import { Card, Grid, useMediaQuery } from '@mui/material'
import { ProductListContainer } from '../../style/components';

const DesktopProductList = (props) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("lg"))
    const productList = props.productList;

    let sx = {}
    !matches ? sx = {
        width: `calc(100% - 450px)`,
        ml: `340px`
    } : sx = { width: "auto" };

    return (
        <ProductListContainer sx={sx}>
            {productList.map((item, index) => {
                <Grid container>
                    <Grid item sx={3}>
                        <Card>

                        </Card>
                    </Grid>
                </Grid>
            })}
        </ProductListContainer>
    )
}

export default DesktopProductList