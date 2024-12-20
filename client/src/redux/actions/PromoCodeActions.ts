import { Dispatch } from '@reduxjs/toolkit';
import * as api from 'api';
import { ApplyPromoCode, CreatePromoCode } from 'models';
import {
    APPLY_PROMO_CODE,
    CREATE_PROMO_CODE,
    GET_PROMO_CODE,
    GET_PROMO_CODES,
} from 'redux/ActionTypes';
import { handleError } from 'utils/Toasts';

export const getPromoCodes = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getPromoCodes();
        dispatch({
            type: GET_PROMO_CODES,
            payload: data,
        });
    } catch (error) {
        handleError(error);
    }
};

export const getPromoCode = (id: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getPromoCode(id);
        dispatch({
            type: GET_PROMO_CODE,
            payload: data,
        });
    } catch (error) {
        handleError(error);
    }
};

export const createPromoCode =
    (promoCode: CreatePromoCode) => async (dispatch: Dispatch) => {
        try {
            const { data } = await api.createPromoCode(promoCode);
            dispatch({
                type: CREATE_PROMO_CODE,
                payload: data,
            });
        } catch (error) {
            handleError(error);
        }
    };

export const applyPromoCode =
    (applyData: ApplyPromoCode) => async (dispatch: Dispatch) => {
        try {
            const { data } = await api.applyPromoCode(applyData);
            dispatch({
                type: APPLY_PROMO_CODE,
                payload: data,
            });
        } catch (error) {
            handleError(error);
        }
    };
