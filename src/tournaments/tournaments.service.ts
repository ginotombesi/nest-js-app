import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { TournamentDto } from './dto/tournament.dto';
import { CreateTournamentDto } from './dto/create-tournament.dto';

@Injectable()
export class TournamentsService {

    private tournaments: TournamentDto[] = [
    { id: 1, nombre: 'Sunday Million', cash: 109 },
    { id: 2, nombre: 'Hiper',          cash: 218 },
  ];

  private newTournament: TournamentDto[] = [];

    getTournaments (): TournamentDto[] {
        return this.tournaments
    }

    getTournamentById (id: number) {
        const tournamentFound =  this.tournaments.find(tournament => tournament.id === id);

        if (!tournamentFound) {
            return new NotFoundException(`Torneo con id ${id} no encontrado`);
        }

        return tournamentFound;
    }

    createTournament(@Body() tournament: CreateTournamentDto) {
        this.tournaments.push({
            ...tournament,
            id: this.tournaments.length + 1,
        });
        
        
        return `Se ha creado el torneo ${tournament.nombre}`;
    }

    deleteTournament() {
        return 'Eliminar un torneo';
    }

    updateTournament() {
        return 'Actualizar un torneo';
    }

    modifyTournament() {
        return 'Modificar un torneo';
    }
}
