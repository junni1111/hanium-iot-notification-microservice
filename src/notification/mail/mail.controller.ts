import { Controller, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MAIL } from '../../util/constants/swagger';
import { MailService } from './mail.service';

@ApiTags(MAIL)
@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Post('')
  sendMail(@Query('email') email: string) {
    console.log('email : ', email);
    return this.mailService.sendMail(email);
  }
}
