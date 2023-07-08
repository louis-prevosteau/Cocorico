import { Dispatch } from '@reduxjs/toolkit';
import * as api from 'api';
import { CreateShop } from 'models';
import {
    CREATE_SHOP,
    DELETE_SHOP,
    GET_SHOP,
    GET_SHOPS,
    UPDATE_SHOP,
} from 'redux/ActionTypes';
import { handleError, handleSuccess } from 'utils/Toasts';

export const getShops =
    (category = null) =>
    async (dispatch: Dispatch) => {
        try {
            const { data } = await api.getShops(category);
            dispatch({
                type: GET_SHOPS,
                payload: data,
            });
        } catch (error) {
            handleError(error);
        }
    };

export const getMyShops = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getMyShops();
        dispatch({
            type: GET_SHOPS,
            payload: data,
        });
    } catch (error) {
        handleError(error);
    }
};

export const getShop = (id: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getShop(id);
        dispatch({
            type: GET_SHOP,
            payload: data,
        });
    } catch (error) {
        handleError(error);
    }
};

export const createShop = (shop: CreateShop) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.createShop(shop);
        dispatch({
            type: CREATE_SHOP,
            payload: data,
        });
        handleSuccess('hello world');
    } catch (error) {
        handleError(error);
    }
};

export const updateShop =
    (id: string, shop: CreateShop) => async (dispatch: Dispatch) => {
        try {
            const { data } = await api.updateShop(id, shop);
            dispatch({
                type: UPDATE_SHOP,
                payload: data,
            });
            handleSuccess('hello world');
        } catch (error) {
            handleError(error);
        }
    };

export const deleteShop = (id: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.deleteShop(id);
        dispatch({
            type: DELETE_SHOP,
            payload: data,
        });
        handleSuccess('hello world');
    } catch (error) {
        handleError(error);
    }
};
