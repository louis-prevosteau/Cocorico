import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreatePromoCodeDto } from './dto/create-promo-code.dto';
import { InjectModel } from '@nestjs/mongoose';
import { PromoCodeDocument } from './entities/promo-code.entity';
import { Model } from 'mongoose';
import * as cron from 'node-cron';

@Injectable()
export class PromoCodesService implements OnModuleInit {
    constructor(
        @InjectModel('PromoCode')
        private readonly promoCodeModel: Model<PromoCodeDocument>,
    ) {}

    async onModuleInit() {
        cron.schedule('0 0 * * *', async () => {
            await this.promoCodeModel.deleteMany({
                expirationDate: { $lt: new Date() },
            });
        });
    }
    create(createPromoCodeDto: CreatePromoCodeDto) {
        return this.promoCodeModel.create(createPromoCodeDto);
    }

    findAll(filter = {}) {
        return this.promoCodeModel.find(filter);
    }

    findOne(filter) {
        return this.promoCodeModel.findOne(filter);
    }

    deleteOne(filter) {
        return this.promoCodeModel.deleteOne(filter);
    }
}
