import { Paper, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const Policy = () => {
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
            <Typography variant="h4" sx={{ mb: 2 }}>
                {t('pages.policy.titles.main')}
            </Typography>
            <Typography sx={{ mb: 3 }}>
                {t('pages.policy.intro.date')}
                <br />
                {t('pages.policy.intro.content')}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
                {t('pages.policy.titles.account')}
            </Typography>
            <Typography sx={{ mb: 3 }}>
                {t('pages.policy.bodies.account1')}
                <br />
                {t('pages.policy.bodies.account2')}
                <br />
                {t('pages.policy.bodies.account3')}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
                {t('pages.policy.titles.use')}
            </Typography>
            <Typography sx={{ mb: 3 }}>
                {t('pages.policy.bodies.use1')}
                <br />
                {t('pages.policy.bodies.use2')}
                <br />
                {t('pages.policy.bodies.use3')}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
                {t('pages.policy.titles.userContent')}
            </Typography>
            <Typography sx={{ mb: 3 }}>
                {t('pages.policy.bodies.userContent1')}
                <br />
                {t('pages.policy.bodies.userContent2')}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
                {t('pages.policy.titles.orders')}
            </Typography>
            <Typography sx={{ mb: 3 }}>
                {t('pages.policy.bodies.orders1')}
                <br />
                {t('pages.policy.bodies.orders2')}
                <br />
                {t('pages.policy.bodies.orders3')}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
                {t('pages.policy.titles.delivery')}
            </Typography>
            <Typography sx={{ mb: 3 }}>
                {t('pages.policy.bodies.delivery1')}
                <br />
                {t('pages.policy.bodies.delivery2')}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
                {t('pages.policy.titles.responsability')}
            </Typography>
            <Typography sx={{ mb: 3 }}>
                {t('pages.policy.bodies.responsability1')}
                <br />
                {t('pages.policy.bodies.responsability2')}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
                {t('pages.policy.titles.policyUpdate')}
            </Typography>
            <Typography sx={{ mb: 3 }}>
                {t('pages.policy.bodies.policyUpdate1')}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
                {t('pages.policy.titles.law')}
            </Typography>
            <Typography sx={{ mb: 3 }}>
                {t('pages.policy.bodies.law1')}
            </Typography>
            <Typography sx={{ mt: 3 }}>
                {t('pages.policy.conclusion')}
            </Typography>
            <Typography sx={{ mt: 3 }}>
                {t('pages.policy.company')} - {t('pages.policy.address')}
                <br />
                {t('pages.policy.contact')} - {t('pages.policy.phone')}
            </Typography>
        </Paper>
    );
};
