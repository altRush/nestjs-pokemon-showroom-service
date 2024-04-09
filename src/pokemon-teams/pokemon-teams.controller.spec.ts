import { Test, TestingModule } from '@nestjs/testing';
import { PokemonTeamsController } from './pokemon-teams.controller';

describe('PokemonTeamsController', () => {
  let controller: PokemonTeamsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonTeamsController],
    }).compile();

    controller = module.get<PokemonTeamsController>(PokemonTeamsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
