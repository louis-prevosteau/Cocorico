import { Grid, Typography } from '@mui/material';
import { FilterByCategory, GridList, ShopCard } from 'components';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AppDispatch, RootState } from 'redux/Store';
import { getShops } from 'redux/actions';

export const Shops = () => {
    const { shops } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getShops());
    }, []);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
                <Typography
                    variant="h4"
                    align="center"
                    sx={{ color: '#001D6E', marginBottom: 3 }}
                >
                    {t('pages.shops.title')}
                </Typography>
                <FilterByCategory />
                <Grid container spacing={2}>
                    {shops.map((shop) => (
                        <Grid item key={shop._id} xs={12} md={6} lg={6}>
                            <NavLink
                                to={`/shops/${shop._id}`}
                                style={{ textDecoration: 'none' }}
                            >
                                <ShopCard shop={shop} />
                            </NavLink>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};
