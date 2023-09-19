import { Button, Paper, Typography } from '@mui/material';
import { UpdateProfileDialog } from 'components';
import { CartProps } from 'models';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from 'redux/Store';
import { clearCart, createOrder } from 'redux/actions';

export const CompleteOrderForm = ({ cart }: CartProps) => {
    const { profile } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleOrder = () => {
        dispatch(createOrder({ cart: cart._id }));
        dispatch(clearCart());
        navigate('/');
    };

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
                variant="h5"
                align="center"
                sx={{ mb: 2, color: '#001D6E' }}
            >
                {t('pages.makeOrder.deliveryInfos')}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#001D6E' }}>
                {t('pages.profile.infos.email')} {profile.email}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#001D6E' }}>
                {t('pages.profile.infos.phone')}{' '}
                {profile.phone
                    ? profile.phone
                    : t('pages.profile.infos.notSpecified')}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#001D6E' }}>
                {t('pages.profile.infos.address')}{' '}
                {profile.address
                    ? profile.address
                    : t('pages.profile.infos.notSpecified')}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#001D6E' }}>
                {t('pages.profile.infos.city')}{' '}
                {profile.city
                    ? profile.city
                    : t('pages.profile.infos.notSpecified')}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#001D6E' }}>
                {t('pages.profile.infos.zipcode')}{' '}
                {profile.zipcode
                    ? profile.zipcode
                    : t('pages.profile.infos.notSpecified')}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: '#001D6E' }}>
                {t('pages.profile.infos.country')}{' '}
                {profile.country
                    ? profile.country
                    : t('pages.profile.infos.notSpecified')}
            </Typography>
            <UpdateProfileDialog user={profile} />
            <Button
                onClick={handleOrder}
                variant="contained"
                sx={{
                    backgroundColor: '#001D6E',
                    '&:hover': { backgroundColor: '#001D6E' },
                }}
            >
                {t('pages.makeOrder.validate')}
            </Button>
        </Paper>
    );
};
