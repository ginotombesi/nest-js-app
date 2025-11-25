import { Module } from '@nestjs/common';
import { TournamentsModule } from './tournaments/tournaments.module';
import { SaludoModule } from './saludo/saludo.module';
import { PagosModule } from './pagos/pagos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pgConfig } from '../dbConfig';
import { SalasModule } from './salas/salas.module';

@Module({
  imports: [TournamentsModule, SaludoModule, PagosModule, TypeOrmModule.forRoot(pgConfig), SalasModule],
})
export class AppModule {}
