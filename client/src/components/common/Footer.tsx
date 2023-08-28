import { LocalShipping, CreditCard } from '@mui/icons-material';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                backgroundColor: '#E6001F',
                pt: 1,
                pb: 2,
                top: 'auto',
                width: '100%',
                position: 'relative',
            }}
            component={'footer'}
        >
            <Container maxWidth="md">
                <div style={{ flexGrow: 1 }}>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item xs={12} sm={4}>
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                            >
                                <LocalShipping
                                    sx={{
                                        fontSize: 28,
                                        marginRight: '0.5rem',
                                        color: 'white',
                                    }}
                                />
                                <Typography variant="body2" color="white">
                                    {t('footer.freeShipping')}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Grid
                                container
                                justifyContent="center"
                                alignItems="center"
                            >
                                <CreditCard
                                    sx={{
                                        fontSize: 28,
                                        marginRight: '0.5rem',
                                        color: 'white',
                                    }}
                                />
                                <Typography variant="body2" color="white">
                                    {t('footer.securePayment')}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography
                                variant="body2"
                                align="center"
                                color={'white'}
                                justifyContent={'center'}
                            >
                                {t('footer.credit', {
                                    year: new Date().getFullYear(),
                                })}
                            </Typography>
                            <Typography
                                variant="body2"
                                align="center"
                                color={'white'}
                                mt={1}
                            >
                                <a
                                    href="/policy"
                                    style={{
                                        color: 'white',
                                        textDecoration: 'underline',
                                    }}
                                >
                                    {t('footer.cguLink')}
                                </a>{' '}
                                <a
                                    href="/confidential"
                                    style={{
                                        color: 'white',
                                        textDecoration: 'underline',
                                    }}
                                >
                                    {t('footer.confidential')}
                                </a>{' '}
                                | {t('footer.contactEmail')} :
                                support@cocorico.fr | {t('footer.contactPhone')}{' '}
                                : 06 66 66 66 66
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </Box>
    );
};
