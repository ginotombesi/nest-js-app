import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidarSaludoPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    const edad = parseInt(value.edad.toString(), 10);

    if (isNaN(edad)) {
      throw new HttpException('Edad debe ser un numero', HttpStatus.BAD_REQUEST);
    }

    return {...value, edad};
  }
}
