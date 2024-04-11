import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { PokemonProfileDto } from './dto/pokemon-profile.dto';

@Injectable()
export class PokemonProfileService {
  private readonly logger = new Logger('PokemonTeamsController');
  constructor(private readonly httpService: HttpService) {}

  async getPokemonByIdOrName(
    pokemonIdOrName: string,
  ): Promise<PokemonProfileDto> {
    const {
      data: { name, id, sprites, types },
    } = await firstValueFrom(
      this.httpService
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonIdOrName}`)
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );

    return {
      name,
      id,
      imageUrl: sprites.front_default,
      type1: types[0].type.name,
      type2: types[1].type.name || null,
    };
  }
}
