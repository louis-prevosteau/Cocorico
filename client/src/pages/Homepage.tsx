import { Paper, Typography, Grid, Button, Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export const Homepage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                backgroundColor: '#DEE5E9',
                padding: '1rem 0',
                m: 3
            }}
        >
            <Container>
                <Paper
                    elevation={3}
                    sx={{
                        padding: '2rem',
                        backgroundColor: 'white',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        border: '10px solid',
                        borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
                        borderRadius: 5
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            color: '#001D6E',
                            marginBottom: '1rem',
                        }}
                    >
                        {t('pages.homepage.welcome')}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: '#001D6E',
                            marginBottom: '2rem',
                        }}
                    >
                        {t('pages.homepage.description')}
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate('/shops')}
                        sx={{
                            backgroundColor: '#E6001F',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: '#DEE5E9',
                                color: '#E6001F',
                            },
                        }}
                    >
                        {t('pages.homepage.ourShops')}
                    </Button>
                </Paper>
                <Grid
                    container
                    spacing={2}
                    sx={{
                        marginTop: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <Box
                        component={'img'}
                        alt="banner1"
                        src="./images/banner1.png"
                        width="85%"
                    />
                </Grid>
            </Container>
        </Box>
    );
};
