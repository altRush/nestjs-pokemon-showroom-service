import { Test, TestingModule } from '@nestjs/testing';
import { PokemonTeamsService } from './pokemon-teams.service';

describe('PokemonTeamsService', () => {
  let service: PokemonTeamsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonTeamsService],
    }).compile();

    service = module.get<PokemonTeamsService>(PokemonTeamsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
