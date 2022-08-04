import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TELEGRAM } from '../../util/constants/swagger';
import { TelegramService } from './telegram.service';

@ApiTags(TELEGRAM)
@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Get()
  async sendTelegramMessage(
    @Query('chat_id') chat_id: number,
    @Query('text') text: string,
  ) {
    console.log(`chat_id : ${chat_id}, text : ${text}`);
    const { data } = await this.telegramService.sendTelegramMessage(
      chat_id,
      text,
    );
    return data;
  }
}
