import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TournamentsService } from './tournaments.service'
import { TournamentDto } from './dto/tournament.dto';
import { CreateTournamentDto } from './dto/create-tournament.dto';

@Controller('/tournaments')
export class TournamentsController {

    // inyeccion de dependencias, construimos una clase que recibe un servicio
    constructor(private tournamentsService: TournamentsService) {} // esto es para inyectar el servicio
    // un constructor en una clase es una funcion que se ejecuta al momento de crear/instanciar un objeto
    @Get()
    getAllTournaments(@Query() query: any, @Body() tournaments: TournamentDto ) { // el @Query() es para obtener los query params y el @Body() es para obtener el body
        console.log(query);
        console.log(tournaments);
        return this.tournamentsService.getTournaments();
    }

    @Get('/:id')
    getTournamentById(@Param('id') id: string) { 
        return this.tournamentsService.getTournamentById(parseInt(id));
    }

    @Post()
    createTournament(@Body() tournament: CreateTournamentDto) {
        console.log(tournament);
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
