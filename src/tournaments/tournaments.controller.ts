import { Controller, Get } from '@nestjs/common';

@Controller('tournaments')
export class TournamentsController {
    @Get()
    getAllTournaments() { 
        return 'Listando Torneos...'
    }
}
