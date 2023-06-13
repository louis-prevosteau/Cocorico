import { Avatar, Box, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getProfile } from 'redux/actions';

export const ProfileManager = () => {

    const { profile } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    return (
        <Paper elevation={3}>
            <Typography variant='h5' align='center'>{t('pages.profile.infos.title')}</Typography>
            <Avatar src={profile.avatar} alt={profile.username} sx={{ alignItems: 'center', m: 2 }} />
            <Box m={2}>
                <Typography variant='h5'>{t('pages.profile.infos.username')} {profile.username}</Typography>
                <Typography variant='h5'>{t('pages.profile.infos.email')} {profile.email}</Typography>
                <Typography variant='h5'>{t('pages.profile.infos.address')} {profile.address ? profile.address : t('pages.profile.infos.notSpecified')}</Typography>
                <Typography variant='h5'>{t('pages.profile.infos.city')} {profile.city ? profile.city : t('pages.profile.infos.notSpecified')}</Typography>
                <Typography variant='h5'>{t('pages.profile.infos.zipcode')} {profile.zipcode ? profile.zipcode : t('pages.profile.infos.notSpecified')}</Typography>
                <Typography variant='h5'>{t('pages.profile.infos.country')} {profile.country ? profile.country : t('pages.profile.infos.notSpecified')}</Typography>
            </Box>
        </Paper>
    );
};