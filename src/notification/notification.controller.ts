import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { NOTIFICATION } from '../util/constants/swagger';

@ApiTags(NOTIFICATION)
@Controller()
export class NotificationController {}
