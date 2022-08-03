import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UTILITY } from './util/constants/swagger';

@ApiTags(UTILITY)
@Controller()
export class HealthController {
  @Get()
  healthCheck(@Res() res) {
    console.log(`Health check`);

    return res.status(HttpStatus.OK).send('ok');
  }
}
