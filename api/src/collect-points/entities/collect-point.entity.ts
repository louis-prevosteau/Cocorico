import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CollectPointDocument = HydratedDocument<CollectPoint>;

@Schema({ timestamps: true })
export class CollectPoint {
  @Prop({ required: true })
  address: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  zipcode: string;
}

export const CollectPointSchema = SchemaFactory.createForClass(CollectPoint);
