import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //En caso de enviar data adicional que no este definida en el DTO, limpiara aquella data que no aplice (remueve la basura del modelo)
      forbidNonWhitelisted: true //sirve para arrojar un error en caso de que una propiedad no definida por el dto llegue de parte del cliente
    })
  )

  await app.listen(3000);
}
bootstrap();
