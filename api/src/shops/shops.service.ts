import { Injectable } from '@nestjs/common';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ShopDocument } from './entities/shop.entity';

@Injectable()
export class ShopsService {
    constructor(
        @InjectModel('Shop') private readonly shopModel: Model<ShopDocument>,
    ) {}
    async create(createShopDto: CreateShopDto) {
        const shop = await this.shopModel.create(createShopDto);
        return shop.populate('category owner', '-password');
    }

    findAll(filter = {}) {
        return this.shopModel
            .find(filter)
            .populate('category owner', '-password');
    }

    findOne(filter) {
        return this.shopModel
            .findOne(filter)
            .populate('category owner', '-password');
    }

    update(filter, updateShopDto: UpdateShopDto) {
        return this.shopModel
            .findOneAndUpdate(filter, updateShopDto)
            .populate('category owner', '-password');
    }

    remove(filter) {
        return this.shopModel.findOneAndDelete(filter);
    }
}
