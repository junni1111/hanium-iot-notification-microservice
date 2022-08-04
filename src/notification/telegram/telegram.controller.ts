import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TELEGRAM } from '../../util/constants/swagger';
import { TelegramService } from './telegram.service';

@ApiTags(TELEGRAM)
@Controller('telegram')
export class TelegramController {
  constructor(private readonly telegramService: TelegramService) {}

  @Get()
  async sendMessage(
    @Query('chat_id') chatId: number,
    @Query('text') text: string,
  ) {
    console.log(`chat_id : ${chatId}, text : ${text}`);
    const result = await this.telegramService.sendMessage(chatId, text);
    return result;
  }
}
