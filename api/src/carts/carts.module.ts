import { Module } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CartSchema } from './entities/cart.entity';
import { CartItemsModule } from 'src/cart-items/cart-items.module';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Cart', schema: CartSchema }]),
    CartItemsModule,
    ProductsModule,
  ],
  controllers: [CartsController],
  providers: [CartsService],
})
export class CartsModule {}
