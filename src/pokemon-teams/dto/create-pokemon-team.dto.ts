import { PokemonProfileDto } from 'src/pokemon-profile/dto/pokemon-profile.dto';

export class CreatePokemonTeamDto {
  name: string;
  pokemonMembers: Array<PokemonProfileDto>;
}
