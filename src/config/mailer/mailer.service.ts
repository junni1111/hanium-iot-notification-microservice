import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerOptions } from '@nestjs-modules/mailer/dist/interfaces/mailer-options.interface';
import { MailerOptionsFactory } from '@nestjs-modules/mailer/dist/interfaces/mailer-options-factory.interface';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

@Injectable()
export class MailerConfigService implements MailerOptionsFactory {
  constructor(private configService: ConfigService) {}

  createMailerOptions(): MailerOptions {
    const MAIL_SERVICE = this.configService.get<string>('MAIL_SERVICE');
    const MAIL_HOST = this.configService.get<string>('MAIL_HOST');
    const MAIL_USER = this.configService.get<string>('MAIL_USER');
    const MAIL_PASSWORD = this.configService.get<string>('MAIL_PASSWORD');
    const MAIL_FROM = this.configService.get<string>('MAIL_FROM');

    return {
      transport: {
        service: MAIL_SERVICE,
        host: MAIL_HOST,
        secure: false,
        port: 587,
        auth: {
          user: MAIL_USER,
          pass: MAIL_PASSWORD,
        },
      },
      defaults: {
        from: `"No Reply" <${MAIL_FROM}>`,
      },
      template: {
        dir: join(__dirname, 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    };
  }
}
