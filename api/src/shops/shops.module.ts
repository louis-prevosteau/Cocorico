import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from 'src/products/products.module';
import { ShopSchema } from './entities/shop.entity';
import { ShopsController } from './shops.controller';
import { ShopsService } from './shops.service';

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
