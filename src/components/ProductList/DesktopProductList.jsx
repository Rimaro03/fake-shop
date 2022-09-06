import React from 'react'
import { useTheme } from '@emotion/react';
import { Backdrop, Card, CardActions, CardContent, CardMedia, Grid, IconButton, Rating, Typography, useMediaQuery } from '@mui/material'
import { CartButton, ProductCard, ProductListContainer } from '../../style/components';
import { Box } from '@mui/system';
import { AddShoppingCart } from '@mui/icons-material';
import { palette } from '../../style/theme';

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
            <Grid container spacing={5}>
                {productList.map((product, index) => (
                    <Grid item xl={3} lg={5} md={4} sm={6} xs={12} key={index}>
                        <ProductCard>
                            <CardMedia component={"img"} sx={{ width: "130px", p: 5 }} image={product.image} />
                            <CardContent>
                                <Box>
                                    <Typography component="div" variant="h6" fontWeight={"bold"}>
                                        {product.title}
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary" component="div" pt={1}>
                                        {product.description.slice(0, 60)}...
                                    </Typography>
                                </Box>
                                <Rating
                                    name="size-large"
                                    size='medium'
                                    value={product.rating.rate}
                                    precision={0.5}
                                    readOnly={true}
                                />
                            </CardContent>
                            <CardActions sx={{ width: "100%" }}>
                                <Box display="flex" justifyContent={"space-around"} sx={{ width: "100%" }}>
                                    <Typography fontWeight={"bold"} sx={{ pt: 0.5 }}>
                                        $ {product.price}
                                    </Typography>
                                    <IconButton sx={{ backgroundColor: palette.primary.main }}>
                                        <AddShoppingCart />
                                    </IconButton>
                                </Box>
                            </CardActions>
                        </ProductCard>
                    </Grid>
                ))}
            </Grid>
        </ProductListContainer>
    )
}

export default DesktopProductList