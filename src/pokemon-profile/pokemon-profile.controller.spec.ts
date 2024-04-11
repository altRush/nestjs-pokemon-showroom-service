import { Test, TestingModule } from '@nestjs/testing';
import { PokemonProfileController } from './pokemon-profile.controller';

describe('PokemonProfileController', () => {
  let controller: PokemonProfileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokemonProfileController],
    }).compile();

    controller = module.get<PokemonProfileController>(PokemonProfileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
