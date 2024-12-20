import {
    Controller,
    Get,
    Post,
    Body,
    HttpException,
    HttpStatus,
    UseGuards,
} from '@nestjs/common';
import { PromoCodesService } from './promo-codes.service';
import { CreatePromoCodeDto } from './dto/create-promo-code.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles, Role } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';

@Controller('promo-codes')
export class PromoCodesController {
    constructor(private readonly promoCodesService: PromoCodesService) {}

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Post()
    create(@Body() createPromoCodeDto: CreatePromoCodeDto) {
        const promoCode = this.promoCodesService.findOne({
            code: createPromoCodeDto.code,
        });
        if (promoCode)
            throw new HttpException(
                'toasts.httpErrors.promoCodeExists',
                HttpStatus.BAD_REQUEST,
            );
        return this.promoCodesService.create(createPromoCodeDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get()
    findAll() {
        return this.promoCodesService.findAll();
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(Role.Admin)
    @Get(':id')
    findOne(id: string) {
        return this.promoCodesService.findOne({ _id: id });
    }

    @UseGuards(JwtAuthGuard)
    @Post('apply')
    async apply(
        @Body('code') code: string,
        @Body('orderAmount') orderAmount: number,
    ) {
        const promoCode = await this.promoCodesService.findOne({
            code,
            expirationDate: { $gt: new Date() },
        });
        if (!promoCode)
            throw new HttpException(
                'toasts.httpErrors.promoCodeNotFound',
                HttpStatus.NOT_FOUND,
            );
        if (promoCode.expirationDate && promoCode.expirationDate < new Date()) {
            throw new HttpException(
                'toasts.httpErrors.promoCodeExpired',
                HttpStatus.FORBIDDEN,
            );
        }
        if (orderAmount < promoCode.minOrderAmount) {
            throw new HttpException(
                'toasts.httpErrors.orderAmountNotMet',
                HttpStatus.FORBIDDEN,
            );
        }
        let discountedAmount = orderAmount;
        if (promoCode.discountType === 'percentage')
            discountedAmount -= (orderAmount * promoCode.discountValue) / 100;
        else if (promoCode.discountType === 'fixed')
            discountedAmount -= promoCode.discountValue;
        return Math.max(discountedAmount, 0);
    }
}
