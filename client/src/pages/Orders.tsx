import { Paper, TableCell, TableContainer, TableRow } from '@mui/material';
import { CommonTable, OrderStatusSelect } from 'components';
import { t } from 'i18next';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch, RootState } from 'redux/Store';
import { getOrders } from 'redux/actions';
import { ORDERS_COLUMNS } from 'utils/Columns';

export const Orders = () => {
    const { orders } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getOrders());
    }, []);

    return (
        <div>
            <TableContainer
                component={Paper}
                elevation={3}
                sx={{
                    p: 2,
                    bgcolor: '#DEE5E9',
                    maxHeight: 'calc(100vh - 300px)',
                    overflow: 'auto',
                }}
            >
                <CommonTable name={'orders'} columns={ORDERS_COLUMNS}>
                    {orders.map((order) => (
                        <TableRow key={order._id}>
                            <TableCell sx={{ color: '#001D6E' }}>
                                <Link
                                    to={`/orders/${order._id}`}
                                    style={{
                                        textDecoration: 'none',
                                        color: '#001D6E',
                                    }}
                                >
                                    {order._id}
                                </Link>
                            </TableCell>
                            <TableCell sx={{ color: '#001D6E' }}>
                                {order.user.username}
                            </TableCell>
                            <TableCell sx={{ color: '#001D6E' }}>
                                {order.user.email}
                            </TableCell>
                            <TableCell sx={{ color: '#001D6E' }}>
                                {order.user.address} {order.user.zipcode}{' '}
                                {order.user.city} {order.user.country}
                            </TableCell>
                            <TableCell sx={{ color: '#001D6E' }}>
                                <OrderStatusSelect order={order} />
                            </TableCell>
                            <TableCell sx={{ color: '#001D6E' }}>
                                {moment(order.createdAt).format('LLLL')}
                            </TableCell>
                        </TableRow>
                    ))}
                </CommonTable>
            </TableContainer>
        </div>
    );
};
