import { Module } from '@nestjs/common';
import { PokemonProfileController } from './pokemon-profile.controller';
import { PokemonProfileService } from './pokemon-profile.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PokemonProfileController],
  providers: [PokemonProfileService],
})
export class PokemonProfileModule {}
