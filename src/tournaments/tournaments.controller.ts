import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TournamentsService } from './tournaments.service'
import { Tournament } from 'interfaces/tournament.dto';

@Controller('/tournaments')
export class TournamentsController {

    constructor(private tournamentsService: TournamentsService) {}


    @Get()
    getAllTournaments(@Query() query: any) { 
        console.log(query);
        return this.tournamentsService.getTournaments();
    }

    @Get('/:id')
    getTournamentById(@Param('id') id: string) { 
        return this.tournamentsService.getTournamentById(parseInt(id));
    }

    @Post()
    createTournament(@Body() tournament: Tournament) {
        return this.tournamentsService.createTournament(tournament);
    }

    @Delete()
    deleteTournament() {
        return this.tournamentsService.deleteTournament();
    }

    @Put()
    updateTournament() {
        return this.tournamentsService.updateTournament();
    }

    @Patch()
    modifyTournament() {
        return this.tournamentsService.modifyTournament();
    }

}
