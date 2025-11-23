import { Injectable } from '@nestjs/common';

@Injectable()
export class SaludoService {
    getHello(): string {
        return 'Hello World!';
    }

    getHerlloQuery(query: {nombre: string, edad: number}): string {
        return `Bienvenido ${query.nombre}! tenes ${query.edad} años.`;
    }
}
