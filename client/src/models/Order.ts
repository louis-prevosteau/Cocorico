import { Cart } from "./Cart";
import { User } from "./User";

export interface Order {
    _id?: string;
    user?: User;
    cart?: Cart;
    price?: number;
    createdAt?: string;
}