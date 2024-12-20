import { AnyAction } from '@reduxjs/toolkit';
import { PromoCode } from 'models';
import {
    CREATE_PROMO_CODE,
    GET_PROMO_CODE,
    GET_PROMO_CODES,
} from 'redux/ActionTypes';

export const PromoCodesReudcer = (
    state: PromoCode[] = [],
    action: AnyAction,
): PromoCode[] => {
    switch (action.type) {
        case GET_PROMO_CODES:
            return action.payload;
        case CREATE_PROMO_CODE:
            return [...state, action.payload];
        default:
            return state;
    }
};

export const PromoCodeReducer = (
    state: PromoCode = {} as PromoCode,
    action: AnyAction,
): PromoCode => {
    switch (action.type) {
        case GET_PROMO_CODE:
            return action.payload;
        default:
            return state;
    }
};
