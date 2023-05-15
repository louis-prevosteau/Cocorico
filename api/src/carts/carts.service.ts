import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CartDocument } from './entities/cart.entity';

@Injectable()
export class CartsService {
  constructor(
    @InjectModel('Cart') private readonly cartModel: Model<CartDocument>,
  ) {}

  findOne(filter) {
    return this.cartModel.findOne(filter);
  }

  create(createCartDto: CreateCartDto) {
    return this.cartModel.create(createCartDto);
  }

  update(filter, data) {
    return this.cartModel.findOneAndUpdate(filter, data);
  }

  remove(filter) {
    return this.cartModel.findOneAndDelete(filter);
  }
}
