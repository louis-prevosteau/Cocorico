import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpException,
    HttpStatus,
    Post,
    Res,
    UseGuards,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { EmailService } from 'src/email/email.service';
import { ForgotPasswordDto } from './dto/forgotPassword.dto';
import { ConfigService } from '@nestjs/config';
import { ResetPasswordDto } from './dto/resetPassword.dto';
import { GoogleAuthGuard } from './guards/google-auth.guard';

const generateResetToken = (id: any) => {
    const expiresIn = '1h';
    const resetToken = jwt.sign({ id }, new ConfigService().get('JWT_SECRET'), {
        expiresIn,
    });
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 1);
    return { resetToken, expiresAt };
};

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
        private readonly emailService: EmailService,
    ) {}

    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        const userExist = await this.authService.isUserExist(registerDto.email);
        if (userExist)
            throw new HttpException(
                'toasts.httpErrors.userExist',
                HttpStatus.BAD_REQUEST,
            );
        const user = await this.usersService.create({
            ...registerDto,
            password: await bcrypt.hash(
                registerDto.password,
                await bcrypt.genSalt(10),
            ),
        });
        await this.emailService.welcome(user);
        const { token } = this.authService.login(user);
        return { user, token };
    }

    @Post('login')
    @HttpCode(200)
    async login(@Body() loginDto: LoginDto) {
        const user = await this.authService.validateUser(loginDto);
        if (!user)
            throw new HttpException(
                'toasts.httpErrors.unknownUser',
                HttpStatus.BAD_REQUEST,
            );
        const { token } = this.authService.login(user);
        return { user, token };
    }

    @Post('forgot-password')
    async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
        const userExist = await this.authService.isUserExist(
            forgotPasswordDto.email,
        );
        if (!userExist)
            throw new HttpException(
                'toasts.httpErrors.unknownUser',
                HttpStatus.BAD_REQUEST,
            );
        const { resetToken, expiresAt } = generateResetToken(userExist._id);
        await userExist.updateOne({
            resetToken,
            expiresAt: expiresAt.toString(),
        });
        await this.emailService.resetPassword(userExist, resetToken);
        return userExist;
    }

    @Post('reset-password')
    async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
        const userExists = await this.usersService.findOne({
            resetToken: resetPasswordDto.resetToken,
        });
        if (!userExists || userExists.expiresAt < new Date().toString())
            throw new HttpException(
                'toasts.httpErrors.invalidToken',
                HttpStatus.BAD_REQUEST,
            );
        const user = await this.usersService.resetPassword(
            { resetToken: resetPasswordDto.resetToken },
            {
                password: await bcrypt.hash(
                    resetPasswordDto.password,
                    await bcrypt.genSalt(10),
                ),
                resetToken: null,
                expiresAt: null,
            },
        );
        return user;
    }

    @Post('google')
    @UseGuards(GoogleAuthGuard)
    async googleLogin() {}

    @Get('google-callback')
    @UseGuards(GoogleAuthGuard)
    async googleLoginCallback(@Res() res: any) {
        return res.redirect('/');
    }
}
