import { Module } from '@nestjs/common';
import { EmailController } from './email/email.controller';
import { KakaoController } from './kakao/kakao.controller';
import { EmailService } from './email/email.service';
import { KakaoService } from './kakao/kakao.service';

@Module({
  controllers: [EmailController, KakaoController],
  providers: [EmailService, KakaoService],
})
export class NotificationModule {}
