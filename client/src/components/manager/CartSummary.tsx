import { Typography, Paper, Button, Grid } from '@mui/material';
import { CartProps } from 'models';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export const CartSummary = ({ cart }: CartProps) => {
    const { t } = useTranslation();
    return (
        <Paper
            elevation={3}
            sx={{
                p: 2,
                border: '5px solid',
                borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
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
            <Typography
                variant="subtitle1"
                sx={{ color: '#001D6E', fontWeight: 'bold', mt: 8 }}
            >
                {t('pages.cart.cartTotal', {
                    price: Math.abs(
                        cart.price?.toFixed(2) as unknown as number,
                    ),
                })}
            </Typography>
            <Typography
                variant="body2"
                sx={{ color: '#001D6E', marginTop: '8px' }}
            >
                {t('pages.cart.freeShipping')}
            </Typography>
            <Grid container direction={'column'} spacing={1}>
                <Grid item>
                    <NavLink to={'/shops'}>
                        <Button
                            sx={{
                                backgroundColor: '#E6001F',
                                color: '#DEE5E9',
                            }}
                        >
                            {t('pages.cart.continueShopping')}
                        </Button>
                    </NavLink>
                </Grid>
                <Grid item>
                    <Button
                        sx={{
                            backgroundColor: '#001D6E',
                            color: '#DEE5E9',
                        }}
                    >
                        {t('pages.cart.goToOrder')}
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );
};
