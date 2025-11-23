import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TournamentsController } from './tournaments.controller';
import { TournamentsService } from './tournaments.service';
import { LoggerMiddleware } from './logger/logger.middleware';
import { AuthMiddleware } from './auth/auth.middleware';

@Module({
  controllers: [TournamentsController],
  providers: [TournamentsService]
})
export class TournamentsModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      // middleware para que solo se ejecute en /tournaments GET y /tournaments/:id GET 
        consumer.apply(LoggerMiddleware).forRoutes({path: 'tournaments', method: RequestMethod.GET} , {path: 'tournaments/:id', method: RequestMethod.GET})
        .apply(AuthMiddleware).forRoutes('tournaments');
    }
}
