import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Shop } from 'src/shops/entities/shop.entity';

export type ProductDocument = HydratedDocument<Product>;

@Schema({ timestamps: true })
export class Product {
    @Prop({ required: true })
    name: string;

    @Prop()
    image: string;

    @Prop({ required: true })
    description: string;

    @Prop({ required: true })
    price: number;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Shop' })
    shop: Shop;

    @Prop({ required: true })
    madeIn: string;

    @Prop({ default: true })
    available: boolean;

    @Prop({ default: false })
    returnable: boolean;

    @Prop({ default: 0, min: 0, max: 5 })
    averageNote: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
