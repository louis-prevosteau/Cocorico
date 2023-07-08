import { AnyAction } from '@reduxjs/toolkit';
import { User } from 'models';
import { GET_PROFILE, GET_USERS, UPDATE_PROFILE } from 'redux/ActionTypes';

export const UsersReducer = (state: User[] = [], action: AnyAction): User[] => {
    switch (action.type) {
        case GET_USERS:
            return action.payload;
        default:
            return state;
    }
};

export const ProfileReducer = (state: User = {}, action: AnyAction): User => {
    switch (action.type) {
        case GET_PROFILE:
        case UPDATE_PROFILE:
            return action.payload;
        default:
            return state;
    }
};
