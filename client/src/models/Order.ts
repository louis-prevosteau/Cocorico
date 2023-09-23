import { CartItem, User } from '.';

export interface Order {
    _id: string;
    user: User;
    products: CartItem[];
    status: string;
    createdAt: string;
}

export interface CreateOrder {
    cart: string;
}
