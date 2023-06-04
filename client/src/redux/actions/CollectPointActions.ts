import { Dispatch } from '@reduxjs/toolkit'
import * as api from 'api'
import { CollectPoint } from 'models';
import { CREATE_COLLECT_POINT, DELETE_COLLECT_POINT, GET_COLLECT_POINTS, UPDATE_COLLECT_POINT } from 'redux/ActionTypes';
import { handleError, handleSuccess } from 'utils/Toasts';

export const getCollectPoints = (zipcode = null) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.getCollectPoints(zipcode);
        dispatch(
            {
                type: GET_COLLECT_POINTS,
                payload: data
            }
        );
    } catch (error) {
        handleError(error);
    }
};

export const createCollectPoint = (collectPoint: CollectPoint) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.createCollectPoint(collectPoint);
        dispatch(
            {
                type: CREATE_COLLECT_POINT,
                payload: data
            }
        );
        handleSuccess('hello world');
    } catch (error) {
        handleError(error);
    }
};

export const updateCollectPoint = (id: string, collectPoint: CollectPoint) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.upadateCollectPoint(id, collectPoint);
        dispatch(
            {
                type: UPDATE_COLLECT_POINT,
                payload: data
            }
        );
        handleSuccess('hello world');
    } catch (error) {
        handleError(error);
    }
};

export const deleteCollectPoint = (id: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await api.deleteCollectPoint(id);
        dispatch(
            {
                type: DELETE_COLLECT_POINT,
                payload: data
            }
        );
        handleSuccess('hello world');
    } catch (error) {
        handleError(error);
    }
};