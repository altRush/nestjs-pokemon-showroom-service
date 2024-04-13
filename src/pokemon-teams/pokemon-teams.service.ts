import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
} from '@nestjs/common';
import { Db, ObjectId } from 'mongodb';
import { CreatePokemonTeamDto, UpdatePokemonTeamDto } from './dto';

@Injectable()
export class PokemonTeamsService {
  private readonly logger = new Logger('PokemonTeamsService');
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
  ) {}

  async createPokemonTeam(payload: CreatePokemonTeamDto): Promise<void> {
    await this.db.collection('teams').insertOne(payload);
    this.logger.log(payload);
  }

  async updatePokemonTeam(
    id: string,
    payload: UpdatePokemonTeamDto,
  ): Promise<void> {
    this.logger.log(id);
    if (!ObjectId.isValid(id)) {
      this.logger.warn('Not valid team ID');
      throw new BadRequestException();
    }

    this.logger.log(payload);
    await this.db.collection('teams').updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...payload,
        },
      },
    );
    this.logger.log(`Pokemon team id ${id} is updated`);
  }

  async deletePokemonTeam(id: string): Promise<void> {
    this.logger.log(id);
    await this.db.collection('teams').deleteOne({
      _id: new ObjectId(id),
    });
    this.logger.log(`Pokemon team id ${id} is deleted`);
  }
}
