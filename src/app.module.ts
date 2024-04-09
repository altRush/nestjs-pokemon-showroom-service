import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonTeamsModule } from './pokemon-teams/pokemon-teams.module';
import { PokemonTeamsController } from './pokemon-teams/pokemon-teams.controller';
import { PokemonTeamsService } from './pokemon-teams/pokemon-teams.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development'],
    }),
    PokemonTeamsModule,
  ],
  controllers: [AppController, PokemonTeamsController],
  providers: [AppService, PokemonTeamsService],
})
export class AppModule {}