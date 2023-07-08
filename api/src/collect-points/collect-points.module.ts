import { Module } from '@nestjs/common';
import { CollectPointsService } from './collect-points.service';
import { CollectPointsController } from './collect-points.controller';
import { MongooseModule } from '@nestjs/mongoose';
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
