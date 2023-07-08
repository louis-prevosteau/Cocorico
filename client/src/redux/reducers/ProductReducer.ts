import { AnyAction } from '@reduxjs/toolkit';
import { Product } from 'models';
import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCT,
    GET_PRODUCTS,
    UPDATE_PRODUCT,
} from 'redux/ActionTypes';

export const ProductsReducer = (
    state: Product[] = [],
    action: AnyAction,
): Product[] => {
    switch (action.type) {
        case GET_PRODUCTS:
            return action.payload;
        case CREATE_PRODUCT:
            return [...state, action.payload];
        case DELETE_PRODUCT:
            return state.filter(
                (product) => product._id !== action.payload._id,
            );
        default:
            return state;
    }
};

export const ProductReducer = (
    state: Product = {},
    action: AnyAction,
): Product => {
    switch (action.type) {
        case GET_PRODUCT:
            return action.payload;
        case UPDATE_PRODUCT:
            return action.payload;
        default:
            return state;
    }
};
