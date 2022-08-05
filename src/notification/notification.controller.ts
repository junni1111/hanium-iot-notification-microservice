import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NOTIFICATION } from '../util/constants/swagger';
import { SendMailDto } from './mail/dto/send-mail.dto';
import { MailService } from './mail/mail.service';
import { SendMessageDto } from './telegram/dto/send-message.dto';
import { TelegramService } from './telegram/telegram.service';

@ApiTags(NOTIFICATION)
@Controller()
export class NotificationController {
  constructor(
    private readonly mailService: MailService,
    private readonly telegramService: TelegramService,
  ) {}

  @Post('email')
  sendMail(@Body() sendMailDto: SendMailDto) {
    return this.mailService.sendMail(sendMailDto);
  }

  @Post('telegram')
  sendMessage(@Body() sendMessageDto: SendMessageDto) {
    return this.telegramService.sendMessage(sendMessageDto);
  }
}
