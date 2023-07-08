import { Injectable } from '@nestjs/common';
import { CreateCollectPointDto } from './dto/create-collect-point.dto';
import { UpdateCollectPointDto } from './dto/update-collect-point.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CollectPointDocument } from './entities/collect-point.entity';

@Injectable()
export class CollectPointsService {
    constructor(
        @InjectModel('CollectPoint')
        private readonly collectPointModel: Model<CollectPointDocument>,
    ) {}

    create(createCollectPointDto: CreateCollectPointDto) {
        return this.collectPointModel.create(createCollectPointDto);
    }

    findAll(filter = {}) {
        return this.collectPointModel.find(filter).sort('zipcode');
    }

    update(filter, updateCollectPointDto: UpdateCollectPointDto) {
        return this.collectPointModel.findOneAndUpdate(
            filter,
            updateCollectPointDto,
        );
    }

    remove(filter) {
        return this.collectPointModel.findOneAndDelete(filter);
    }
}
