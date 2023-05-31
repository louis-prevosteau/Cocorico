import { Dispatch } from '@reduxjs/toolkit';
import * as api from 'api';
import { CREATE_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES, UPDATE_CATEGORY } from '../ActionTypes';
import { Category } from 'models';
import { handleError, handleSuccess } from 'utils/toasts';

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

export const createCategory = (category: Category) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.createCategory(category);
        dispatch(
            {
                type: CREATE_CATEGORY,
                payload: data
            }
        );
        handleSuccess('hello word');
    } catch (error) {
        handleError(error);
    }
};

export const updateCategory = (id: string, category: Category) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.upadateCategory(id, category);
        dispatch(
            {
                type: UPDATE_CATEGORY,
                payload: data
            }
        );
        handleSuccess('hello word');
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
        handleSuccess('hello word');
    } catch (error) {
        handleError(error);
    }
};