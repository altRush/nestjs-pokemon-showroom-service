import { Module } from '@nestjs/common';
import { PokemonTeamsService } from './pokemon-teams.service';
import { PokemonTeamsController } from './pokemon-teams.controller';

@Module({
  providers: [PokemonTeamsService],
  controllers: [PokemonTeamsController],
})
export class PokemonTeamsModule {}
