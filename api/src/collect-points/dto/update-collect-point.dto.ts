import { PartialType } from '@nestjs/mapped-types';
import { CreateCollectPointDto } from './create-collect-point.dto';

export class UpdateCollectPointDto extends PartialType(CreateCollectPointDto) {}
