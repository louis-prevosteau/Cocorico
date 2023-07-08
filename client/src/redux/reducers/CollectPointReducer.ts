import { AnyAction } from '@reduxjs/toolkit';
import { CollectPoint } from 'models';
import {
    CREATE_COLLECT_POINT,
    DELETE_COLLECT_POINT,
    GET_COLLECT_POINTS,
    UPDATE_COLLECT_POINT,
} from 'redux/ActionTypes';

export const CollectPointsReducer = (
    state: CollectPoint[] = [],
    action: AnyAction,
): CollectPoint[] => {
    switch (action.type) {
        case GET_COLLECT_POINTS:
            return action.payload;
        case CREATE_COLLECT_POINT:
            return [...state, action.payload];
        case UPDATE_COLLECT_POINT:
            return state.map((collectPoint) =>
                collectPoint._id === action.payload._id
                    ? action.payload
                    : collectPoint,
            );
        case DELETE_COLLECT_POINT:
            return state.filter(
                (collectPoint) => collectPoint._id !== action.payload._id,
            );
        default:
            return state;
    }
};
