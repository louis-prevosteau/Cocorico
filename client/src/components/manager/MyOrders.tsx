import { Circle } from '@mui/icons-material';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Tooltip,
    Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from 'redux/Store';
import { getMyOrders } from 'redux/actions';
import {
    MY_ORDERS_COLUMNS,
    ORDERS_STATUSES_COLORS,
    OrdersStatuses,
} from 'utils/Columns';

export const MyOrders = () => {
    const { orders } = useSelector((state: RootState) => state);
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    useEffect(() => {
        dispatch(getMyOrders());
    }, []);

    return (
        <Paper
            elevation={3}
            sx={{
                p: 2,
                border: '5px solid',
                borderColor: '#DEE5E9 #E6001F #DEE5E9 #001D6E',
            }}
        >
            <Typography
                variant="h5"
                align="center"
                sx={{ mb: 2, color: '#001D6E' }}
            >
                {t('pages.profile.myOrders.title')}
            </Typography>
            <Paper
                elevation={3}
                sx={{ p: 2, bgcolor: '#DEE5E9', overflow: { xs: 'auto' } }}
            >
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            {MY_ORDERS_COLUMNS.map((column) => (
                                <TableCell
                                    key={column}
                                    sx={{ color: '#001D6E' }}
                                >
                                    {t(`columns.myOrders.${column}`)}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.length !== 0 ? (
                            orders.map((order) => (
                                <TableRow key={order._id}>
                                    <TableCell sx={{ color: '#001D6E' }}>
                                        {order._id}
                                    </TableCell>
                                    <TableCell sx={{ color: '#001D6E' }}>
                                        <Tooltip
                                            title={t(
                                                `orderStatuses.${order.status}`,
                                            )}
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
                                        {new Date(
                                            order.createdAt as string,
                                        ).toLocaleDateString('fr-FR')}
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={3}
                                    sx={{ color: '#001D6E' }}
                                >
                                    <Typography variant="body1">
                                        {t('pages.profile.myOrders.noOrders')}
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </Paper>
        </Paper>
    );
};
