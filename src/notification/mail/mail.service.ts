import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendMail(email: string) {
    try {
      const MAIL_USER = this.configService.get<string>('MAIL_USER');
      const result = await this.mailerService.sendMail({
        to: email,
        from: MAIL_USER,
        subject: 'Notification MS Test Mail',
        html: '테스트 메일 입니다. <br>회원 가입을 환영 합니다.',
      });
      console.log('send result : ', result);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}
