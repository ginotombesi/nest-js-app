import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateSalaDto {
    @IsString()
    @MinLength(2)
    @IsNotEmpty()
    nombre: string;
    @IsString()
    @MinLength(2)
    @IsNotEmpty()
    descripcion: string;
}
