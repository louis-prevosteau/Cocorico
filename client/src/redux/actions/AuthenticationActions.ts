import * as api from 'api';
import { Dispatch } from "@reduxjs/toolkit";
import { Login, Register } from "models";
import { AUTH, CLEAR_AUTH } from '../ActionTypes';
import { handleError, handleSuccess } from 'utils/Toasts';
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
        handleSuccess(i18next.t('toasts.authentication'));
    } catch (error) {
        handleError(error);
    }
};

export const login = (loginData: Login) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.login(loginData);
        dispatch(
            {
                type: AUTH
            }
        );
        localStorage.setItem('token', data.token);
        handleSuccess(i18next.t('toasts.authentication'));
    } catch (error) {
        handleError(error);
    }
};

export const logout = () => (dispatch: Dispatch) => {
    try {
        dispatch(
            {
                type: CLEAR_AUTH
            }
        );
        localStorage.removeItem('token');
        handleSuccess(i18next.t('toasts.logout'));
    } catch (error) {
        handleError(error);
    }
};