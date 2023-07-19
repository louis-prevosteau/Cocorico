import { Shop } from './Shop';

export interface Product {
    _id?: string;
    name?: string;
    image?: string;
    description?: string;
    price?: number;
    shop?: Shop;
    madeIn?: string;
    available?: boolean;
    returnable?: boolean;
}

export interface CreateProduct {
    name: string;
    image?: string;
    description: string;
    price: number;
    shop: string;
    madeIn: string;
    available: boolean;
    returnable: boolean;
}
