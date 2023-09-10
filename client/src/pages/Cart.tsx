import { Typography } from '@mui/material';
import { CartList } from 'components';
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
                style={{ color: '#001D6E', marginBottom: '1rem' }}
            >
                {t('pages.cart.title')}
            </Typography>
            <CartList cart={cart} />
        </div>
    );
};
