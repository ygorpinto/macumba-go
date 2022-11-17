import { PartialType } from '@nestjs/swagger';
import { CreateEntidadeDto } from './create-entidade.dto';

export class UpdateEntidadeDto extends PartialType(CreateEntidadeDto) {}
