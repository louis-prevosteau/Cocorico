import { Product } from './Product';

export interface Cart {
    _id: string;
    products: CartItem[];
    price: number;
}

export interface CartItem {
    _id: string;
    product: Product;
    quantity: number;
    price: number;
}

export interface AddCartItem {
    product: string;
    quantity: number;
}
