import { Module } from '@nestjs/common';
import { MailController } from './mail/mail.controller';
import { KakaoController } from './kakao/kakao.controller';
import { MailService } from './mail/mail.service';
import { KakaoService } from './kakao/kakao.service';

@Module({
  controllers: [MailController, KakaoController],
  providers: [MailService, KakaoService],
})
export class NotificationModule {}
