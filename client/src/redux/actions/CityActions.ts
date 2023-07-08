import { Dispatch } from '@reduxjs/toolkit';
import * as api from 'api';
import { GET_CITIES } from 'redux/ActionTypes';
import { handleError } from 'utils/Toasts';

export const getCitiesByZipcode =
    (zipcode: string) => async (dispatch: Dispatch) => {
        try {
            const { data } = await api.getCitiesByZipcode(zipcode);
            dispatch({
                type: GET_CITIES,
                payload: data,
            });
        } catch (error) {
            handleError(error);
        }
    };
