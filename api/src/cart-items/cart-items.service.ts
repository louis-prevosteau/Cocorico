import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart-item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CartItemDocument } from './entities/cart-item.entity';

@Injectable()
export class CartItemsService {
    constructor(
        @InjectModel('CartItem')
        private readonly cartItemModel: Model<CartItemDocument>,
    ) {}

    findOne(filter) {
        return this.cartItemModel.findOne(filter);
    }

    create(createCartItemDto: CreateCartItemDto) {
        return this.cartItemModel.create(createCartItemDto);
    }

    remove(filter) {
        return this.cartItemModel.findOneAndDelete(filter);
    }
}
