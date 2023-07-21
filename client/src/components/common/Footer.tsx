import { AppBar, BottomNavigation, Box, Container, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ backgroundColor: '#E6001F', p: 6 }} component={'footer'}>
            <Container maxWidth='md'>
                <Typography variant='body2' align='center' color={'white'}>
                    {t('footer.credit', {
                        year: new Date().getFullYear(),
                    })}
                </Typography>
            </Container>
        </Box>
    );
};
