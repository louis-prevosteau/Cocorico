import { Category } from "./Category";
import { User } from "./User";

export interface Shop {
    _id?: string;
    name?: string;
    image?: string;
    description?: string;
    category?: Category;
    city?: string;
    department?: string;
    owner?: User;
};