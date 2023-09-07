import { Typography } from '@mui/material';
import { CartList } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Store';

export const Cart = () => {
    const { cart } = useSelector((state: RootState) => state);
    const { t } = useTranslation();

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
