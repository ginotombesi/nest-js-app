import { IsNotEmpty } from "class-validator";

export class CreateTournamentDto {
    @IsNotEmpty()
    nombre: string;
    cash: number;
}