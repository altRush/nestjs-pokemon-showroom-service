import { PartialType } from '@nestjs/mapped-types';
import { PokemonProfileDto } from './pokemon-profile.dto';

export class UpdatePokemonProfile extends PartialType(PokemonProfileDto) {}
