import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('entidade')
export class EntidadeEntity {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ length: 500 })
  name: string;

  @Column('int')
  difficulty: number;

  @Column('int')
  countDifficulty: number;

  @Column({type:'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createdAt: Date;

}