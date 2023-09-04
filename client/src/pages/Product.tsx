import { ProductDetails, Reviews } from 'components';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from 'redux/Store';
import { addProductToCart, getCart, getProduct } from 'redux/actions';
import {
    Box,
    Card,
    Container,
    Grid,
    IconButton,
    Paper,
    Rating,
    Tooltip,
    Typography,
} from '@mui/material';
import { Add, AddShoppingCart, Remove } from '@mui/icons-material';

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
        dispatch(getCart());
        dispatch(
            addProductToCart({
                product: product._id,
                quantity: state.quantity,
            }),
        );
    };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0',
                marginTop: '20px',
            }}
        >
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
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginBottom: '20px',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                backgroundColor: '#DEE5E9',
                                padding: '16px',
                            }}
                        >
                            <Grid container direction={'row'} spacing={3}>
                                <Grid item>
                                    <IconButton
                                        onClick={() =>
                                            setState({
                                                ...state,
                                                quantity: state.quantity - 1,
                                            })
                                        }
                                        disabled={state.quantity === 0}
                                        sx={{
                                            backgroundColor: '#E6001F',
                                            color: '#DEE5E9',
                                            '&:hover': {
                                                backgroundColor: '#001D6E',
                                            },
                                            '&:disabled': {
                                                backgroundColor: '#FFCDD2',
                                                color: '#DEE5E9',
                                            },
                                        }}
                                    >
                                        <Remove />
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        variant='h4'
                                        fontWeight='bold'
                                        sx={{
                                            color: '#001D6E'
                                        }}
                                    >{state.quantity}</Typography>
                                </Grid>
                                <Grid item>
                                    <IconButton
                                        onClick={() =>
                                            setState({
                                                ...state,
                                                quantity: state.quantity + 1,
                                            })
                                        }
                                        sx={{
                                            backgroundColor: '#E6001F',
                                            color: '#DEE5E9',
                                            '&:hover': {
                                                backgroundColor: '#001D6E',
                                            },
                                        }}
                                    >
                                        <Add />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Box>
                        <Tooltip title={t('pages.product.addToCart')}>
                            <IconButton
                                onClick={handleAddProductToCart}
                                disabled={state.quantity === 0}
                                sx={{
                                    marginTop: '10px',
                                    backgroundColor: '#E6001F',
                                    color: '#DEE5E9',
                                    '&:hover': {
                                        backgroundColor: '#001D6E',
                                    },
                                    '&:disabled': {
                                        backgroundColor: '#FFCDD2',
                                        color: '#DEE5E9',
                                    },
                                }}
                            >
                                <AddShoppingCart />
                            </IconButton>
                        </Tooltip>
                    </Card>
                    <Paper
                        sx={{
                            padding: '16px',
                            backgroundColor: '#DEE5E9',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            marginTop: '20px',
                        }}
                    >
                        <Typography variant='inherit'>{t('pages.product.averageNote')}</Typography>
                        <Rating
                            readOnly
                            precision={0.5}
                            value={product.averageNote}
                            sx={{
                                color: '#E6001F',
                            }}
                        />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Reviews productId={product._id} />
                </Grid>
            </Grid>
        </Container>
    );
};
