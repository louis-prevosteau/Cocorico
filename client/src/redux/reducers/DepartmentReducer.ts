import { AnyAction } from '@reduxjs/toolkit';
import { Department } from 'models';
import { GET_DEPARTMENTS } from 'redux/ActionTypes';

export const DepartmentsReducer = (
    state: Department[] = [],
    action: AnyAction,
): Department[] => {
    switch (action.type) {
        case GET_DEPARTMENTS:
            return action.payload;
        default:
            return state;
    }
};
