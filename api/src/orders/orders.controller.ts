import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Role, Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';
import { User } from 'src/users/users.decorator';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';
import { EmailService } from 'src/email/email.service';
import { CartsService } from 'src/carts/carts.service';

@Controller('orders')
export class OrdersController {
    constructor(
        private readonly ordersService: OrdersService,
        private readonly emailService: EmailService,
        private readonly cartsService: CartsService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createOrderDto: CreateOrderDto, @User() user) {
        const cart = await this.cartsService.findOne({
            _id: createOrderDto.cart,
        });
        const order = await this.ordersService.create({
            cart,
            ...createOrderDto,
            products: cart.products,
            user,
        });
        await this.emailService.orderConfirmation(user, order, cart);
        return order;
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get()
    findAll(@Query('search') search: string) {
        return this.ordersService.findAll(
            search ? { _id: { $regex: '.*' + search + '.*' } } : {},
        );
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    getMyOrders(@User() user) {
        return this.ordersService.findAll({ user: user._id });
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.ordersService.findOne({ _id: id });
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Patch(':id')
    updateStatus(
        @Param('id') id: string,
        @Body() updateOrderDto: UpdateOrderDto,
    ) {
        return this.ordersService.update({ _id: id }, updateOrderDto);
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.ordersService.remove({ _id: id });
    }
}
