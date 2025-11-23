import { Module } from '@nestjs/common';
import { TournamentsModule } from './tournaments/tournaments.module';
import { SaludoModule } from './saludo/saludo.module';

@Module({
  imports: [TournamentsModule, SaludoModule],
})
export class AppModule {}
