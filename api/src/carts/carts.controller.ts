import {
  Controller,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { CartItemsService } from 'src/cart-items/cart-items.service';
import { User } from 'src/users/users.decorator';
import { CreateCartItemDto } from 'src/cart-items/dto/create-cart-item.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProductsService } from 'src/products/products.service';

@Controller('carts')
export class CartsController {
  constructor(
    private readonly cartsService: CartsService,
    private readonly cartItemsService: CartItemsService,
    private readonly productsService: ProductsService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCartDto: CreateCartDto, @User() user) {
    return this.cartsService.create({ ...createCartDto, user });
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/add-product')
  async addProduct(
    @Param('id') id,
    @Body() createCartItemDto: CreateCartItemDto,
  ) {
    const product = await this.productsService.findOne({
      _id: createCartItemDto.product,
    });
    const item = (
      await this.cartItemsService.create({
        ...createCartItemDto,
        price: product.price * createCartItemDto.quantity,
      })
    ).populate('product');
    const cart = await this.cartsService.findOne({ _id: id });
    return this.cartsService.update(
      { _id: id },
      {
        $push: { products: (await item)._id },
        price: (cart.price += (await item).price),
      },
    );
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/del-product/:item-id')
  async delProduct(@Param('id') id, @Param('item-id') itemId) {
    this.cartItemsService.remove({ _id: itemId });
    const cart = await this.cartsService.findOne({ _id: id });
    const item = await this.cartItemsService.findOne({ _id: itemId });
    return this.cartsService.update(
      { _id: id },
      {
        $pull: { products: itemId },
        price: (cart.price -= item.price),
      },
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    const cart = await this.cartsService.findOne({ _id: id });
    for (const product of cart.products)
      this.cartItemsService.remove({ _id: product });
    return this.cartsService.remove({ _id: id });
  }
}
