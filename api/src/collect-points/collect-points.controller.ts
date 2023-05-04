import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Query,
} from '@nestjs/common';
import { CollectPointsService } from './collect-points.service';
import { CreateCollectPointDto } from './dto/create-collect-point.dto';
import { UpdateCollectPointDto } from './dto/update-collect-point.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role, Roles } from 'src/roles/roles.decorator';

@Controller('collect-points')
export class CollectPointsController {
  constructor(private readonly collectPointsService: CollectPointsService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Post()
  create(@Body() createCollectPointDto: CreateCollectPointDto) {
    return this.collectPointsService.create(createCollectPointDto);
  }

  @Get()
  findAll(@Query('zipcode') zipcode) {
    return this.collectPointsService.findAll(
      zipcode ? { zipcode: { $regex: '.*' + zipcode + '.*' } } : {},
    );
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCollectPointDto: UpdateCollectPointDto,
  ) {
    return this.collectPointsService.update(+id, updateCollectPointDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.collectPointsService.remove(+id);
  }
}
