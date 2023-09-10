import { Delete } from '@mui/icons-material';
import {
    Box,
    Divider,
    IconButton,
    List,
    ListItem,
    Paper,
    Typography,
} from '@mui/material';
import { CartProps } from 'models';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { deleteProductFromCart } from 'redux/actions';

export const CartList = ({ cart }: CartProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleDeleteFromCart = (id: string) => {
        dispatch(deleteProductFromCart(id));
    };

    return (
        <Paper
            elevation={3}
            sx={{
                p: 2,
                border: '5px solid',
                borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
            }}
        >
            {cart.products?.length !== 0 ? (
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
                                alignItems="flex-start"
                                secondaryAction={
                                    <IconButton
                                        onClick={() =>
                                            handleDeleteFromCart(item._id)
                                        }
                                    >
                                        <Delete
                                            sx={{
                                                color: '#E6001F',
                                            }}
                                        />
                                    </IconButton>
                                }
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-around',
                                    alignItems: 'center',
                                    width: '100%',
                                    flexDirection: { xs: 'column', md: 'row' },
                                }}
                            >
                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        color: '#001D6E',
                                        mb: { xs: '8px', md: '0' },
                                        textAlign: {
                                            xs: 'center',
                                            md: 'initial',
                                        },
                                    }}
                                >
                                    {item.product?.name}
                                </Typography>
                                <Divider
                                    orientation="vertical"
                                    flexItem
                                    sx={{
                                        backgroundColor: '#001D6E',
                                        margin: { xs: '8px', md: '0 8px' },
                                        display: { xs: 'none', md: 'block' },
                                    }}
                                />
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        color: '#001D6E',
                                        textAlign: {
                                            xs: 'center',
                                            md: 'initial',
                                        },
                                    }}
                                >
                                    {t('pages.cart.quantity')} {item.quantity}
                                </Typography>
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
            ) : (
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: 'center',
                        color: '#001D6E',
                        fontWeight: 'bolder',
                    }}
                >
                    {t('pages.cart.empty')}
                </Typography>
            )}
        </Paper>
    );
};
