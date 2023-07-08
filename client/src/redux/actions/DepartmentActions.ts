import { Dispatch } from '@reduxjs/toolkit';
import * as api from 'api';
import { GET_DEPARTMENTS } from 'redux/ActionTypes';
import { handleError } from 'utils/Toasts';

export const getDepartments = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getDepartments();
        dispatch({
            type: GET_DEPARTMENTS,
            payload: data,
        });
    } catch (error) {
        handleError(error);
    }
};
