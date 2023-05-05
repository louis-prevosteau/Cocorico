import { Module, forwardRef } from '@nestjs/common';
import { ShopsService } from './shops.service';
import { ShopsController } from './shops.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ShopSchema } from './entities/shop.entity';
import { ProductsModule } from 'src/products/products.module';

@Module({
  imports: [
    forwardRef(() => ProductsModule),
    MongooseModule.forFeature([{ name: 'Shop', schema: ShopSchema }]),
  ],
  controllers: [ShopsController],
  providers: [ShopsService],
  exports: [ShopsService],
})
export class ShopsModule {}
