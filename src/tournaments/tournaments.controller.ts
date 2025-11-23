import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TournamentsService } from './tournaments.service'
import { Tournament } from 'interfaces/tournament.dto';
import { CreateTournament } from 'interfaces/create-tournament.dto';
import { UpdateTournament } from 'interfaces/update-tournament.dto';

@Controller('/tournaments')
export class TournamentsController {

    // inyeccion de dependencias, construimos una clase que recibe un servicio
    constructor(private tournamentsService: TournamentsService) {} // esto es para inyectar el servicio
    // un constructor en una clase es una funcion que se ejecuta al momento de crear/instanciar un objeto
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
    createTournament(@Body() tournament: CreateTournament) {
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
