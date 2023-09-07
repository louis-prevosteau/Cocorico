import { Delete } from '@mui/icons-material';
import {
    Box,
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
        <List sx={{ maxHeight: 300 }}>
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
                {cart.products?.length !== 0 ? (
                    cart.products?.map((item) => (
                        <Paper
                            key={item._id}
                            elevation={2}
                            sx={{
                                marginBottom: '16px',
                                padding: '16px',
                                backgroundColor: 'white',
                            }}
                        >
                            <ListItem>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography variant="subtitle1">
                                        {item.product?.name}
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Typography variant="body2">
                                        Quantity: {item.quantity}
                                    </Typography>
                                    <Typography variant="body2">
                                        Price: ${item.price}
                                    </Typography>
                                    <IconButton
                                        onClick={() =>
                                            handleDeleteFromCart(item._id)
                                        }
                                        aria-label="Delete"
                                        color="primary"
                                    >
                                        <Delete />
                                    </IconButton>
                                </Box>
                            </ListItem>
                        </Paper>
                    ))
                ) : (
                    <Typography
                        variant="h1"
                        style={{
                            fontSize: '3rem',
                            color: '#001D6E',
                        }}
                    >
                        {t('pages.cart.empty')}
                    </Typography>
                )}
            </Paper>
        </List>
    );
};
