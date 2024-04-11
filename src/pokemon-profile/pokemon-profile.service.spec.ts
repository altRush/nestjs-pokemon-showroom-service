import { Test, TestingModule } from '@nestjs/testing';
import { PokemonProfileService } from './pokemon-profile.service';

describe('PokemonProfileService', () => {
  let service: PokemonProfileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonProfileService],
    }).compile();

    service = module.get<PokemonProfileService>(PokemonProfileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
