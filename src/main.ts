import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './util/swagger';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const NOTIFICATION_HOST = configService.get<string>('NOTIFICATION_HOST');
  const NOTIFICATION_PORT = configService.get<number>('NOTIFICATION_PORT');

  setupSwagger(app);

  await app.listen(NOTIFICATION_PORT, () => {
    console.log(
      `NOTIFICATION MS -> HOST : ${NOTIFICATION_HOST}, PORT : ${NOTIFICATION_PORT}`,
    );
  });
}
bootstrap();
