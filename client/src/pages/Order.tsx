import {
    Avatar,
    Box,
    Chip,
    Container,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Paper,
    Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch, RootState } from 'redux/Store';
import { getOrder } from 'redux/actions';
import { ORDERS_STATUSES_COLORS, OrdersStatuses } from 'utils/Columns';

export const Order = () => {
    const { id } = useParams();
    const { order } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        if (id) dispatch(getOrder(id));
    }, [id]);

    return (
        <Container
            sx={{
                backgroundColor: '#DEE5E9',
                padding: '16px',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    p: 2,
                    border: '5px solid',
                    borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        color: '#E6001F',
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '16px',
                    }}
                >
                    <Typography variant="subtitle1">
                        {t('pages.order.title', { order: order._id })}
                    </Typography>
                </Box>
                <Chip
                    label={t(`orderStatuses.${order.status}`)}
                    sx={{
                        backgroundColor:
                            ORDERS_STATUSES_COLORS[
                                order.status as OrdersStatuses
                            ],
                    }}
                />
                <Typography variant="h6">
                    {t('pages.order.deliveryAddress')}
                </Typography>
                <Typography>
                    {order.user?.address} {order.user?.zipcode}{' '}
                    {order.user?.city} {order.user?.country}
                </Typography>
                <Typography
                    variant="h6"
                    sx={{ marginTop: '16px' }}
                ></Typography>
                <List sx={{ width: '100%' }}>
                    {order.products?.map((item) => (
                        <ListItem
                            key={item._id}
                            alignItems="flex-start"
                            secondaryAction={
                                <Typography
                                    variant="subtitle1"
                                    fontWeight="bold"
                                >
                                    {t('pages.order.itemPrice', {
                                        price: item.price,
                                    })}
                                </Typography>
                            }
                        >
                            <ListItemAvatar>
                                <Avatar
                                    src={
                                        item.product?.image
                                            ? item.product?.image
                                            : './images/logo.png'
                                    }
                                    alt={item.product?.name}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                primary={item.product?.name}
                                secondary={t('pages.order.quantity', {
                                    quantity: item.quantity,
                                })}
                            />
                        </ListItem>
                    ))}
                </List>
                <Typography
                    variant="subtitle1"
                    sx={{ color: '#001D6E', fontWeight: 'bold', mt: 8 }}
                >
                    {t('pages.order.total', {
                        price: Math.abs(
                            order.total?.toFixed(2) as unknown as number,
                        ),
                    })}
                </Typography>
            </Paper>
        </Container>
    );
};
