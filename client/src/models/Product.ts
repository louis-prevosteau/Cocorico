import { Shop } from "./Shop";

export interface Product {
    _id?: string;
    name?: string;
    image?: string;
    description?: string;
    price?: number;
    shop?: Shop | string;
    madeIn?: string;
    available?: boolean;
    returnable?: boolean;
}