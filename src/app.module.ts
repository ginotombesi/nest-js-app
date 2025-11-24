import { Module } from '@nestjs/common';
import { TournamentsModule } from './tournaments/tournaments.module';
import { SaludoModule } from './saludo/saludo.module';
import { PagosModule } from './pagos/pagos.module';

@Module({
  imports: [TournamentsModule, SaludoModule, PagosModule],
})
export class AppModule {}
