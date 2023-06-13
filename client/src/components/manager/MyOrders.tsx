import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getMyOrders } from 'redux/actions';
import { MY_ORDERS_COLUMNS } from 'utils/Columns';

export const MyOrders = () => {

    const { orders } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getMyOrders());
    });

    return (
        <Paper elevation={3}>
            <Typography variant='h5' align='center'>{t('pages.profile.myOrders.title')}</Typography>
            <Table size='small'>
                <TableHead>
                    <TableRow>
                        {MY_ORDERS_COLUMNS.map((column) => (
                            <TableCell key={column}>{t(`columns.myOrders.${column}`)}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.length !== 0 ? (orders.map((order) => (
                        <TableRow key={order._id}>
                            <TableCell>{order._id}</TableCell>
                            <TableCell>{order.status}</TableCell>
                            <TableCell>{new Date(order.createdAt as string).toLocaleDateString('fr-FR')}</TableCell>             
                        </TableRow>
                    ))) : <Typography variant='body1'>{t('pages.profile.myOrders.noOrders')}</Typography>}
                </TableBody>
            </Table>
        </Paper>
    );
};