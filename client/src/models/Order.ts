import { Cart, User } from '.';

export interface Order {
    _id?: string;
    user?: User;
    cart?: Cart;
    status?: string;
    createdAt?: string;
}
