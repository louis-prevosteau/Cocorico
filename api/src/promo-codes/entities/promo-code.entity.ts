import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { DiscountType } from '../constants';
import { Product } from 'src/products/entities/product.entity';

export type PromoCodeDocument = HydratedDocument<PromoCode>;

@Schema({ timestamps: true })
export class PromoCode {
    @Prop({ unique: true, required: true })
    code: string;

    @Prop({ enum: DiscountType, required: true })
    discountType: string;

    @Prop({ required: true })
    discountValue: number;

    @Prop({ nullable: true })
    minOrderAmount: number;

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
        default: [],
    })
    products: Product[];

    @Prop()
    expirationDate: Date;
}

export const PromoCodeSchema = SchemaFactory.createForClass(PromoCode);
