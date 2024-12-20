import { Box, Typography } from '@mui/material';
import { PromoCodesTable } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const PromoCodes = () => {
    const { t } = useTranslation();

    return (
        <Box p={3} bgcolor="#DEE5E9">
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                style={{ color: '#001D6E' }}
            >
                {t('pages.promoCodes.title')}
            </Typography>
            <Box mb={2}>
                <PromoCodesTable />
            </Box>
        </Box>
    );
};
