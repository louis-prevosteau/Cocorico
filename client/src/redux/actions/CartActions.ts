import { Dispatch } from '@reduxjs/toolkit';
import * as api from 'api';
import { handleError, handleSuccess } from 'utils/Toasts';
import { GET_CART } from '../ActionTypes';
import { CartItem } from 'models';

export const getCart = () => async (dispatch: Dispatch) => {
    try {
        const cart = (await api.getCart()).data;
        if (!cart) {
            const { data } = await api.createCart();
            dispatch({
                type: GET_CART,
                payload: data,
            });
        } else {
            dispatch({
                type: GET_CART,
                payload: cart,
            });
        }
    } catch (error) {
        handleError(error);
    }
};

export const addProductToCart =
    (cartItem: CartItem) => async (dispatch: Dispatch) => {
        try {
            const { data } = await api.addProductToCart(cartItem);
            dispatch({
                type: GET_CART,
                payload: data,
            });
            handleSuccess('hello world');
        } catch (error) {
            handleError(error);
        }
    };

export const deleteProductFromCart =
    (item: string) => async (dispatch: Dispatch) => {
        try {
            const { data } = await api.deleteProductFromCart(item);
            dispatch({
                type: GET_CART,
                payload: data,
            });
            handleSuccess('hello world');
        } catch (error) {
            handleError(error);
        }
    };

export const clearCart = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.clearCart();
        dispatch({
            type: GET_CART,
            payload: data,
        });
        handleSuccess('hello world');
    } catch (error) {
        handleError(error);
    }
};
