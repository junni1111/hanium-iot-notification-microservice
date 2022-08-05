import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Telegraf } from 'telegraf';
import { SendMessageDto } from './dto/send-message.dto';

@Injectable()
export class TelegramService implements OnModuleInit {
  constructor(private readonly configService: ConfigService) {}
  public bot = new Telegraf(
    this.configService.get<string>('TELEGRAM_BOT_TOKEN'),
  );

  async sendMessage(sendMessageDto: SendMessageDto) {
    return this.bot.telegram.sendMessage(
      sendMessageDto.chatId,
      sendMessageDto.text,
    );
  }

  onModuleInit() {
    console.log(`Initialization : hanium-iot-bot`);

    // command : id
    this.bot.command('id', (ctx) => {
      const chat_id = ctx.update.message.from.id;
      console.log('chat_id : ', chat_id);
      ctx.reply(
        `your id : ${chat_id}` +
          '\n' +
          `please enter id` +
          '\n' +
          'https://www.firmwarebank.co.kr/',
      );
    });

    // launch bot
    this.bot.launch();
  }
}
