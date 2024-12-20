import { Module } from '@nestjs/common';
import { PromoCodesService } from './promo-codes.service';
import { PromoCodesController } from './promo-codes.controller';
import { ProductsModule } from 'src/products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { PromoCodeSchema } from './entities/promo-code.entity';

@Module({
    imports: [
        ProductsModule,
        MongooseModule.forFeature([
            { name: 'PromoCode', schema: PromoCodeSchema },
        ]),
    ],
    controllers: [PromoCodesController],
    providers: [PromoCodesService],
})
export class PromoCodesModule {}
