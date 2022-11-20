import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
} from '@nestjs/common';
import { EntidadesService } from './entidades.service';
import { CreateEntidadeDto } from './dto/create-entidade.dto';
import { UpdateEntidadeDto } from './dto/update-entidade.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Entidades')
@Controller('entidades')
export class EntidadesController {
  constructor(private readonly entidadesService: EntidadesService) {}
  
  @Version('1')
  @Post()
  create(@Body() createEntidadeDto: CreateEntidadeDto) {
    return this.entidadesService.create(createEntidadeDto);
  }

  @Version('1')
  @Get()
  findAll() {
    return this.entidadesService.findAll();
  }

  @Version('1')
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entidadesService.findOne(+id);
  }

  @Version('1')
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEntidadeDto: UpdateEntidadeDto,
  ) {
    return this.entidadesService.update(+id, updateEntidadeDto);
  }

  @Version('1')
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entidadesService.remove(+id);
  }
}
