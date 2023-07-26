import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Patch,
    Post,
    Query,
    UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProductsService } from 'src/products/products.service';
import { Role, Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';
import { User } from 'src/users/users.decorator';
import { CreateShopDto } from './dto/create-shop.dto';
import { UpdateShopDto } from './dto/update-shop.dto';
import { ShopsService } from './shops.service';

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
        const { name, description, category, city, zipcode, department } =
            createShopDto;
        if (
            !name ||
            !description ||
            !category ||
            !city ||
            !zipcode ||
            !department
        )
            throw new HttpException(
                'toasts.httpErrors.requiredFields',
                HttpStatus.BAD_REQUEST,
            );
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
        const { name, description, category, city, zipcode, department } =
            updateShopDto;
        if (
            !name ||
            !description ||
            !category ||
            !city ||
            !zipcode ||
            !department
        )
            throw new HttpException(
                'toasts.httpErrors.requiredFields',
                HttpStatus.BAD_REQUEST,
            );
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
