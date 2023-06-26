import { Dispatch } from '@reduxjs/toolkit';
import * as api from 'api';
import { CREATE_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES, UPDATE_CATEGORY } from '../ActionTypes';
import { CreateCategory } from 'models';
import { handleError, handleSuccess } from 'utils/Toasts';
import i18next from 'i18next';

export const getCategories = () => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getCategories();
        dispatch(
            {
                type: GET_CATEGORIES,
                payload: data
            }
        );
    } catch (error) {
        handleError(error);
    }
};

export const createCategory = (category: CreateCategory) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.createCategory(category);
        dispatch(
            {
                type: CREATE_CATEGORY,
                payload: data
            }
        );
        handleSuccess(i18next.t('toasts.create'));
    } catch (error) {
        handleError(error);
    }
};

export const updateCategory = (id: string, category: CreateCategory) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.upadateCategory(id, category);
        dispatch(
            {
                type: UPDATE_CATEGORY,
                payload: data
            }
        );
        handleSuccess(i18next.t('toasts.update'));
    } catch (error) {
        handleError(error);
    }
};

export const deleteCategory = (id: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.deleteCategory(id);
        dispatch(
            {
                type: DELETE_CATEGORY,
                payload: data
            }
        );
        handleSuccess(i18next.t('toasts.delete'));
    } catch (error) {
        handleError(error);
    }
};