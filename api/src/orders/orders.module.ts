import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './entities/order.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { EmailModule } from 'src/email/email.module';
import { CartsModule } from 'src/carts/carts.module';
import { CartItemsModule } from 'src/cart-items/cart-items.module';

@Module({
    imports: [
        CartsModule,
        CartItemsModule,
        EmailModule,
        MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
    ],
    controllers: [OrdersController],
    providers: [OrdersService],
})
export class OrdersModule {}
