import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
import { GoogleConstants } from '../constants';

export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor(private readonly authService: AuthService) {
        super({
            clientID: GoogleConstants.clientID,
            clientSecret: GoogleConstants.secret,
            callbackURL: GoogleConstants.callbackURL,
            passReqToCallback: true,
            scope: ['profile', 'email'],
        });
    }

    async validate(
        request: any,
        accessToken: string,
        refreshToken: string,
        profile: Profile,
        done: VerifyCallback,
    ) {
        const user = await this.authService.findOrCreateGoogleUser(profile);
        done(null, user);
    }
}
