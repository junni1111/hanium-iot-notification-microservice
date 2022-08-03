import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kakao-logs')
export class Kakao {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;
}
