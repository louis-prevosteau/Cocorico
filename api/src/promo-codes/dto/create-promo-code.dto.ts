export class CreatePromoCodeDto {
    readonly code: string;
    readonly discountType: string;
    readonly discountValue: number;
    readonly minOrderAmount: number;
    readonly expirationDate: Date;
    readonly shop: string;
}
