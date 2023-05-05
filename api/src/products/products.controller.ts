import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';
import { User } from 'src/users/users.decorator';
import { ShopsService } from 'src/shops/shops.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly shopsService: ShopsService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Seller)
  @Post()
  async create(@Body() createProductDto: CreateProductDto, @User() user) {
    const shop = await this.shopsService.findOne({
      _id: createProductDto.shop,
    });
    if (shop.owner !== user._id)
      throw new HttpException(
        'You are not the owner of this shop',
        HttpStatus.UNAUTHORIZED,
      );
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll(@Query('shop') shop) {
    return this.productsService.findAll({ shop });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne({ _id: id });
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Seller)
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
    @User() user,
  ) {
    const product = await this.productsService.findOne({ _id: id });
    const shop = await this.shopsService.findOne({
      _id: product.shop,
    });
    if (shop.owner !== user._id)
      throw new HttpException(
        'You are not the owner of this shop',
        HttpStatus.UNAUTHORIZED,
      );
    return this.productsService.update({ _id: id }, updateProductDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Seller)
  @Delete(':id')
  async remove(@Param('id') id: string, @User() user) {
    const product = await this.productsService.findOne({ _id: id });
    const shop = await this.shopsService.findOne({ _id: product.shop });
    if (shop.owner !== user._id)
      throw new HttpException(
        'You are not the owner of this shop',
        HttpStatus.UNAUTHORIZED,
      );
    return this.productsService.remove({ _id: id });
  }
}
