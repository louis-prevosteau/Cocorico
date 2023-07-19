import { Dispatch } from '@reduxjs/toolkit';
import * as api from 'api';
import i18next from 'i18next';
import { CreateProduct } from 'models';
import {
    CREATE_PRODUCT,
    DELETE_PRODUCT,
    GET_PRODUCT,
    GET_PRODUCTS,
    UPDATE_PRODUCT,
} from 'redux/ActionTypes';
import { handleError, handleSuccess } from 'utils/Toasts';

export const getProducts = (shop: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getProducts(shop);
        dispatch({
            type: GET_PRODUCTS,
            payload: data,
        });
    } catch (error) {
        handleError(error);
    }
};

export const getProduct = (id: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getProduct(id);
        dispatch({
            type: GET_PRODUCT,
            payload: data,
        });
    } catch (error) {
        handleError(error);
    }
};

export const createProduct =
    (product: CreateProduct) => async (dispatch: Dispatch) => {
        try {
            const { data } = await api.createProduct(product);
            dispatch({
                type: CREATE_PRODUCT,
                payload: data,
            });
            handleSuccess(i18next.t('toasts.create'));
        } catch (error) {
            handleError(error);
        }
    };

export const updateProduct =
    (id: string, product: CreateProduct) => async (dispatch: Dispatch) => {
        try {
            const { data } = await api.updateProduct(id, product);
            dispatch({
                type: UPDATE_PRODUCT,
                payload: data,
            });
            handleSuccess(i18next.t('toasts.update'));
        } catch (error) {
            handleError(error);
        }
    };

export const deleteProduct = (id: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.deleteProduct(id);
        dispatch({
            type: DELETE_PRODUCT,
            payload: data,
        });
        handleSuccess(i18next.t('toasts.delete'));
    } catch (error) {
        handleError(error);
    }
};
