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
import { ReviewsService } from 'src/reviews/reviews.service';
import { Role, Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService,
        private readonly reviewsService: ReviewsService,
    ) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Seller)
    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        const { name, description, price, madeIn } = createProductDto;
        if (!name || !description || !price || !madeIn)
            throw new HttpException(
                'toasts.httpErrors.requiredFields',
                HttpStatus.BAD_REQUEST,
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
    ) {
        const { name, description, price, madeIn } = updateProductDto;
        if (!name || !description || !price || !madeIn)
            throw new HttpException(
                'toasts.httpErrors.requiredFields',
                HttpStatus.BAD_REQUEST,
            );
        return await this.productsService.update({ _id: id }, updateProductDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Seller)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        await this.reviewsService.removeMany({ product: id });
        return this.productsService.remove({ _id: id });
    }
}
