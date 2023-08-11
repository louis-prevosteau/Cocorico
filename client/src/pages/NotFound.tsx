import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const NotFound = () => {
    const { t } = useTranslation();

    return (
        <Box sx={{ backgroundColor: '#DEE5E9', maxHeight: '100%' }}>
            <Container>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    sx={{ height: '100vh' }}
                >
                    <Grid item xs={12} sm={8} md={6} lg={4}>
                        <div
                            style={{
                                textAlign: 'center',
                                padding: '2rem',
                            }}
                        >
                            <Typography
                                variant="h1"
                                style={{
                                    fontSize: '3rem',
                                    color: '#001D6E',
                                }}
                            >
                                {t('pages.notFound.title')}
                            </Typography>
                            <Typography
                                variant="body1"
                                style={{ marginTop: '1rem' }}
                            >
                                {t('pages.notFound.message')}
                            </Typography>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};
