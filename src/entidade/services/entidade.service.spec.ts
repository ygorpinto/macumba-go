import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EntidadeEntity } from '../models/entidade.entity';
import { EntidadeService } from './entidade.service';

describe('EntidadeService', () => {
  let service: EntidadeService;

  const mock = {
    find: jest.fn(),
    save: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EntidadeService,
        {
          provide: getRepositoryToken(EntidadeEntity),
          useValue: mock,
        },
      ],
    }).compile();

    service = module.get<EntidadeService>(EntidadeService);
  });

  it('should not be null', () => {
    expect(service.getAll()).not.toEqual(null);
  });
});
