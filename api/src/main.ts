import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { EntityNotFoundExceptionFilter } from './exception-filters';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new EntityNotFoundExceptionFilter());
  app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 }));
  app.enableCors();
  await app.listen(3333);
}

bootstrap();
