import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { MailController } from './mail/mail.controller';
import { KakaoController } from './kakao/kakao.controller';
import { MailService } from './mail/mail.service';
import { KakaoService } from './kakao/kakao.service';

@Module({
  controllers: [NotificationController, MailController, KakaoController],
  providers: [MailService, KakaoService],
})
export class NotificationModule {}
