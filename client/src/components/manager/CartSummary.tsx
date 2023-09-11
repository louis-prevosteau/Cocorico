import { Badge, Typography, Paper } from '@mui/material';
import { CartProps } from 'models';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const CartSummary = ({ cart }: CartProps) => {
    const { t } = useTranslation();
    return (
        <Paper
            elevation={3}
            sx={{
                p: 2,
                border: '5px solid',
                borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
                backgroundColor: '#DEE5E9',
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    color: '#001D6E',
                    fontWeight: 'bolder',
                }}
            >
                {t('pages.cart.summary')}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#001D6E', fontWeight: 'bold' }}>
                {t('pages.cart.cartTotal', { price: cart.price })}
            </Typography>
            <Typography variant="body2" sx={{ color: '#001D6E', marginTop: '8px' }}>
                {t('pages.cart.freeShipping')}
            </Typography>
        </Paper>
    );
};