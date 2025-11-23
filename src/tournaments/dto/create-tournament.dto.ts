import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateTournamentDto {
  @IsNotEmpty()
  @MinLength(3)
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @Min(1)
  @IsNumber()
  cash: number;
  
}
