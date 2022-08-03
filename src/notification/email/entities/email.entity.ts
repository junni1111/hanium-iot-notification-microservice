import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('email-logs')
export class Email {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;
}
