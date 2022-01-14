import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Ekho API')
    .setDescription('The Ekho API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  //const port = Math.floor(Math.random() * (4000 - 3001) + 3001);
  await app.listen(process.env.PORT || 8080);
  //console.log('app is listening on port '+port)
}
bootstrap();
