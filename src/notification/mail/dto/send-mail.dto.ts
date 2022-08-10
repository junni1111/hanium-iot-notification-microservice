import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendMailDto {
  @ApiProperty({ type: 'email', example: 'test@example.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ type: 'string', example: 'hello, world!' })
  @IsString()
  text: string;
}
