import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderDocument } from './entities/order.entity';

@Injectable()
export class OrdersService {
    constructor(
        @InjectModel('Order') private readonly orderModel: Model<OrderDocument>,
    ) {}

    create(createOrderDto: CreateOrderDto) {
        return this.orderModel.create(createOrderDto);
    }

    findAll(filter = {}) {
        return this.orderModel
            .find(filter)
            .populate('user')
            .populate({
                path: 'cart',
                populate: { path: 'products', populate: { path: 'product' } },
            })
            .sort('-createdAt');
    }

    findOne(filter) {
        return this.orderModel
            .findOne(filter)
            .populate('user')
            .populate({
                path: 'cart',
                populate: { path: 'products', populate: { path: 'product' } },
            });
    }

    update(filter, updateOrderDto: UpdateOrderDto) {
        return this.orderModel.findOneAndUpdate(filter, updateOrderDto);
    }

    remove(filter) {
        return this.orderModel.findOneAndDelete(filter);
    }
}
