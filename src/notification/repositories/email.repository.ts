import { EntityRepository, Repository } from 'typeorm';
import { Mail } from '../mail/entities/mail.entity';

@EntityRepository(Mail)
export class EmailRepository extends Repository<Mail> {}
