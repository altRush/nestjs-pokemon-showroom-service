import { Module } from '@nestjs/common';
import { PokemonTeamsService } from './pokemon-teams.service';
import { PokemonTeamsController } from './pokemon-teams.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [PokemonTeamsService],
  controllers: [PokemonTeamsController],
})
export class PokemonTeamsModule {}
