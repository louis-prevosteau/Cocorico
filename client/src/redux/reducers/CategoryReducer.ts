import { AnyAction } from '@reduxjs/toolkit';
import { Category } from 'models';
import {
    CREATE_CATEGORY,
    DELETE_CATEGORY,
    GET_CATEGORIES,
    UPDATE_CATEGORY,
} from 'redux/ActionTypes';

export const CategoriesReducer = (
    state: Category[] = [],
    action: AnyAction,
): Category[] => {
    switch (action.type) {
        case GET_CATEGORIES:
            return action.payload;
        case CREATE_CATEGORY:
            return [...state, action.payload];
        case UPDATE_CATEGORY:
            return state.map((category) =>
                category._id === action.payload._id ? action.payload : category,
            );
        case DELETE_CATEGORY:
            return state.filter(
                (category) => category._id !== action.payload._id,
            );
        default:
            return state;
    }
};
