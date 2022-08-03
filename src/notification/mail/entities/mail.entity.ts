import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('mail_logs')
export class Mail {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;
}
