import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { KAKAO } from '../../util/constants/swagger';

@ApiTags(KAKAO)
@Controller()
export class KakaoController {}
