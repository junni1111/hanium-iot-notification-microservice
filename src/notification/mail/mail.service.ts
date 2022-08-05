import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { SendMailDto } from './dto/send-mail.dto';

@Injectable()
export class MailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly configService: ConfigService,
  ) {}

  async sendMail(sendMailDto: SendMailDto) {
    try {
      const MAIL_USER = this.configService.get<string>('MAIL_USER');
      const result = await this.mailerService.sendMail({
        to: sendMailDto.email,
        from: MAIL_USER,
        subject: '회원가입을 축하합니다.',
        html: '회원 가입을 환영 합니다.<br>' + `${new Date()}`,
      });
      console.log('send result : ', result);
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}
