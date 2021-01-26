import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats/cats.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';
import { CatsService } from './cats/cats.service';
import { BirdsModule } from './birds/birds.module';
import { CatsModule } from './cats/cats.module'
import { LoggerMiddleware } from './middleware/logger.middleware'

@Module({
  imports: [BirdsModule, CatsModule],
  controllers: [AppController, DogsController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) { // in nestmodule
    consumer.apply(LoggerMiddleware) // takes in middleware injectable 
    .exclude({ path: 'cats', method: RequestMethod.POST }) // exclusions
    .forRoutes({ path: 'c**s', method: RequestMethod.ALL}) // scope it down
  }
}
