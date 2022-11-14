import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Version,
} from '@nestjs/common';
import { Entidade } from '../models/entidade.interface';

@Controller('entidade')
export class EntidadeController {
  constructor(private EntidadeService) {}
  @Version('1')
  @Get()
  async getAll() {
    return await this.EntidadeService.getAll();
  }

  @Version('1')
  @Get('/:id')
  async getOne(@Param() req) {
    return await this.EntidadeService.getOne(req.id);
  }

  @Version('1')
  @Post()
  async create(@Body() entidade: Entidade) {
    return await this.EntidadeService.create(entidade);
  }

  @Version('1')
  @Put('/:id')
  async update(@Param() req, @Body() entidade: Entidade) {
    return await this.EntidadeService.update(req.id, entidade);
  }

  @Version('1')
  @Delete('/:id')
  async delete(@Param() req) {
    return await this.EntidadeService.delete(req.id);
  }
}
