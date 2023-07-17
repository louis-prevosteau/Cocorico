import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartItemsService } from './cart-items.service';
import { CartItemSchema } from './entities/cart-item.entity';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'CartItem', schema: CartItemSchema },
        ]),
    ],
    providers: [CartItemsService],
    exports: [CartItemsService],
})
export class CartItemsModule {}
