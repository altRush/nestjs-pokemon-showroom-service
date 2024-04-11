import { PokemonProfileDto } from 'src/pokemon-profile/dto/pokemon-profile.dto';

export class CreatePokemonTeamDto {
  name: string;
  id: string;
  pokemon: Array<PokemonProfileDto>;
}
