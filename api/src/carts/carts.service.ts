import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCartDto } from './dto/create-cart.dto';
import { CartDocument } from './entities/cart.entity';

@Injectable()
export class CartsService {
    constructor(
        @InjectModel('Cart') private readonly cartModel: Model<CartDocument>,
    ) {}

    findOne(filter) {
        return this.cartModel
            .findOne(filter)
            .populate({ path: 'products', populate: { path: 'product' } });
    }

    create(createCartDto: CreateCartDto) {
        return this.cartModel.create(createCartDto);
    }

    update(filter, data) {
        return this.cartModel.findOneAndUpdate(filter, data);
    }
}
