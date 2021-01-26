import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // for global middleware - app.use(logger) 
  // global scoped filters - app.useGlobalFilters(new HttpExceptionFilter());
  // for global guard - app.useGlobalGuards(new RolesGuard());
  await app.listen(3000);
}
bootstrap();
