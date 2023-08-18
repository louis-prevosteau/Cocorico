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
            <AppBar position="static" sx={{ backgroundColor: '#DEE5E9' }}>
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
            <Box sx={{ maxWidth: 280, flexGrow: 1 }}>
                <Grid container spacing={1} direction={'row'}>
                    <Grid item>
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};
