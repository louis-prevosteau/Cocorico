import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { OrderStatuses } from '../constants';
import { CartItem } from 'src/cart-items/entities/cart-item.entity';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
    @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User;

    @Prop({
        type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CartItem' }],
    })
    products: CartItem[];

    @Prop()
    total: number;

    @Prop({ default: OrderStatuses.Waiting, enum: OrderStatuses })
    status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
