import { PartialType } from '@nestjs/mapped-types';
import { CreateSalaDto } from './create-sala.dto';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdateSalaDto extends PartialType(CreateSalaDto) {
    @IsString()
    @MinLength(2)
    @IsNotEmpty()
    nombre: string;
    @IsString()
    @MinLength(2)
    @IsNotEmpty()
    descripcion: string;
}
