import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Entidade } from '../models/entidade.interface';
import { EntidadeService } from '../services/entidade.service';

@Controller('entidade')
export class EntidadeController {
    constructor(
        private EntidadeService: EntidadeService
    ) {}
    @Get()
    async getAll() {
        return await this.EntidadeService.getAll();
    }

    @Get('/:id')
    async getOne(@Param() req) {
        return await this.EntidadeService.getOne(req.id);
    }

    @Post()
    async create(@Body() entidade:Entidade) {
        return await this.EntidadeService.create(entidade);
    }

    @Put('/:id')
    async update(@Param() req ,@Body() entidade:Entidade) {
        return await this.EntidadeService.update(req.id,entidade);
    }

    @Delete('/:id')
    async delete(@Param() req) {
        return await this.EntidadeService.delete(req.id);
    }
}
