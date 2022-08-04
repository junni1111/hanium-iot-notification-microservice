import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { MailModule } from './mail/mail.module';
import { KakaoModule } from './kakao/kakao.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [MailModule, KakaoModule, TelegramModule],
  controllers: [NotificationController],
})
export class NotificationModule {}
