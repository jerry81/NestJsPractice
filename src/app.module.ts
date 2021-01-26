import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsController } from './cats/cats.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';
import { CatsService } from './cats/cats.service';
import { BirdsModule } from './birds/birds.module';
import { CatsModule } from './cats/cats.module'

@Module({
  imports: [BirdsModule, CatsModule],
  controllers: [AppController, DogsController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule {}
