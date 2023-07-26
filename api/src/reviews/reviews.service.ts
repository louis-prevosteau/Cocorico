import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateReviewDto } from './dto/create-review.dto';
import { ReviewDocument } from './entities/review.entity';

@Injectable()
export class ReviewsService {
    constructor(
        @InjectModel('Review')
        private readonly reviewModel: Model<ReviewDocument>,
    ) {}
    async create(createReviewDto: CreateReviewDto) {
        const review = await this.reviewModel.create(createReviewDto);
        return review.populate('user', '-password');
    }

    findAll(filter = {}) {
        return this.reviewModel.find(filter).populate('user', '-password');
    }

    findOne(filter = {}) {
        return this.reviewModel.findOne(filter);
    }

    remove(filter = {}) {
        return this.reviewModel.findOneAndDelete(filter);
    }

    removeMany(filter = {}) {
        return this.reviewModel.deleteMany(filter);
    }
}
