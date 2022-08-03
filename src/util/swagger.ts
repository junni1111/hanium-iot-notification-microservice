import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerCustomOptions,
} from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';
import { UTILITY, EMAIL, KAKAO } from './constants/swagger';

const swaggerCustomOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
};

export const setupSwagger = (app: INestApplication): void => {
  const options = new DocumentBuilder()
    .setTitle('IoT Notification Microservice')
    .setDescription('IoT Notification Microservice API 문서입니다')
    .setVersion('0.0.1')
    .addTag(UTILITY)
    .addTag(EMAIL)
    .addTag(KAKAO)
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('ms-spec', app, document, swaggerCustomOptions);
};
