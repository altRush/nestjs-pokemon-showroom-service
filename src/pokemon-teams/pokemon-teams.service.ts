import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { catchError, firstValueFrom } from 'rxjs';
import { PokemonProfile } from 'src/common/pokemon-profile.interface';

@Injectable()
export class PokemonTeamsService {
  private readonly logger = new Logger('PokemonTeamsController');
  constructor(private readonly httpService: HttpService) {}

  async getPokemonById(pokemonId: string): Promise<PokemonProfile> {
    const { data } = await firstValueFrom(
      this.httpService
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );

    return data;
  }
}
