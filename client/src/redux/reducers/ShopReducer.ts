import { AnyAction } from '@reduxjs/toolkit';
import { Shop } from 'models';
import {
    CREATE_SHOP,
    DELETE_SHOP,
    GET_SHOP,
    GET_SHOPS,
    UPDATE_SHOP,
} from 'redux/ActionTypes';

export const ShopsReducer = (state: Shop[] = [], action: AnyAction): Shop[] => {
    switch (action.type) {
        case GET_SHOPS:
            return action.payload;
        case CREATE_SHOP:
            return [...state, action.payload];
        case DELETE_SHOP:
            return state.filter((shop) => shop._id !== action.payload._id);
        default:
            return state;
    }
};

export const ShopReducer = (
    state: Shop = {
        _id: '',
        name: '',
        image: '',
        description: '',
        category: {
            _id: '',
            name: '',
        },
        city: '',
        zipcode: '',
        department: '',
        owner: {},
    },
    action: AnyAction,
): Shop => {
    switch (action.type) {
        case GET_SHOP:
        case UPDATE_SHOP:
            return action.payload;
        default:
            return state;
    }
};
