import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EntidadeEntity } from '../models/entidade.entity';
import { Entidade } from '../models/entidade.interface';

@Injectable()
export class EntidadeService {
  constructor(
    @InjectRepository(EntidadeEntity)
    private readonly EntidadeEntityRepository: Repository<Entidade>,
  ) {}

  async getAll() {
    const entidadees = await this.EntidadeEntityRepository.find();
    return entidadees;
  }

  async getOne(id: number) {
    const entidades = await this.EntidadeEntityRepository.findOneBy({ id: id });
    return entidades;
  }

  async create(entidade: Entidade) {
    const entidadeToSave = await this.EntidadeEntityRepository.save(entidade);
    return entidadeToSave;
  }

  async update(id: number, entidade: Entidade) {
    const entidadeToUpdate = await this.EntidadeEntityRepository.update(
      { id: id },
      entidade,
    );
    return entidadeToUpdate;
  }

  async delete(id: number) {
    const entidadeToDelete = await this.EntidadeEntityRepository.delete({
      id: id,
    });
    return entidadeToDelete;
  }
}
