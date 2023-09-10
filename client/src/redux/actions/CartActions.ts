import { Dispatch } from '@reduxjs/toolkit';
import * as api from 'api';
import { handleError, handleSuccess } from 'utils/Toasts';
import { ADD_CART_ITEM, GET_CART, REMOVE_CART_ITEM } from '../ActionTypes';
import { AddCartItem } from 'models';
import i18next from 'i18next';

export const getCart = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getCart();
        dispatch({
            type: GET_CART,
            payload: data,
        });
    } catch (error) {
        handleError(error);
    }
};

export const createCart = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.createCart();
        dispatch({
            type: GET_CART,
            payload: data,
        });
    } catch (error) {
        handleError(error);
    }
};

export const addProductToCart =
    (cartItem: AddCartItem) => async (dispatch: Dispatch) => {
        try {
            const { data } = await api.addProductToCart(cartItem);
            handleSuccess(i18next.t('toasts.cart.addProduct'));
            dispatch({
                type: ADD_CART_ITEM,
                payload: data,
            });
        } catch (error) {
            handleError(error);
        }
    };

export const deleteProductFromCart =
    (item: string) => async (dispatch: Dispatch) => {
        try {
            const { data } = await api.deleteProductFromCart(item);
            handleSuccess(i18next.t('toasts.cart.deleteProduct'));
            dispatch({
                type: REMOVE_CART_ITEM,
                payload: data,
            });
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
    } catch (error) {
        handleError(error);
    }
};
