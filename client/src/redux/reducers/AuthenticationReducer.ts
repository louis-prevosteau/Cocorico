import { AnyAction } from "@reduxjs/toolkit";
import { AUTH } from "redux/ActionTypes";

export const AuthenticationReducer = (state = false, action: AnyAction): boolean => {
    switch (action.type) {
        case AUTH:
            state = !state
            return state;
        default:
            return state;
    }
};