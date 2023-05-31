import { Dispatch } from '@reduxjs/toolkit';
import * as api from 'api';
import { Product } from 'models';
import { CREATE_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, GET_PRODUCTS, UPDATE_PRODUCT } from 'redux/ActionTypes';
import { handleError, handleSuccess } from 'utils/toasts';

export const getProducts = (shop: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getProducts(shop);
        dispatch(
            {
                type: GET_PRODUCTS,
                payload: data
            }
        );
    } catch (error) {
        handleError(error);        
    }
};

export const getProduct = (id: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getProduct(id);
        dispatch(
            {
                type: GET_PRODUCT,
                payload: data
            }
        );
    } catch (error) {
        handleError(error);        
    }
};

export const createProduct = (product: Product) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.createProduct(product);
        dispatch(
            {
                type: CREATE_PRODUCT,
                payload: data
            }
        );
        handleSuccess('hello world');
    } catch (error) {
        handleError(error);        
    }
};

export const updateProduct = (id: string, product: Product) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.updateProduct(id, product);
        dispatch(
            {
                type: UPDATE_PRODUCT,
                payload: data
            }
        );
        handleSuccess('hello world');
    } catch (error) {
        handleError(error);        
    }
};

export const deleteProduct = (id: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.deleteProduct(id);
        dispatch(
            {
                type: DELETE_PRODUCT,
                payload: data
            }
        );
        handleSuccess('hello world');
    } catch (error) {
        handleError(error);        
    }
};