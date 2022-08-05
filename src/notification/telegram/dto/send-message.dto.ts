import { IsNumber, IsString } from 'class-validator';

export class SendMessageDto {
  @IsNumber()
  chatId: number;

  @IsString()
  text: string;
}
