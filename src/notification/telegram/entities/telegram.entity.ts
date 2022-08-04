import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('telegram_logs')
export class Telegram {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;
}
