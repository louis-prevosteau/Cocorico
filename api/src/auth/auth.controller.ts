import {
    Body,
    Controller,
    HttpCode,
    HttpException,
    HttpStatus,
    Post,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usersService: UsersService,
    ) {}

    @Post('register')
    async register(@Body() registerDto: RegisterDto) {
        const userExist = await this.authService.isUserExist(registerDto.email);
        if (userExist)
            throw new HttpException(
                'Utilisateur existant',
                HttpStatus.BAD_REQUEST,
            );
        const user = await this.usersService.create({
            ...registerDto,
            password: await bcrypt.hash(
                registerDto.password,
                await bcrypt.genSalt(10),
            ),
        });
        const { token } = this.authService.login(user);
        return { user, token };
    }

    @Post('login')
    @HttpCode(200)
    async login(@Body() loginDto: LoginDto) {
        const user = await this.authService.validateUser(loginDto);
        if (!user)
            throw new HttpException(
                'Utilisateur inconnu',
                HttpStatus.BAD_REQUEST,
            );
        const { token } = this.authService.login(user);
        return { user, token };
    }
}
