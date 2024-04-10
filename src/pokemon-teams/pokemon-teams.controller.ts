import { Controller, Get, Param } from '@nestjs/common';
import { PokemonTeamsService } from './pokemon-teams.service';
import { PokemonProfile } from 'src/common/pokemon-profile.interface';

@Controller('pokemon-teams')
export class PokemonTeamsController {
  constructor(private readonly pokemonTeamsService: PokemonTeamsService) {}

  @Get(':pokemonId')
  getPokemonById(
    @Param('pokemonId') pokemonId: string,
  ): Promise<PokemonProfile> {
    return this.pokemonTeamsService.getPokemonById(pokemonId);
  }
}
