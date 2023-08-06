import { AnyAction } from '@reduxjs/toolkit';
import { Review } from 'models';
import { CREATE_REVIEW, DELETE_REVIEW, GET_REVIEWS } from 'redux/ActionTypes';

export const ReviewsReducer = (
    state: Review[] = [],
    action: AnyAction,
): Review[] => {
    switch (action.type) {
        case GET_REVIEWS:
            return action.payload;
        case CREATE_REVIEW:
            return [...state, action.payload];
        case DELETE_REVIEW:
            return state.filter((review) => review._id !== action.payload._id);
        default:
            return state;
    }
};
