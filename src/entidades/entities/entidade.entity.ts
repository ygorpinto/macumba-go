import { EntityHelper } from 'src/utils/entity-helper';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Entidade extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: true })
  name: string | null;

  @Column({ nullable: true })
  difficulty: string;

  @Column({ nullable: true })
  countDifficulty: string;

  @CreateDateColumn()
  createdAt: Date;
}
