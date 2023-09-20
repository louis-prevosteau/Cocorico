import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailService {
    constructor(private readonly mailerService: MailerService) {}

    async welcome(user: any) {
        await this.mailerService.sendMail({
            to: user.email,
            subject: 'Bienvenue sur Cocorico',
            template: './welcome',
            context: {
                username: user.username,
            },
        });
    }

    async resetPassword(user: any, token: string) {
        await this.mailerService.sendMail({
            to: user.email,
            subject: 'Réinitialisation de mot de passe',
            template: './resetPassword',
            context: {
                host: new ConfigService().get('CLIENT_URL'),
                token,
            },
        });
    }

    async orderConfirmation(user: any, order: any, cart: any) {
        await this.mailerService.sendMail({
            to: user.email,
            subject: `Votre commande #${order._id}`,
            template: `./orderConfirmation`,
            context: {
                order,
                cart,
            },
        });
    }
}
