import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import { Profile } from 'passport-google-oauth20';

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

    async findOrCreateGoogleUser(profile: Profile) {
        let user = await this.usersService.findOne({
            email: profile.emails[0].value,
        });
        if (!user)
            user = await this.usersService.create({
                username: profile.displayName,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value,
                password: await bcrypt.hash(
                    crypto.randomBytes(64),
                    await bcrypt.genSalt(),
                ),
            });
        return user;
    }
}
