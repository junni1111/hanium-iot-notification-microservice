import { EntityRepository, Repository } from 'typeorm';
import { Kakao } from '../kakao/entities/kakao.entity';

@EntityRepository(Kakao)
export class EmailRepository extends Repository<Kakao> {}
