import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // for global middleware - app.use(logger) 
  // global scoped filters - app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
