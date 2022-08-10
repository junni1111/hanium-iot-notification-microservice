import { Module } from '@nestjs/common';
import { KakaoService } from './kakao.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({ timeout: 5000, maxRedirects: 5 })],
  controllers: [],
  providers: [KakaoService],
  exports: [KakaoService],
})
export class KakaoModule {}
