import { ConfigService } from '@nestjs/config';

export const JwtConstants = {
    token: `${new ConfigService().get('JWT_SECRET')}`,
};

export const GoogleConstants = {
    clientID: `${new ConfigService().get('GOOGLE_CLIENT_ID')}`,
    secret: `${new ConfigService().get('GOOGLE_CLIENT_SECRET')}`,
    callbackURL: 'http://localhost:8080/auth/google-callback',
};
