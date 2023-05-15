import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Cart } from 'src/carts/entities/cart.entity';
import { User } from 'src/users/entities/user.entity';
import { OrderStatuses } from '../constants';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true })
export class Order {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'Cart' })
  cart: Cart;

  @Prop({ default: OrderStatuses.Waiting, enum: OrderStatuses })
  status: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
