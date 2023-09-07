import { ChangeEventHandler, MouseEventHandler, ReactNode } from 'react';
import { Category } from './Category';
import { User } from './User';
import { CollectPoint } from './CollectPoint';
import { Shop } from './Shop';
import { Product } from './Product';
import { Cart } from './Cart';

export interface DialogGroupButtonProps {
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

export interface CartProps {
    cart: Cart;
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

export interface ProductsListProps {
    shopId: string;
}

export interface ReviewsProps {
    productId: string;
}

export interface FormDialogProps extends DialogGroupButtonProps {
    title: string;
    open: boolean;
    handleClose: MouseEventHandler;
    children: ReactNode;
}
