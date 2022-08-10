import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendMessageDto {
  @ApiProperty({ type: 'number', example: 5391189900 })
  @IsNumber()
  chatId: number;

  @ApiProperty({ type: 'string', example: 'hello, world!' })
  @IsString()
  text: string;
}
