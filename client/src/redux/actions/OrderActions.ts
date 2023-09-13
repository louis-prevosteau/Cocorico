import { Dispatch } from '@reduxjs/toolkit';
import * as api from 'api';
import i18next from 'i18next';
import { CreateOrder, Order } from 'models';
import {
    CREATE_ORDER,
    DELETE_ORDER,
    GET_ORDER,
    GET_ORDERS,
    UPDATE_STATUS,
} from 'redux/ActionTypes';
import { handleError, handleSuccess } from 'utils/Toasts';

export const getOrders =
    (search = null) =>
    async (dispatch: Dispatch) => {
        try {
            const { data } = await api.getOrders(search);
            dispatch({
                type: GET_ORDERS,
                payload: data,
            });
        } catch (error) {
            handleError(error);
        }
    };

export const getMyOrders = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getMyOrders();
        dispatch({
            type: GET_ORDERS,
            payload: data,
        });
    } catch (error) {
        handleError(error);
    }
};

export const getOrder = (id: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getOrder(id);
        dispatch({
            type: GET_ORDER,
            payload: data,
        });
    } catch (error) {
        handleError(error);
    }
};

export const createOrder =
    (order: CreateOrder) => async (dispatch: Dispatch) => {
        try {
            const { data } = await api.createOrder(order);
            dispatch({
                type: CREATE_ORDER,
                payload: data,
            });
            handleSuccess(i18next.t('toasts.order.passed'));
        } catch (error) {
            handleError(error);
        }
    };

export const updateStatus =
    (id: string, order: Order) => async (dispatch: Dispatch) => {
        try {
            const { data } = await api.updateStatus(id, order);
            dispatch({
                type: UPDATE_STATUS,
                payload: data,
            });
            handleSuccess(i18next.t('toasts.order.statusUpdated'));
        } catch (error) {
            handleError(error);
        }
    };

export const deleteOrder = (id: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.deleteOrder(id);
        dispatch({
            type: DELETE_ORDER,
            payload: data,
        });
        handleSuccess(i18next.t('toasts.order.deleted'));
    } catch (error) {
        handleError(error);
    }
};
