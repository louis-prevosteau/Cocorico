import { Test, TestingModule } from '@nestjs/testing';
import { CollectPointsController } from './collect-points.controller';
import { CollectPointsService } from './collect-points.service';

describe('CollectPointsController', () => {
  let controller: CollectPointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CollectPointsController],
      providers: [CollectPointsService],
    }).compile();

    controller = module.get<CollectPointsController>(CollectPointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
