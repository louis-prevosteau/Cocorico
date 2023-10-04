import { CartItem } from 'src/cart-items/entities/cart-item.entity';

export class CreateOrderDto {
    readonly user: string;
    readonly cart: string;
    readonly products: CartItem[];
    readonly total: number;
    readonly status: string;
}
