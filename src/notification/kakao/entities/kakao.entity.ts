import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('kakao_logs')
export class Kakao {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;
}
