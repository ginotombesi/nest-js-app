import { Controller, Get, Query } from '@nestjs/common';
import { SaludoService } from './saludo.service';
import { ValidarSaludoPipe } from './pipes/validar-saludo/validar-saludo.pipe';
import { CLIENT_RENEG_LIMIT } from 'tls';

@Controller('saludo')
export class SaludoController {

    constructor(private readonly saludoService: SaludoService) {}

    @Get()
    getHello(): string {
        return this.saludoService.getHello();
    }

    @Get('query')
    getHerlloQuery(@Query(ValidarSaludoPipe) query: {nombre: string, edad: number}): string {

        console.log(typeof query.edad);
        return this.saludoService.getHerlloQuery(query);
    }
}
