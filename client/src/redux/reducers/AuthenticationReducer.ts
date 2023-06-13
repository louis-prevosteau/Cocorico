import { AnyAction } from "@reduxjs/toolkit";
import { AUTH, CLEAR_AUTH } from "redux/ActionTypes";

export const AuthenticationReducer = (state = false, action: AnyAction): boolean => {
    switch (action.type) {
        case AUTH:
            return true;
        case CLEAR_AUTH:
            return false;
        default:
            return state;
    }
};