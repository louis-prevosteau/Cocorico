import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CartItemsModule } from './cart-items/cart-items.module';
import { CartsModule } from './carts/carts.module';
import { CategoriesModule } from './categories/categories.module';
import { CollectPointsModule } from './collect-points/collect-points.module';
import { EmailModule } from './email/email.module';
import { EmailService } from './email/email.service';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';
import { ReviewsModule } from './reviews/reviews.module';
import { ShopsModule } from './shops/shops.module';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
                uri: config.get('MONGO_URI'),
            }),
        }),
        MailerModule.forRoot({
            transport: {
                host: 'localhost',
                port: 1025,
                secure: false,
            },
            defaults: {
                from: '"No Reply" <no-reply@cocorico.fr>',
            },
            template: {
                dir: join(__dirname, '..', 'templates'),
                adapter: new PugAdapter(),
                options: {
                    strict: true,
                },
            },
        }),
        ConfigModule.forRoot({
            isGlobal: true,
        }),
        UsersModule,
        AuthModule,
        CategoriesModule,
        CollectPointsModule,
        ShopsModule,
        ProductsModule,
        CartItemsModule,
        CartsModule,
        OrdersModule,
        ReviewsModule,
        EmailModule,
    ],
    controllers: [AppController],
    providers: [AppService, EmailService],
})
export class AppModule {}
