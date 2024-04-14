import { IsOptional, IsString } from 'class-validator';

export class PokemonProfileDto {
  @IsString()
  name: string;

  @IsString()
  id: string;

  @IsString()
  imageUrl: string;

  @IsString()
  type1: string;

  @IsString()
  @IsOptional()
  type2: string | null;
}
