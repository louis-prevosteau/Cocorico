import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from 'src/roles/roles.decorator';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
    @Prop({ required: true })
    username: string;

    @Prop()
    avatar: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: [Role.Member] })
    roles: Role[];

    @Prop()
    address: string;

    @Prop()
    city: string;

    @Prop()
    zipcode: string;

    @Prop()
    country: string;

    @Prop()
    resetToken: string;

    @Prop()
    expiresAt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
