import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonTeamsModule } from './pokemon-teams/pokemon-teams.module';
import { PokemonTeamsController } from './pokemon-teams/pokemon-teams.controller';
import { PokemonTeamsService } from './pokemon-teams/pokemon-teams.service';
import { HttpModule } from '@nestjs/axios';
import { PokemonProfileModule } from './pokemon-profile/pokemon-profile.module';
import { PokemonProfileController } from './pokemon-profile/pokemon-profile.controller';
import { PokemonProfileService } from './pokemon-profile/pokemon-profile.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    PokemonTeamsModule,
    HttpModule,
    PokemonProfileModule,
  ],
  controllers: [
    AppController,
    PokemonTeamsController,
    PokemonProfileController,
  ],
  providers: [AppService, PokemonTeamsService, PokemonProfileService],
})
export class AppModule {}
