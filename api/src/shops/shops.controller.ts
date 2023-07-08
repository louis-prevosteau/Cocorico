import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UseGuards,
    Query,
} from '@nestjs/common';
import { ShopsService } from './shops.service';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { User } from 'src/users/users.decorator';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';
import { ProductsService } from 'src/products/products.service';

@Controller('shops')
export class ShopsController {
    constructor(
        private readonly shopsService: ShopsService,
        private readonly productsService: ProductsService,
    ) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Seller)
    @Post()
    create(@Body() createShopDto: CreateShopDto, @User() user) {
        return this.shopsService.create({ ...createShopDto, owner: user._id });
    }

    @Get()
    findAll(@Query('category') category) {
        return this.shopsService.findAll(category ? { category } : {});
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Seller)
    @Get('my-shops')
    getMyShops(@User() user) {
        return this.shopsService.findAll({ owner: user._id });
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.shopsService.findOne({ _id: id });
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Seller)
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateShopDto: UpdateShopDto) {
        return this.shopsService.update({ _id: id }, updateShopDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Seller)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.productsService.removeMany({ shop: id });
        return this.shopsService.remove({ _id: id });
    }
}
