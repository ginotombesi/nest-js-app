import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { not } from 'rxjs/internal/util/not';
import { Tournament } from 'interfaces/tournament.dto';
import { CreateTournament } from 'interfaces/create-tournament.dto';

@Injectable()
export class TournamentsService {

    private tournaments: Tournament[] = [
    { id: 1, nombre: 'Sunday Million', cash: '109' },
    { id: 2, nombre: 'Hiper',          cash: '109' },
  ];

  private newTournament: Tournament[] = [];

    getTournaments (): Tournament[] {
        return this.tournaments
    }

    getTournamentById (id: number) {
        const tournamentFound =  this.tournaments.find(tournament => tournament.id === id);

        if (!tournamentFound) {
            return new NotFoundException(`Torneo con id ${id} no encontrado`);
        }

        return tournamentFound;
    }

    createTournament(@Body() tournament: CreateTournament) {
        this.newTournament.push({
            ...tournament,
            id: this.tournaments.length + 1,
        });
        console.log(this.newTournament);
        
        return this.newTournament;
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
