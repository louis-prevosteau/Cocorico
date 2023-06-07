import { AppBar, BottomNavigation, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {

    const { t } = useTranslation();

    return (
        <AppBar position="static" style={{top: "auto", bottom: 0}}>
            <BottomNavigation style={{ background: '#E6001F' }}>
                <Typography color='inherit'>{t('footer.credit', { year: new Date().getFullYear()})}</Typography>
            </BottomNavigation>
        </AppBar>
    );
};