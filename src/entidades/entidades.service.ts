import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEntidadeDto } from './dto/create-entidade.dto';
import { UpdateEntidadeDto } from './dto/update-entidade.dto';
import { Entidade } from './entities/entidade.entity';

@Injectable()
export class EntidadesService {
  constructor(
    @InjectRepository(Entidade)
    private entidadeRepository: Repository<Entidade>,
  ) {}
  create(createEntidadeDto: CreateEntidadeDto) {
    console.log(createEntidadeDto);
  }

  findAll() {
    return this.entidadeRepository.find({});
  }

  findOne(id: number) {
    return `This action returns a #${id} entidade`;
  }

  update(id: number, updateEntidadeDto: UpdateEntidadeDto) {
    console.log(updateEntidadeDto);
    return `This action updates a #${id} entidade`;
  }

  remove(id: number) {
    return `This action removes a #${id} entidade`;
  }
}
