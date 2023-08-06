import { Grid, Typography } from '@mui/material';
import { GridList, ShopCard } from 'components';
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
        <div>
            <Typography variant="h4" align="center">
                {t('pages.shops.title')}
            </Typography>
            <GridList>
                {shops.map((shop) => (
                    <Grid item key={shop._id}>
                        <NavLink
                            to={`/shops/${shop._id}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <ShopCard shop={shop} />
                        </NavLink>
                    </Grid>
                ))}
            </GridList>
        </div>
    );
};
