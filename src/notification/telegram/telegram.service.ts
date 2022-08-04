import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TelegramService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  requestUrl(url: string): string {
    const TELEGRAM_BOT_TOKEN =
      this.configService.get<string>('TELEGRAM_BOT_TOKEN');
    return `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/${url}`;
  }

  async sendTelegramMessage(chat_id: number, text: string) {
    return lastValueFrom(
      this.httpService.get(this.requestUrl('sendMessage'), {
        params: { chat_id, text },
      }),
    );
  }
}
