import { EntityRepository, Repository } from 'typeorm';
import { Email } from '../email/entities/email.entity';

@EntityRepository(Email)
export class EmailRepository extends Repository<Email> {}
