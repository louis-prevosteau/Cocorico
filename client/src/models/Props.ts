import { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react';
import { Category } from './Category';
import { User } from './User';
import { CollectPoint } from './CollectPoint';
import { Shop } from './Shop';
import { Product } from './Product';

export interface DialogButtonGroupProps {
    handleClick: MouseEventHandler;
    handleCancel: MouseEventHandler;
    actionText: string;
    cancelText: string;
}

export interface GridListProps {
    children: ReactNode;
}

export interface SearchInputProps {
    label: string;
    handleChange: ChangeEventHandler;
}

export interface CommonTableProps {
    name: string;
    columns: string[];
    actions?: ReactNode;
    children: ReactNode;
}

export interface CategoryProps {
    category: Category;
}

export interface CollectPointProps {
    collectPoint: CollectPoint;
}

export interface ProductProps {
    product: Product;
}

export interface ShopProps {
    shop: Shop;
}

export interface UserProps {
    user: User;
}
