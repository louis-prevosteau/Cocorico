import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDocument } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductDocument>,
  ) {}
  create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto);
  }

  findAll(filter = {}) {
    return this.productModel.find(filter);
  }

  findOne(filter) {
    return this.productModel.findOne(filter);
  }

  update(filter, updateProductDto: UpdateProductDto) {
    return this.productModel.findOneAndUpdate(filter, updateProductDto);
  }

  remove(filter) {
    return this.productModel.findOneAndDelete(filter);
  }

  removeMany(filter) {
    return this.productModel.deleteMany(filter);
  }
}
