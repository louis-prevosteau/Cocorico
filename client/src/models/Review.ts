import { User } from "./User";

export interface Review {
    _id: string;
    title: string;
    content: string;
    note: number;
    user: User;
    createdAt: string
}

export interface CreateReview {
    title: string;
    content: string;
    note: number;
    product: string;
}