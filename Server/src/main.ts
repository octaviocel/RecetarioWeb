import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder } from '@nestjs/swagger';
import { SwaggerModule } from '@nestjs/swagger/dist';

import { AppModule } from './app.module';
import { createAdmin, createCategories, createCommunities, createRoles, createUnits } from './utils/bootstrap-data';

import { _apiPort } from './utils/constants';
import { HttpExceptionFilter } from './utils/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Bootstrap');
  const config = new DocumentBuilder()
    .setTitle('REST API - Refresh token')
    .setDescription('REST API using JWT for access tokens and refresh tokens.')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new HttpExceptionFilter());
  app.enableCors({
    origin: '*',
    credentials: true,
  });

  await app.listen(_apiPort);
  await createRoles();
  await createAdmin();
  await createCategories();
  await createCommunities();
  await createUnits();
  logger.log(`Listen in port: ${_apiPort}`);
}
bootstrap();
