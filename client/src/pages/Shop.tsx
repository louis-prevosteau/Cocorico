import { LocationOnOutlined } from '@mui/icons-material';
import { AppBar, Box, Chip, Grid, Typography } from '@mui/material';
import { ProductCard } from 'components';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from 'redux/Store';
import { getProducts, getShop } from 'redux/actions';

export const Shop = () => {
    const { id } = useParams();
    const { shop, products } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getShop(id as string));
        dispatch(getProducts(id as string));
    }, [id]);
    return (
        <div>
            <AppBar
                position="static"
                sx={{ backgroundColor: '#DEE5E9', overflowX: 'hidden' }}
            >
                <Typography
                    fontWeight="bold"
                    align="center"
                    variant="h3"
                    color="textPrimary"
                >
                    {shop.name}
                </Typography>
                <Grid
                    container
                    justifyContent="flex-start"
                    direction="column"
                    spacing={3}
                    alignItems="flex-start"
                >
                    <Grid item>
                        <LocationOnOutlined sx={{ color: '#333' }} />
                        <Typography variant="body1" color="textSecondary">
                            {shop.city} ({shop.department})
                        </Typography>
                    </Grid>
                    <Grid
                        container
                        item
                        marginLeft={1}
                        direction="row"
                        spacing={5}
                    >
                        <Grid item>
                            <Chip label={shop.category.name} color="success" />
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" color="textPrimary">
                                {shop.description}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </AppBar>
            <Box
                sx={{
                    maxWidth: 1020,
                    flexGrow: 1,
                    border: '5px solid',
                    borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
                }}
            >
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                >
                    {products.map((product) => (
                        <Grid item xs={2} sm={4} md={4} key={product._id}>
                            <ProductCard product={product} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </div>
    );
};
