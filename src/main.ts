import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'api/v',
  });

  const config = new DocumentBuilder()
    .setTitle(`darwini-api`)
    .setDescription(`Env: des - Serviço de administração medica`)
    .setVersion(`1`)
    .setContact(
      'Rafael Russo',
      'https://www.linkedin.com/in/rafael-russop/',
      'rrussoporchera@gmail.com',
    )
    .setExternalDoc('Open Api: swagger-ui-json', '/swagger-ui-json')
    .build();

  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('swagger-ui', app, document);

  app.enableCors();
  await app.listen(3000);
  console.log(`🔥 listening on port 3000!`);
}
bootstrap();
