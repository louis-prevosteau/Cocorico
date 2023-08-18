import * as api from 'api';
import { Dispatch } from '@reduxjs/toolkit';
import { ForgotPassword, Login, Register, ResetPassword } from 'models';
import { AUTH, CLEAR_AUTH } from '../ActionTypes';
import { handleError, handleSuccess } from 'utils/Toasts';
import i18next from 'i18next';
import { CredentialResponse } from '@react-oauth/google';

export const register =
    (registerData: Register) => async (dispatch: Dispatch) => {
        try {
            const { data } = await api.register(registerData);
            dispatch({
                type: AUTH,
            });
            localStorage.setItem('token', data.token);
            handleSuccess(i18next.t('toasts.authentication'));
        } catch (error) {
            handleError(error);
        }
    };

export const login = (loginData: Login) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.login(loginData);
        dispatch({
            type: AUTH,
        });
        localStorage.setItem('token', data.token);
        handleSuccess(i18next.t('toasts.authentication'));
    } catch (error) {
        handleError(error);
    }
};

export const googleLogin =
    (credentialResponse: CredentialResponse) => async (dispatch: Dispatch) => {
        try {
            await api.googleLogin();
            dispatch({
                type: AUTH,
            });
            localStorage.setItem(
                'token',
                credentialResponse.credential as string,
            );
        } catch (error) {
            handleError(error);
        }
    };

export const googlecallback = () => async (dispatch: Dispatch) => {
    try {
        await api.googlecallback();
    } catch (error) {
        handleError(error);
    }
};

export const logout = () => (dispatch: Dispatch) => {
    try {
        dispatch({
            type: CLEAR_AUTH,
        });
        localStorage.removeItem('token');
        handleSuccess(i18next.t('toasts.logout'));
    } catch (error) {
        handleError(error);
    }
};

export const forgotPassword =
    (data: ForgotPassword) => async (dispatch: Dispatch) => {
        try {
            await api.forgotPassword(data);
            handleSuccess(i18next.t('toasts.resetMailSend'));
        } catch (error) {
            handleError(error);
        }
    };

export const resetPassword =
    (data: ResetPassword) => async (dispatch: Dispatch) => {
        try {
            await api.resetPassword(data);
            handleSuccess(i18next.t('toasts.update'));
        } catch (error) {
            handleError(error);
        }
    };
