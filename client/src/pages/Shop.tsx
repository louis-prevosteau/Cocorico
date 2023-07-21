import { LocationOnOutlined } from '@mui/icons-material';
import { AppBar, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from 'redux/Store';
import { getShop } from 'redux/actions';

export const Shop = () => {
    const { id } = useParams();
    const { shop } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getShop(id as string));
    }, [id]);
    return (
        <div>
            <AppBar position="static" style={{ background: '#DEE5E9' }}>
                <Typography fontWeight={'bold'} align='center' variant='h3' color={'black'}>{shop.name}</Typography>
                <Grid container justifyContent={'flex-start'} direction='column' alignItems={'flex-start'}>
                    <Grid item color={'black'}>
                        <LocationOnOutlined />
                        {shop.city} ({shop.department})
                    </Grid>
                </Grid>
            </AppBar>
        </div>
    );
};
