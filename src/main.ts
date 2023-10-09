import { NestFactory } from '@nestjs/core';
import { AppModule } from './application/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('CRUD User')
  .setDescription('the user api description')
  .setVersion('1.0')
  .addTag("user")
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000);
}
bootstrap();
