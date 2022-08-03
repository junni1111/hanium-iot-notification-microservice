import * as path from 'path';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class DataBaseConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const POSTGRES = 'postgres';
    const DATABASE_HOST = this.configService.get<string>('DATABASE_HOST');
    const DATABASE_NAME = this.configService.get<string>('DATABASE_NAME');
    const DATABASE_USER = this.configService.get<string>('DATABASE_USER');
    const DATABASE_PASSWORD =
      this.configService.get<string>('DATABASE_PASSWORD');
    const DATABASE_PORT = this.configService.get<number>('DATABASE_PORT');
    const DATABASE_SYNCHRONIZE = this.configService.get<boolean>(
      'DATABASE_SYNCHRONIZE',
    );
    return {
      type: POSTGRES,
      host: DATABASE_HOST,
      database: DATABASE_NAME,
      username: DATABASE_USER,
      password: DATABASE_PASSWORD,
      port: +DATABASE_PORT,

      entities: [path.join(__dirname, '../../**/*.entity.{ts,js}')],
      synchronize: DATABASE_SYNCHRONIZE,
    };
  }
}
