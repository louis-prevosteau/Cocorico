import { Paper, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Confidential = () => {
    const { t } = useTranslation();
    return (
        <Paper
            elevation={3}
            sx={{
                p: 3,
                mt: 4,
                mb: 4,
                border: '10px solid',
                borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
                borderRadius: 5,
            }}
        >
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
                {t('pages.confidential.titles.main')}
            </Typography>
            <Typography
                fontStyle={'italic'}
                variant="body1"
                sx={{ marginBottom: 2 }}
            >
                {t('pages.confidential.bodies.companyInfos')}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                {t('pages.confidential.titles.host')}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                {t('pages.confidential.bodies.hostInfo')}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                {t('pages.confidential.titles.dev')}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                {t('pages.confidential.bodies.devInfo')}
            </Typography>
            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                {t('pages.confidential.titles.intellectualProp')}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                {t('pages.confidential.bodies.intellectualProp')}
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                {t('pages.confidential.titles.datasCollect')}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                {t('pages.confidential.bodies.datasCollect')}
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                {t('pages.confidential.titles.cookies')}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                {t('pages.confidential.bodies.cookies')}
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                {t('pages.confidential.titles.responsability')}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                {t('pages.confidential.bodies.responsability')}
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                {t('pages.confidential.titles.externalLinks')}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                {t('pages.confidential.bodies.externalLinks')}
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                {t('pages.confidential.titles.juridiction')}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                {t('pages.confidential.bodies.juridiction')}
            </Typography>

            <Typography variant="h6" sx={{ marginBottom: 1 }}>
                {t('pages.confidential.titles.contact')}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                {t('pages.confidential.bodies.contact')}
            </Typography>

            <Typography variant="body2">
                {t('pages.confidential.lastUpdate')} 28 août 2023
            </Typography>
        </Paper>
    );
};
