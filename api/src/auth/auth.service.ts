import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    async isUserExist(email: string) {
        const user = await this.usersService.findOne({ email });
        if (user) return user;
        return null;
    }

    async validateUser(loginDto: LoginDto) {
        const user = await this.usersService.findOne({ email: loginDto.email });
        if (user) {
            const isMatch = await bcrypt.compare(
                loginDto.password,
                user.password,
            );
            if (isMatch) return user;
        }
        return null;
    }

    login(user: any) {
        const payload = { sub: user._id };
        return { token: this.jwtService.sign(payload) };
    }
}
