import * as api from 'api';
import { Dispatch } from "@reduxjs/toolkit";
import { Login, Register } from "models";
import { AUTH } from '../ActionTypes';
import { handleError, handleSuccess } from 'utils/toasts';
import i18next from 'i18next';

export const register = (registerData: Register) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.register(registerData);
        dispatch(
            {
                type: AUTH
            }
        );
        localStorage.setItem('token', data.token);
        handleSuccess(i18next.t('toasts.authentication.success'));
    } catch (error) {
        handleError(error);
    }
};

export const login = (loginData: Login) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.register(loginData);
        dispatch(
            {
                type: AUTH
            }
        );
        localStorage.setItem('token', data.token);
        handleSuccess(i18next.t('toasts.authentication.success'));
    } catch (error) {
        handleError(error);
    }
};