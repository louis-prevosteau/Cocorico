import { Dispatch } from '@reduxjs/toolkit';
import * as api from 'api';
import { User } from 'models';
import { GET_PROFILE, GET_USERS, UPDATE_PROFILE } from 'redux/ActionTypes';
import { handleError, handleSuccess } from 'utils/Toasts';

export const getUsers = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getUsers();
        dispatch(
            {
                type: GET_USERS,
                payload: data
            }
        );
    } catch (error) {
        handleError(error);     
    }
};

export const getProfile = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getProfile();
        dispatch(
            {
                type: GET_PROFILE,
                payload: data
            }
        );
    } catch (error) {
        handleError(error);     
    }
};

export const updateProfile = (profile: User) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.updateProfile(profile);
        dispatch(
            {
                type: UPDATE_PROFILE,
                payload: data
            }
        );
        handleSuccess('hello world');
    } catch (error) {
        handleError(error);     
    }
};