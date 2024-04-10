import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const stringPORT = process.env?.PORT;
  const PORT = stringPORT ? +stringPORT : 3000;
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  await app.listen(PORT);
  console.log(`Server is running at port ${PORT}`);
}
bootstrap();
