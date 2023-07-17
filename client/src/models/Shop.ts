import { Category } from './Category';
import { User } from './User';

export interface Shop {
    _id: string;
    name: string;
    image: string;
    description: string;
    category: Category;
    city: string;
    zipcode: string;
    department: string;
    owner: User;
}

export interface CreateShop {
    name: string;
    image?: string;
    description: string;
    category: string;
    city: string;
    zipcode: string;
    department: string;
}
