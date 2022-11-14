import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { EntidadeEntity } from '../models/entidade.entity';
import { Entidade } from '../models/entidade.interface';
import { EntidadeService } from '../services/entidade.service';
import { EntidadeController } from './entidade.controller';

describe('EntidadeController', () => {
  
  let controller: EntidadeController;

  let mock:Entidade = {
    id: 1,
    name:"Anivia",
    difficulty:5,
    countDifficulty:12,
    createdAt: new Date('2021/07/10')
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EntidadeService,
        {
          provide: getRepositoryToken(EntidadeEntity),
          useValue: mock
        }
      ],
      controllers: [EntidadeController],
    }).compile();

    controller = module.get<EntidadeController>(EntidadeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create data', () => {
    expect(controller.create(mock)).toBeTruthy();
  });
});
