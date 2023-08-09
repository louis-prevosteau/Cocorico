import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

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
}
