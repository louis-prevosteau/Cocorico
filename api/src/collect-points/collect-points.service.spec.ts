import { Test, TestingModule } from '@nestjs/testing';
import { CollectPointsService } from './collect-points.service';

describe('CollectPointsService', () => {
  let service: CollectPointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CollectPointsService],
    }).compile();

    service = module.get<CollectPointsService>(CollectPointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
