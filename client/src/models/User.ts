export interface User {
    _id?: string;
    username?: string;
    avatar?: string;
    email?: string;
    password?: string;
    roles?: string[];
    address?: string;
    city?: string;
    zipcode?: string;
    country?: string;
};

export interface Register {
    username?: string;
    email?: string;
    password?: string;
    roles?: string[];
};

export interface Login {
    email?: string;
    password?: string;
};
