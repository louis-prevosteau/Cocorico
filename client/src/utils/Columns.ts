export const MY_ORDERS_COLUMNS = ['id', 'status', 'created_at'];
export const COLLECT_POINTS_COLUMNS = ['address', 'city', 'zipcode'];
export const USERS_COLUMNS = ['username', 'email', 'address', 'roles'];
export const ORDERS_COLUMNS = [
    'id',
    'username',
    'email',
    'address',
    'status',
    'created_at',
];
export const PROMO_CODES_COLUMNS = [
    'code',
    'discountType',
    'discountValue',
    'expirationDate',
    'createdAt',
];

export type OrdersStatuses =
    | 'waiting'
    | 'cancelled'
    | 'delivered'
    | 'processing'
    | 'shipped';

export const ORDERS_STATUSES_COLORS: Record<OrdersStatuses, string> = {
    waiting: '#717275',
    cancelled: '#D11352',
    processing: '#E3DB3B',
    delivered: '#5ACCE8',
    shipped: '#13D16F',
};
