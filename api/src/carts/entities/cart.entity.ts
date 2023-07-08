import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { CartItem } from 'src/cart-items/entities/cart-item.entity';
import { User } from 'src/users/entities/user.entity';

export type CartDocument = HydratedDocument<Cart>;

@Schema({ timestamps: true })
export class Cart {
    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CartItem' }],
        default: [],
    })
    products: CartItem[];

    @Prop({ default: 0 })
    price: number;

    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;
}

export const CartSchema = SchemaFactory.createForClass(Cart);
