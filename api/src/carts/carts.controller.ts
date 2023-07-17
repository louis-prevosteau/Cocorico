import {
    Body,
    Controller,
    Get,
    Param,
    Patch,
    Post,
    UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CartItemsService } from 'src/cart-items/cart-items.service';
import { CreateCartItemDto } from 'src/cart-items/dto/create-cart-item.dto';
import { ProductsService } from 'src/products/products.service';
import { User } from 'src/users/users.decorator';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';

@Controller('carts')
export class CartsController {
    constructor(
        private readonly cartsService: CartsService,
        private readonly cartItemsService: CartItemsService,
        private readonly productsService: ProductsService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    getCart(@User() user) {
        return this.cartsService.findOne({ user: user._id });
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() createCartDto: CreateCartDto, @User() user) {
        return this.cartsService.create({ ...createCartDto, user });
    }

    @UseGuards(JwtAuthGuard)
    @Patch('add-product')
    async addProduct(
        @User() user,
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
        const cart = await this.cartsService.findOne({ user: user._id });
        return this.cartsService.update(
            { user: user._id },
            {
                $push: { products: (await item)._id },
                price: (cart.price += (await item).price),
            },
        );
    }

    @UseGuards(JwtAuthGuard)
    @Patch('del-product/:item')
    async deleteProduct(@User() user, @Param('item') itemId) {
        this.cartItemsService.remove({ _id: itemId });
        const cart = await this.cartsService.findOne({ user: user._id });
        const item = await this.cartItemsService.findOne({ _id: itemId });
        await this.cartItemsService.remove({ _id: itemId });
        return this.cartsService.update(
            { user: user._id },
            {
                $pull: { products: itemId },
                price: (cart.price -= item.price),
            },
        );
    }

    @UseGuards(JwtAuthGuard)
    @Patch('clear')
    async clearCart(@User() user) {
        const cart = await this.cartsService.findOne({ user: user._id });
        for (const product of cart.products)
            await this.cartItemsService.remove({ _id: product });
        return this.cartsService.update(
            { user: user._id },
            { products: [], price: 0 },
        );
    }
}
