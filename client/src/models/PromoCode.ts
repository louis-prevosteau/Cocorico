export interface PromoCode {
    _id: string;
    code: string;
    discountType: string;
    discountValue: number;
    minOrderAmount: number;
    expirationDate: Date;
    createdAt: Date;
}

export interface CreatePromoCode {
    code: string;
    discountType: string;
    discountValue: number;
    minOrderAmount?: number;
    expirationDate?: Date;
}

export interface ApplyPromoCode {
    code: string;
    orderAmount: number;
}
