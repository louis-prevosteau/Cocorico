import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderSchema } from './entities/order.entity';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { EmailModule } from 'src/email/email.module';
import { CartsModule } from 'src/carts/carts.module';

@Module({
    imports: [
        CartsModule,
        EmailModule,
        MongooseModule.forFeature([{ name: 'Order', schema: OrderSchema }]),
    ],
    controllers: [OrdersController],
    providers: [OrdersService],
})
export class OrdersModule {}
