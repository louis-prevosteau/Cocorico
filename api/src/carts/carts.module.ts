import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CartItemsModule } from 'src/cart-items/cart-items.module';
import { ProductsModule } from 'src/products/products.module';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import { CartSchema } from './entities/cart.entity';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Cart', schema: CartSchema }]),
        CartItemsModule,
        ProductsModule,
    ],
    controllers: [CartsController],
    providers: [CartsService],
    exports: [CartsService],
})
export class CartsModule {}
