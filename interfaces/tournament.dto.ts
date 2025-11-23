import { IsNotEmpty, IsString } from 'class-validator';

export class Tournament {
    @IsNotEmpty()
    id: number;
    @IsString()
    nombre: string;
    @IsString()
    cash: string;
}