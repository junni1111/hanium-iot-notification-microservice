import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EMAIL } from '../../util/constants/swagger';

@ApiTags(EMAIL)
@Controller()
export class EmailController {}
