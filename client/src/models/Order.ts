import { CartItem, User } from '.';

export interface Order {
    _id: string;
    user: User;
    products: CartItem[];
    status: string;
    total: number;
    createdAt: string;
}

export interface CreateOrder {
    cart: string;
}
