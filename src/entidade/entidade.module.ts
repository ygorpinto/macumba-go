import { Module } from '@nestjs/common';
import { EntidadeService } from './services/entidade.service';
import { EntidadeController } from './controllers/entidade.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntidadeEntity } from './models/entidade.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([EntidadeEntity])
  ],
  providers: [EntidadeService],
  controllers: [EntidadeController]
})
export class EntidadeModule {}
