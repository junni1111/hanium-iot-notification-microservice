import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MAIL } from '../../util/constants/swagger';

@ApiTags(MAIL)
@Controller()
export class MailController {}
