import { Injectable } from '@nestjs/common';
import { CreateEntidadeDto } from './dto/create-entidade.dto';
import { UpdateEntidadeDto } from './dto/update-entidade.dto';

@Injectable()
export class EntidadesService {
  create(createEntidadeDto: CreateEntidadeDto) {
    console.log(createEntidadeDto);
    return 'This action adds a new entidade';
  }

  findAll() {
    return `This action returns all entidades`;
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
