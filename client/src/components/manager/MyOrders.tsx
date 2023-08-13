import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';
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
    }, []);

    return (
        <Paper elevation={3} sx={{ p: 2, bgcolor: '#DEE5E9' }}>
            <Typography variant="h5" align="center" sx={{ mb: 2, color: '#001D6E' }}>
                {t('pages.profile.myOrders.title')}
            </Typography>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        {MY_ORDERS_COLUMNS.map((column) => (
                            <TableCell key={column} sx={{ color: '#001D6E' }}>
                                {t(`columns.myOrders.${column}`)}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.length !== 0 ? (
                        orders.map((order) => (
                            <TableRow key={order._id}>
                                <TableCell sx={{ color: '#001D6E' }}>{order._id}</TableCell>
                                <TableCell sx={{ color: '#001D6E' }}>{order.status}</TableCell>
                                <TableCell sx={{ color: '#001D6E' }}>
                                    {new Date(
                                        order.createdAt as string,
                                    ).toLocaleDateString('fr-FR')}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <Typography variant="body1" sx={{ color: '#001D6E' }}>
                            {t('pages.profile.myOrders.noOrders')}
                        </Typography>
                    )}
                </TableBody>
            </Table>
        </Paper>
    );
};
