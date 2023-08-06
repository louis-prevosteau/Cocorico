import { Dispatch } from '@reduxjs/toolkit';
import * as api from 'api';
import i18next from 'i18next';
import { CreateReview } from 'models';
import { CREATE_REVIEW, DELETE_REVIEW, GET_REVIEWS } from 'redux/ActionTypes';
import { handleError, handleSuccess } from 'utils/Toasts';

export const getReviews = (product: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getReviews(product);
        dispatch({
            type: GET_REVIEWS,
            payload: data,
        });
    } catch (error) {
        handleError(error);
    }
};

export const createReview =
    (review: CreateReview) => async (dispatch: Dispatch) => {
        try {
            const { data } = await api.createReview(review);
            dispatch({
                type: CREATE_REVIEW,
                payload: data,
            });
            handleSuccess(i18next.t('toasts.review.add'));
        } catch (error) {
            handleError(error);
        }
    };

export const deleteReview = (id: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.deleteReview(id);
        dispatch({
            type: DELETE_REVIEW,
            payload: data,
        });
        handleSuccess(i18next.t('toasts.review.delete'));
    } catch (error) {
        handleError(error);
    }
};
