import { Controller, Get } from '@nestjs/common';
import { PokemonTeamsService } from './pokemon-teams.service';

@Controller('pokemon-teams')
export class PokemonTeamsController {
  constructor(private readonly pokemonTeamsService: PokemonTeamsService) {}

  @Get('yolo')
  getHello(): string {
    return this.pokemonTeamsService.yolo();
  }
}
