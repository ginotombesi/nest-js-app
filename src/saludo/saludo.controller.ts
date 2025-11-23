import { Controller, Get, Param, Query, UseGuards, ParseBoolPipe } from '@nestjs/common';
import { SaludoService } from './saludo.service';
import { ValidarSaludoPipe } from './pipes/validar-saludo/validar-saludo.pipe';
import { CLIENT_RENEG_LIMIT } from 'tls';
import { AuthGuard } from './guard/auth/auth.guard';

@Controller('saludo')
export class SaludoController {

    constructor(private readonly saludoService: SaludoService) {}

    @Get()
    getHello(): string {
        return this.saludoService.getHello();
    }

    @Get('/:status')
    getHelloParams(@Param('status', ParseBoolPipe) status: boolean) {
        return this.saludoService.getStatus(status);
    }

    @Get('query')
    @UseGuards(AuthGuard)
    getHerlloQuery(@Query(ValidarSaludoPipe) query: {nombre: string, edad: number}): string {

        console.log(typeof query.edad);
        return this.saludoService.getHerlloQuery(query);
    }
}
