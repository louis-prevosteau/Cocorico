import { AnyAction } from "@reduxjs/toolkit";
import { Cart } from "models";
import { GET_CART } from "redux/ActionTypes";

export const CartReducer = (state: Cart = {}, action: AnyAction): Cart => {
    switch (action.type) {
        case GET_CART:
            return action.payload;
        default:
            return state;
    }
};