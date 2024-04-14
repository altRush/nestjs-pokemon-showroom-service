import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { PokemonTeamsService } from './pokemon-teams.service';
import { CreatePokemonTeamDto, UpdatePokemonTeamDto } from './dto';

@Controller('pokemon-teams')
export class PokemonTeamsController {
  constructor(private readonly pokemonTeamsService: PokemonTeamsService) {}

  @Post('create-team')
  createPokemonTeam(
    @Body(ValidationPipe) payload: CreatePokemonTeamDto,
  ): Promise<void> {
    return this.pokemonTeamsService.createPokemonTeam(payload);
  }

  @Put('update-team')
  updatePokemonTeam(
    @Body() body: { id: string; payload: UpdatePokemonTeamDto },
  ): Promise<void> {
    const { id, payload } = body;
    return this.pokemonTeamsService.updatePokemonTeam(id, payload);
  }

  @Delete('delete-team')
  deletePokemonTeam(@Body() id: string): Promise<void> {
    return this.pokemonTeamsService.deletePokemonTeam(id);
  }

  @Get('find-team/:id')
  findPokemonTeam(@Param('id') id: string) {
    return this.pokemonTeamsService.findPokemonTeam(id);
  }
}
