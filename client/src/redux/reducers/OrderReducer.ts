import { AnyAction } from '@reduxjs/toolkit';
import { Order } from 'models';
import {
    CREATE_ORDER,
    DELETE_ORDER,
    GET_ORDER,
    GET_ORDERS,
    UPDATE_STATUS,
} from 'redux/ActionTypes';

export const OrdersReducer = (
    state: Order[] = [],
    action: AnyAction,
): Order[] => {
    switch (action.type) {
        case GET_ORDERS:
            return action.payload;
        case CREATE_ORDER:
            return [...state, action.payload];
        case DELETE_ORDER:
            return state.filter((order) => order._id !== action.payload._id);
        default:
            return state;
    }
};

export const OrderReducer = (state: Order = {}, action: AnyAction): Order => {
    switch (action.type) {
        case GET_ORDER:
        case UPDATE_STATUS:
            return action.payload;
        default:
            return state;
    }
};
