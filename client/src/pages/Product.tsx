import { ProductDetails, Reviews } from 'components';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from 'redux/Store';
import { addProductToCart, getProduct } from 'redux/actions';
import { Card, Container, Grid, IconButton, Typography } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';

export const Product = () => {
    const [state, setState] = useState({
        quantity: 0,
    });
    const { id } = useParams();
    const { product } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        if (id) {
            dispatch(getProduct(id));
        }
    }, [id]);

    const handleAddProductToCart = () => {
        dispatch(
            addProductToCart({
                product: product._id,
                quantity: state.quantity,
            }),
        );
    };

    return (
        <Container sx={{ marginTop: '20px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <ProductDetails product={product} />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card
                        sx={{
                            padding: '16px',
                            backgroundColor: '#DEE5E9',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#E6001F',
                            }}
                        >
                            {product.price} €
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#001D6E',
                                marginBottom: '16px',
                                display: 'none',
                                '@media (min-width: 600px)': {
                                    display: 'block',
                                },
                            }}
                        >
                            {product.description}
                        </Typography>
                        <IconButton
                            onClick={handleAddProductToCart}
                            color="primary"
                            aria-label="Add to cart"
                            sx={{
                                backgroundColor: '#E6001F',
                                color: '#DEE5E9',
                                '&:hover': {
                                    backgroundColor: '#001D6E',
                                },
                            }}
                        >
                            <AddShoppingCart />
                        </IconButton>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                    <Typography
                        variant="body2"
                        sx={{
                            color: '#001D6E',
                            display: 'none',
                            '@media (min-width: 600px)': {
                                display: 'block',
                            },
                        }}
                    >
                        {product.description}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Reviews productId={product._id} />
                </Grid>
            </Grid>
        </Container>
    );
};
