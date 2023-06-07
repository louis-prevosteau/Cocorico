import { Grid } from '@mui/material';
import { GridList, ShopCard } from 'components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getShops } from 'redux/actions';

export const Shops = () => {

    const { shops } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getShops());
    }, []);

    return (
        <GridList>
            {shops.map((shop) => (
                <Grid item key={shop._id}>
                    <ShopCard shop={shop} />
                </Grid>
            ))}
        </GridList>
    );
};