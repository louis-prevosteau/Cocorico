import { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react';
import { Category } from './Category';
import { User } from './User';
import { CollectPoint } from './CollectPoint';
import { Shop } from './Shop';

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

export interface CategoryProps {
    category: Category;
}

export interface CollectPointProps {
    collectPoint: CollectPoint;
}

export interface ShopProps {
    shop: Shop;
}

export interface UserProps {
    user: User;
}
