import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailerConfigService } from '../../config/mailer/mailer.service';
import { MailerConfigModule } from '../../config/mailer/mailer.module';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [MailerConfigModule],
      useClass: MailerConfigService,
      inject: [MailerConfigService],
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
