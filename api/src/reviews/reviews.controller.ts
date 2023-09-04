import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Query,
    UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ProductsService } from 'src/products/products.service';
import { User } from 'src/users/users.decorator';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {
    constructor(
        private readonly reviewsService: ReviewsService,
        private readonly productsService: ProductsService,
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() createReviewDto: CreateReviewDto, @User() user) {
        const review = await this.reviewsService.create({
            ...createReviewDto,
            user: user._id,
        });
        const reviews = await this.reviewsService.findAll({
            product: createReviewDto.product,
        });
        let note = 0;
        for (const review of reviews) note += review.note;
        await this.productsService.update(
            { _id: createReviewDto.product },
            {
                averageNote: parseFloat(
                    Math.round(note / reviews.length).toFixed(1),
                ),
            },
        );
        return review;
    }

    @Get()
    findAll(@Query('product') product) {
        return this.reviewsService.findAll({ product });
    }

    @UseGuards(JwtAuthGuard)
    @Get('me')
    getMyReviews(@User() user) {
        return this.reviewsService.findAll({ user: user._id });
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async remove(@Param('id') id: string) {
        const review = await this.reviewsService.remove({ _id: id });
        const reviews = await this.reviewsService.findAll({
            product: review.product,
        });
        let note = 0;
        for (const review of reviews) note += review.note;
        let averageNote = 0;
        if (reviews.length > 0) {
            averageNote = parseFloat((note / reviews.length).toFixed(1));
        }
        await this.productsService.update(
            { _id: review.product },
            {
                averageNote: averageNote,
            },
        );
        return review;
    }
}
