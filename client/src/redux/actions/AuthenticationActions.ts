import * as api from 'api';
import { Dispatch } from "@reduxjs/toolkit";
import { Login, Register } from "models";
import { AUTH } from '../ActionTypes';
import { handleError } from 'utils/toasts';
import { toast } from 'react-toastify';

export const register = (registerData: Register) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.register(registerData);
        dispatch(
            {
                type: AUTH
            }
        );
        localStorage.setItem('token', data.token);
        toast.success('Authentification réussie');
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
        toast.success('Authentification réussie');
    } catch (error) {
        handleError(error);
    }
};