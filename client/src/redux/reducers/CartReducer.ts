import { AnyAction } from '@reduxjs/toolkit';
import { Cart } from 'models';
import { ADD_CART_ITEM, GET_CART, REMOVE_CART_ITEM } from 'redux/ActionTypes';

export const CartReducer = (
    state: Cart = {} as Cart,
    action: AnyAction,
): Cart => {
    switch (action.type) {
        case GET_CART:
            return action.payload;
        case ADD_CART_ITEM:
            return {
                ...state,
                products: [...state.products, action.payload],
                price: (state.price += action.payload.price),
            };
        case REMOVE_CART_ITEM:
            return {
                ...state,
                products: state.products.filter(
                    (item) => item._id !== action.payload._id,
                ),
                price: (state.price -= action.payload.price),
            };
        default:
            return state;
    }
};
