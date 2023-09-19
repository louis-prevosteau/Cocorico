import { Circle } from '@mui/icons-material';
import {
    Paper,
    TableCell,
    TableContainer,
    TableRow,
    Tooltip,
} from '@mui/material';
import { CommonTable } from 'components';
import { t } from 'i18next';
import moment from 'moment';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getOrders } from 'redux/actions';
import {
    ORDERS_COLUMNS,
    ORDERS_STATUSES_COLORS,
    OrdersStatuses,
} from 'utils/Columns';

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
                                {order._id}
                            </TableCell>
                            <TableCell sx={{ color: '#001D6E' }}>
                                {order.user.username}
                            </TableCell>
                            <TableCell sx={{ color: '#001D6E' }}>
                                {order.user.email}
                            </TableCell>
                            <TableCell sx={{ color: '#001D6E' }}>
                                {order._id}
                            </TableCell>
                            <TableCell sx={{ color: '#001D6E' }}>
                                <Tooltip
                                    title={t(`orderStatuses.${order.status}`)}
                                >
                                    <Circle
                                        fontSize="inherit"
                                        sx={{
                                            color: ORDERS_STATUSES_COLORS[
                                                order.status as OrdersStatuses
                                            ],
                                        }}
                                    />
                                </Tooltip>
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
