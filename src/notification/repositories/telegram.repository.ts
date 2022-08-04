import { EntityRepository, Repository } from 'typeorm';
import { Telegram } from '../telegram/entities/telegram.entity';

@EntityRepository(Telegram)
export class EmailRepository extends Repository<Telegram> {}
