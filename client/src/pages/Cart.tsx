import { Container, Typography } from '@mui/material';
import { CartList, CartSummary } from 'components';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getCart } from 'redux/actions';

export const Cart = () => {
    const { cart } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getCart());
    }, []);

    return (
        <div>
            <Typography
                variant="h4"
                align="center"
                sx={{ color: '#001D6E', marginBottom: '1rem' }}
            >
                {t('pages.cart.title')}
            </Typography>
            <Container
                sx={{
                    mt: 15,
                    mb: 21,
                    display: 'flex',
                    flexDirection: {
                        md: 'row',
                        xs: 'column',
                    },
                    justifyContent: 'space-around',
                    minHeight: '39.4vh',
                    backgroundColor: '#DEE5E9',
                    padding: '20px',
                    border: '20px solid',
                    borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
                }}
            >
                <CartList cart={cart} />
                <CartSummary cart={cart} />
            </Container>
        </div>
    );
};
