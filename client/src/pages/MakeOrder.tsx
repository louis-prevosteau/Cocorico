import {
    Paper,
    List,
    ListItem,
    Typography,
    Divider,
    Box,
    Grid,
    Container,
} from '@mui/material';
import { CompleteOrderForm } from 'components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/Store';

export const MakeOrder = () => {
    const { cart } = useSelector((state: RootState) => state);
    const { t } = useTranslation();

    return (
        <Container maxWidth="md">
            <Typography
                variant="h4"
                align="center"
                sx={{ color: '#001D6E', my: 3 }}
            >
                {t('pages.makeOrder.title')}
            </Typography>
            <Grid
                container
                direction="row"
                spacing={3}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Grid item>
                    <Paper
                        elevation={3}
                        sx={{
                            p: 2,
                            border: '5px solid',
                            borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
                        }}
                    >
                        <List>
                            {cart.products?.map((item) => (
                                <Paper
                                    key={item._id}
                                    elevation={2}
                                    sx={{
                                        marginBottom: '16px',
                                        padding: '16px',
                                        backgroundColor: '#DEE5E9',
                                        border: '1px solid #001D6E',
                                    }}
                                >
                                    <ListItem
                                        alignItems="center" // Centrez les éléments verticalement
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-around',
                                            alignItems: 'center',
                                            width: '100%',
                                            flexDirection: {
                                                xs: 'column',
                                                md: 'row',
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="subtitle2"
                                            sx={{
                                                color: '#001D6E',
                                                mb: { xs: '8px', md: '0' },
                                                textAlign: 'center',
                                            }}
                                        >
                                            {item.product?.name}
                                        </Typography>
                                        <Divider
                                            orientation="vertical"
                                            flexItem
                                            sx={{
                                                backgroundColor: '#001D6E',
                                                margin: {
                                                    xs: '8px',
                                                    md: '0 8px',
                                                },
                                                display: {
                                                    xs: 'none',
                                                    md: 'block',
                                                },
                                            }}
                                        />
                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                color: '#001D6E',
                                                textAlign: 'center',
                                            }}
                                        >
                                            {t('pages.cart.quantity')}{' '}
                                            {item.quantity}
                                        </Typography>
                                        <Divider
                                            orientation="vertical"
                                            flexItem
                                            sx={{
                                                backgroundColor: '#001D6E',
                                                margin: {
                                                    xs: '8px',
                                                    md: '0 8px',
                                                },
                                                display: {
                                                    xs: 'none',
                                                    md: 'block',
                                                },
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#001D6E',
                                                    fontWeight: 'bold',
                                                }}
                                            >
                                                {item.price} €
                                            </Typography>
                                        </Box>
                                    </ListItem>
                                </Paper>
                            ))}
                        </List>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: '#001D6E',
                                fontWeight: 'bold',
                                mt: 8,
                                textAlign: 'center',
                            }}
                        >
                            {t('pages.cart.cartTotal', {
                                price: Math.abs(
                                    cart.price?.toFixed(2) as unknown as number,
                                ),
                            })}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                color: '#001D6E',
                                marginTop: '8px',
                                textAlign: 'center',
                            }}
                        >
                            {t('pages.cart.freeShipping')}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <CompleteOrderForm cart={cart} />
                </Grid>
            </Grid>
        </Container>
    );
};
