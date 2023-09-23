import { Circle } from '@mui/icons-material';
import { Select, MenuItem, Tooltip } from '@mui/material';
import { OrderProps } from 'models';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/Store';
import { updateStatus } from 'redux/actions';
import { ORDERS_STATUSES_COLORS, OrdersStatuses } from 'utils/Columns';

export const OrderStatusSelect = ({ order }: OrderProps) => {
    const [state, setState] = useState({
        order: order,
    });
    const dispatch = useDispatch<AppDispatch>();
    const { t } = useTranslation();

    const handleStatusChange = (e: any) => {
        setState({
            ...state,
            order: { ...state.order, status: e.target.value },
        });
        dispatch(updateStatus(order._id, state.order));
    };

    return (
        <Select value={state.order.status} onChange={handleStatusChange}>
            {Object.keys(ORDERS_STATUSES_COLORS).map((status) => (
                <MenuItem key={status} value={status}>
                    <Tooltip title={t(`orderStatuses.${status}`)}>
                        <Circle
                            fontSize="inherit"
                            sx={{
                                color: ORDERS_STATUSES_COLORS[
                                    status as OrdersStatuses
                                ],
                            }}
                        />
                    </Tooltip>
                </MenuItem>
            ))}
        </Select>
    );
};
