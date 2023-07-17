import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CollectPointsController } from './collect-points.controller';
import { CollectPointsService } from './collect-points.service';
import { CollectPointSchema } from './entities/collect-point.entity';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'CollectPoint', schema: CollectPointSchema },
        ]),
    ],
    controllers: [CollectPointsController],
    providers: [CollectPointsService],
})
export class CollectPointsModule {}
