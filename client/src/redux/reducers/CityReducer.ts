import { AnyAction } from '@reduxjs/toolkit';
import { City } from 'models';
import { GET_CITIES } from 'redux/ActionTypes';

export const CitiesReducer = (
    state: City[] = [],
    action: AnyAction,
): City[] => {
    switch (action.type) {
        case GET_CITIES:
            return action.payload;
        default:
            return state;
    }
};
